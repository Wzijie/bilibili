import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { ReadyShow } from '../../components'
import SearchBar from './SearchBar';
import Hot from './Hot';
import History from './History';
import Suggest from './Suggest';
import './index.less';

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
        <div className='search-message'>
          {
            keyword === ''
              ? (
                <div>
                  <ReadyShow loading={hotLoading} error={hotError} >
                    <Hot dataList={hotList} />
                  </ReadyShow>
                  <History />
                </div>
              )
              : (
                <ReadyShow loading={suggestLoading} error={suggestError} >
                  <Suggest dataList={suggestList} />
                </ReadyShow>
              )
          }
        </div>

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
