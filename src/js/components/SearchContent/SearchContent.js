
import React from 'react';


import SearchNav from './SearchNav.js'; // 类型筛选菜单
import SearchFilterChannel from './SearchFilterChannel.js'; // 版块筛选菜单
import SearchFilterOrder from './SearchFilterOrder.js'; // 排序筛选菜单
import SearchResult from './SearchResult/SearchResult.js'; // 搜索结果显示

import ajaxRequest from '../../plugs/ajaxRequest.js';

var SearchContent = React.createClass({

	getInitialState: function(){

		// 获取查询字符keyword
		// 首先将字符串以&分成数组
		var searchStr = location.search.slice(1).split('&');
		var keyword = null;
		searchStr.forEach((searchItem, index) => {
			if(keyword !== null){
				return;
			}
			// 拿到=号前面的key值，key=value
			var searchKey = searchItem.slice(0, searchItem.indexOf('='));
			// 找到key值为keyword的value
			if(searchKey === 'keyword'){
				keyword = searchItem.slice( searchItem.indexOf('=')+1 );
			}
		});

		// 创建筛选数据
		function createSearchNavData(title, filterName){
			return {
				// 标题
				title,
				// 筛选关键字
				filterName
			};
		}

		// 搜索类型数据
		var searchNavData = [
			createSearchNavData('综合', 'video'),
			createSearchNavData('番剧', 'series'),
			createSearchNavData('专题', 'special'),
			createSearchNavData('UP主', 'upuser'),
		];

		// 版块筛选数据
		var filterChannel = [
			createSearchNavData('全部', '-1'),
			createSearchNavData('动画', '1'),
			createSearchNavData('番剧', '33'),
			createSearchNavData('国创', '167'),
			createSearchNavData('舞蹈', '20'),
			createSearchNavData('游戏', '4'),
			createSearchNavData('科技', '36'),
			createSearchNavData('生活', '160'),
			createSearchNavData('娱乐', '5'),
			createSearchNavData('鬼畜', '119'),
			createSearchNavData('电影', '23'),
			createSearchNavData('时尚', '155'),
			createSearchNavData('电视剧', '11')
		];

		// 排序方式数据
		var filterOrder = [
			createSearchNavData('综合', 'default'),
			createSearchNavData('点击', 'click'),
			createSearchNavData('弹幕', 'dm'),
			createSearchNavData('评论', 'scores'),
			createSearchNavData('日期', 'senddate'),
			createSearchNavData('收藏', 'stow')
		];

		return {
			// 搜索类型数据
			searchNavData: searchNavData,
			// 版块筛选数据
			filterChannel: filterChannel,
			// 排序筛选数据
			filterOrder: filterOrder,
			// 搜索关键字
			keyword: keyword,
			// 当前搜索类型选择
			type: 'video',
			// 当前版块筛选选择
			channel: '-1',
			// 当前排序筛选选择
			order: 'default',
			// page控制第几批数据
			page: 1,
			// 请求过的搜索结果保存
			searchResultStorage: {},
			// 当前搜索结果 Array
			currentSearchResult: null
		}
	},

	componentDidMount: function(){

		this.props.loadingChange();

		// 执行默认搜索请求
		this.requestSearchResult();

		// 将搜索关键字存入本地储存localStorage
		var historySearch = localStorage.getItem('historySearch');
		historySearch = historySearch === null ? [] : JSON.parse(historySearch);
		if(this.state.keyword !== null){
			// 如果已经有该关键字则删除
			var historyHaveKeyword = historySearch.indexOf(decodeURI(this.state.keyword));
			if(historyHaveKeyword !== -1){
				historySearch.splice(historyHaveKeyword, 1);
			}
			// 在数组头部添加关键字
			historySearch.unshift(decodeURI(this.state.keyword));
			// 数据大于5只取前5条数据
			if(historySearch.length >= 5){
				historySearch = historySearch.slice(0, 5);
			}
			localStorage.setItem('historySearch', JSON.stringify(historySearch));
		}
	},

	// 请求搜索结果 参数为筛选数据
	requestSearchResult: function(type, channel, order, page){
		var { keyword, searchResultStorage } = this.state;

		// 如果没有传筛选数据参数则取state中的
		var type = type || this.state.type
		var channel = channel || this.state.channel
		var order = order || this.state.order
		var page = page || this.state.page

		// filterName用于作为属性名保存当前搜索结果数据到searchResultStorage中
		var filterName = type + channel + order;

		this.setState({ currentSearchResult: null });

		// 如果该搜索结果数据已经存在，直接使用该数据，退出函数
		if(searchResultStorage[filterName] !== undefined){
			// 设置一个ready属性标记该数据为已经存在的
			searchResultStorage[filterName].ready = true;
			// 直接使用该数据设置为当前搜索结果
			this.setState({ 
				currentSearchResult: searchResultStorage[filterName],
				type,
				channel,
				order,
				page
			});
			return;
		}

		// 请求搜索结果
		var searchResultSuccess = (data) => {
			console.log(JSON.parse(data.data), 'searchResultSuccess');
			var data = JSON.parse(data.data);
			var searchResult = null;
			// 根据type的不同，数据存在于不同的属性名中
			switch (type){
				case 'video':
					searchResult = data.res.result || [];
					break;
				case 'series':
					searchResult = data.tp_res.result || [];
					break;
				case 'special':
					searchResult = data.sp_res.result || [];
					break;
				case 'upuser':
					searchResult = data.up_res.result || [];
					break;
				default: break;
			} 
			// 将搜索结果保存
			searchResultStorage[filterName] = searchResult;
			this.setState({ 
				currentSearchResult: searchResult,
				type,
				channel,
				order,
				page
			});
		}
		var searchResultError = (error) => {
			console.log(error, 'searchResultError');
		}
		var searchResultURL = 'http://weizijie.cc:3000/search?keyword='+keyword+'&page='+page+'&order='+order+'&tids='+channel+'&type='+type;
		ajaxRequest(searchResultURL, 'GET', searchResultSuccess, searchResultError);

	},

	render: function(){

		if(this.state.keyword === null){
			return <p className='loading-info'>获取不到“keyword”查询字符</p>
		}

		var typeIsVideo = this.state.type === 'video' ? true : false;

		return	<div className='search-content'>
							<SearchNav searchNavData={this.state.searchNavData} requestSearchResult={this.requestSearchResult} typeIsVideo={typeIsVideo} />
							{
								typeIsVideo
								?	<div className='filter-container'>
										<SearchFilterChannel filterChannel={this.state.filterChannel} requestSearchResult={this.requestSearchResult} />
										<SearchFilterOrder filterOrder={this.state.filterOrder} requestSearchResult={this.requestSearchResult} />
									</div>
								: ''
							}
							<SearchResult currentSearchResult={this.state.currentSearchResult} searchType={this.state.type} />
						</div>
	}
});

export default SearchContent;