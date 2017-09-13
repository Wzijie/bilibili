import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  rankingRequest,
  rankingSuccess
} from './actions';
import { ReadyShow } from '../../components';
import RankList from './RankList';
import './index.less';

let actionCreators = {
  rankingRequest,
  rankingSuccess
};

function createNavConfig(title, rankId) {
  return {
    title,
    rankId
  };
}

const navConfig = [
  createNavConfig('全站', '0'),
  createNavConfig('动画', '1'),
  createNavConfig('番剧', '33'),
  createNavConfig('电影', '23'),
  createNavConfig('音乐', '3'),
  createNavConfig('游戏', '4'),
  createNavConfig('科技', '36'),
  createNavConfig('生活', '160'),
  createNavConfig('娱乐', '5'),
  createNavConfig('电视剧', '11'),
  createNavConfig('时尚', '155'),
  createNavConfig('鬼畜', '119'),
];

class Ranking extends React.Component {

  componentDidMount() {
    this.fetchRanking();
  }

  fetchRanking = (rankId, day) => {
    let { rankingRequest, rankingSuccess, rankingListCache } = this.props;
    if (rankingListCache[rankId]) {
      rankingSuccess(rankingListCache[rankId], rankId);
    } else {
      rankingRequest(rankId, day);
    }
  }

  render() {

    let { rankingList, rankingLoading, rankingError } = this.props;

    return (
      <div>
        <nav className='rank-nav'>
          <ul className='roll-list'>
            {
              navConfig.map((navItem) => {
                let { title, rankId } = navItem;
                return (
                  <li key={rankId} >
                    <NavLink to={`/ranking/${rankId}`} onClick={() => {this.fetchRanking(rankId)}} activeClassName='on'>{title}</NavLink>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        <ReadyShow loading={rankingLoading} error={rankingError} >
          <RankList dataList={rankingList} />
        </ReadyShow>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.ranking;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Ranking));
