import React from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { liveRequest } from './actions';
import { ReadyShow } from '../../components';
import LiveSection from './LiveSection';
import { Banner } from '../app/Banner';
import './index.less';

let actionCreators = {
  liveRequest
};

class Live extends React.Component {

  componentDidMount() {
    this.fetchLive();
  }

  fetchLive = () => {
    let { liveRequest } = this.props;
    liveRequest();
  }

  render() {

    const { 
      liveList,
      bannerList,
      loading,
      error
    } = this.props;

    return (
      <div className='live-content'>
        <Banner dataList={bannerList} loading={loading} error={error} />
        <ReadyShow loading={loading} error={error} >
          <LiveSection liveSectionList={liveList} />
        </ReadyShow>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.live;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Live));
