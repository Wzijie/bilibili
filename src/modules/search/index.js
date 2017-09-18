import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import SearchBar from './SearchBar';
import Hot from './Hot';
import History from './History';
import Suggest from './Suggest';
import Result from './Result';
import './index.less';

// function HotAndHistory({ hotLoading, hotError, hotList }) {
//   return (
//     <div>
//       <Hot loading={hotLoading} error={hotError} dataList={hotList} />
//       <History />
//     </div>
//   );
// }

// function SearchMessage({ keyword, hotAndHistory, suggest }) {
//   if (keyword === '') {
//     return hotAndHistory;
//   } else {
//     return suggest;
//   }
// }

class Search extends React.Component {

  componentDidMount() {
    this.fetchHot();
  }

  onChangeKeyword = (event) => {
    let { changeKeyword } = this.props;
    changeKeyword(event.target.value);
    this.fetchSuggest(event.target.value);
  }

  onClearKeyword = () => {
    let { changeKeyword } = this.props;
    changeKeyword('');
  }

  fetchHot = () => {
    let { hotRequest } = this.props;
    hotRequest();
  }

  fetchSuggest = (keyword) => {
    let { suggestRequest } = this.props;
    suggestRequest(keyword);
  }

  render() {

    const {
      match: { path },
      keyword,
      hotList,
      hotLoading,
      hotError,
      suggestList,
      suggestLoading,
      suggestError
    } = this.props;

    return (
      <div className='initial-search'>
        <SearchBar keyword={keyword} onChangeKeyword={this.onChangeKeyword} onClearKeyword={this.onClearKeyword} />
        <Switch>
          <Route path={`${path}/:keyword`} component={Result} />
          <Route path={`${path}/`} render={() => (
            <div className='search-message'>
              {
                keyword === ''
                  ? (
                    <div>
                      <Hot loading={hotLoading} error={hotError} dataList={hotList} />
                      <History />
                    </div>
                  )
                  : <Suggest loading={suggestLoading} error={suggestError} dataList={suggestList} />
              }
              {/* <SearchMessage
            keyword={keyword}
            hotAndHistory={<HotAndHistory hotLoading={hotLoading} hotError={hotError} hotList={hotList} />}
            suggest={<Suggest loading={suggestLoading} error={suggestError} dataList={suggestList} />}
          /> */}

            </div>
          )} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.search;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
