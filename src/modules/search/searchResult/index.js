import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import {
  search,
  changeSearchType,
  changeSearchOrder,
  addHistory
} from '../actions';
import SwitchResult from './SwitchResult';

const searchTypeNavConfig = [
  { title: '综合', type: 'all' },
  { title: '番剧', type: 'bangumi' },
  { title: 'UP主', type: 'upuser' },
  { title: '影视', type: 'pgc' }
];

const searchOrderNavConfig = [
  { title: '默认排序', order: 'totalrank' },
  { title: '播放多', order: 'click' },
  { title: '新发布', order: 'pubdate' },
  { title: '弹幕多', order: 'dm' }
];

const OrderNav = ({ searchOrder, onSwitchOrderSearch }) => (
  <nav className='search-nav menu order-nav'>
    <ul className='menu-list'>
      {
        searchOrderNavConfig.map((orderNavConfig) => {
          let { title, order } = orderNavConfig;
          return (
            <li key={order} className={searchOrder === order && 'on'} onClick={onSwitchOrderSearch(order)} >
              <a>{title}</a>
            </li>
          )
        })
      }
    </ul>
  </nav>
)

class SearchResult extends React.Component {

  componentDidMount() {
    const { searchType, searchOrder } = this.props;
    this.fetchSearch(searchType, searchOrder);
    this.addHistorySearch();
    window.addEventListener('scroll', this.onScrollFetchMoreSearch);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollFetchMoreSearch);
  }

  fetchSearch = (type, order, page) => {
    const { search, match: { params: { keyword } } } = this.props;
    search(keyword, type, order, page);
  }

  // 改变type搜索
  onSwitchTypeSearch = (type) => {
    const { changeSearchType, searchOrder } = this.props;
    return () => {
      changeSearchType(type);
      this.fetchSearch(type, searchOrder);
    }
  }

  // 改变排序搜索
  onSwitchOrderSearch = (order) => {
    const { changeSearchOrder, searchType } = this.props;
    return () => {
      changeSearchOrder(order);
      this.fetchSearch(searchType, order);
    }
  }

  // 滚动加载更多
  onScrollFetchMoreSearch = () => {
    const { searchLoading, searchType, searchOrder, page, totalPage } = this.props;
    if (totalPage > page && !searchLoading) {
      if (document.body.scrollHeight - document.documentElement.scrollTop < window.innerHeight + 300) {
        this.fetchSearch(searchType, searchOrder, page + 1);
      }
    }
  }

  addHistorySearch = () => {
    let { addHistory, match: { params: { keyword } } } = this.props;
    addHistory(keyword);
  }

  render() {

    const {
      searchLoading,
      searchError,
      searchResult,
      searchType,
      searchOrder,
      page,
      totalPage
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
        {searchType === 'all' && <OrderNav searchOrder={searchOrder} onSwitchOrderSearch={this.onSwitchOrderSearch} />}
        <Spin spinning={searchLoading} tip='正在加载...' style={{ position: 'fixed' }}>
          <SwitchResult loading={false} error={searchError} result={searchResult} type={searchType} />
          {(document.documentElement.scrollTop > 0 && page >= totalPage) && <p className='loading-info'>没有更多信息了</p>}
        </Spin>
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
    changeSearchType,
    changeSearchOrder,
    addHistory
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
