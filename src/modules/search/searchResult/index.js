import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  search,
  changeSearchType
} from '../actions';
import SwitchResult from './SwitchResult';

const searchTypeNavConfig = [
  { title: '综合', type: 'all' },
  { title: '番剧', type: 'bangumi' },
  { title: 'UP主', type: 'upuser' },
  { title: '影视', type: 'pgc' }
];

class SearchResult extends React.Component {

  componentDidMount() {
    const { searchType } = this.props;
    this.fetchSearch(searchType);
  }

  fetchSearch = (type) => {
    const { search, match: { params: { keyword } } } = this.props;
    search(keyword, type);
  }

  onSwitchTypeSearch = (type) => {
    const { changeSearchType } = this.props;
    return () => {
      changeSearchType(type);
      this.fetchSearch(type);
    }
  }

  render() {

    const {
      searchLoading,
      searchError,
      searchResult,
      searchType
    } = this.props;

    return (
      <div className='search-content'>
        <nav className='search-nav menu'>
          <ul className='menu-list'>
            {
              searchTypeNavConfig.map((navConfig) => {
                let { title, type } = navConfig;
                return (
                  <li key={type} className={searchType === type && 'menu-active'} onClick={this.onSwitchTypeSearch(type)} >
                    <a>{title}</a>
                  </li>
                );
              })
            }
          </ul>
        </nav>
        <SwitchResult loading={searchLoading} error={searchError} result={searchResult} type={searchType} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.search;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    search,
    changeSearchType
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
