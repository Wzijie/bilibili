import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  search
} from '../actions';
import ResultList from './ResultList';

class SearchResult extends React.Component {

  componentDidMount() {
    this.fetchSearch();
  }

  fetchSearch = () => {
    const { search, match: { params: { keyword } } } = this.props;
    search(keyword);
  }

  render() {

    const {
      searchLoading,
      searchError,
      searchResult
    } = this.props;
    
    return (
      <div className='search-content'>
        <nav className='search-nav menu'>
          <ul className='menu-list'>
            <li className='menu-active'>
              <a>综合</a>
            </li>
          </ul>
        </nav>
        <ResultList loading={searchLoading} error={searchError} dataList={searchResult.video} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.search;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    search
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
