import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import SearchBar from './SearchBar';
import Hot from './Hot';
import History from './History';
import Suggest from './Suggest';
import SearchResult from './searchResult';
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

  fetchHot = () => {
    let { hotRequest } = this.props;
    hotRequest();
  }

  fetchSuggest = (keyword) => {
    let { suggestRequest } = this.props;
    suggestRequest(keyword);
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

  onSearchBarFocus = () => {
    let { history: { push }, match: { path } } = this.props;
    push(path);
  }

  onSearchSubmit = (event) => {
    event.preventDefault();
    let { keyword, history: { push }, match: { path } } = this.props;
    push(`${path}/${keyword}`);
  }

  onDeleteHistorySearch = (index) => {
    let { deleteHistory } = this.props;
    return () => {
      deleteHistory(index);
    }
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
      suggestError,
      historyList
    } = this.props;

    return (
      <div className='initial-search'>
        <SearchBar 
          keyword={keyword} 
          onChangeKeyword={this.onChangeKeyword} 
          onClearKeyword={this.onClearKeyword} 
          onSearchBarFocus={this.onSearchBarFocus} 
          onSearchSubmit={this.onSearchSubmit}
        />
        <Switch>
          <Route path={`${path}/:keyword`} component={SearchResult} />
          <Route path={`${path}`} render={({ match: { path } }) => (
            <div className='search-message'>
              {
                keyword === ''
                  ? (
                    <div>
                      <Hot loading={hotLoading} error={hotError} dataList={hotList} path={path} />
                      <History dataList={historyList} onDeleteHistorySearch={this.onDeleteHistorySearch} path={path} />
                    </div>
                  )
                  : <Suggest loading={suggestLoading} error={suggestError} dataList={suggestList} path={path} />
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
