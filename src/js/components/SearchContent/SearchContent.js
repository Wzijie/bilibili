
import React from 'react';

import SearchNav from './SearchNav.js';
import SearchFilterChannel from './SearchFilterChannel.js';
import SearchFilterOrder from './SearchFilterOrder.js';
import SearchResult from './SearchResult.js';

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

		// 搜索类型
		var searchNavData = [
			createSearchNavData('综合', 'video'),
			createSearchNavData('番剧', 'series'),
			createSearchNavData('专题', 'special'),
			createSearchNavData('UP主', 'upuser'),
		];

		// 版块筛选
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

		// 排序方式
		var filterOrder = [
			createSearchNavData('综合', 'default'),
			createSearchNavData('点击', 'click'),
			createSearchNavData('弹幕', 'dm'),
			createSearchNavData('评论', 'scores'),
			createSearchNavData('日期', 'senddate'),
			createSearchNavData('收藏', 'stow')
		];

		return {
			searchNavData: searchNavData,
			filterChannel: filterChannel,
			filterOrder: filterOrder,
			keyword: keyword,
			type: 'video',
			channel: '-1',
			order: 'default',
			page: 1,
			searchResultStorage: {},
			currentSearchResult: null
		}
	},

	componentDidMount: function(){
		this.props.loadingChange();
		this.requestSearchResult();
	},

	requestSearchResult: function(type, channel, order, page){
		var { keyword, searchResultStorage } = this.state;
		var type = type || this.state.type
		var channel = channel || this.state.channel
		var order = order || this.state.order
		var page = page || this.state.page
		var filterName = type + channel + order;
		this.setState({ currentSearchResult: null });
		if(searchResultStorage[filterName] !== undefined){
			searchResultStorage[filterName].ready = true;
			this.setState({ 
				currentSearchResult: searchResultStorage[filterName],
				type,
				channel,
				order,
				page
			});
			return;
		}

		var searchResultSuccess = (data) => {
			console.log(JSON.parse(data.data), 'searchResultSuccess');
			var data = JSON.parse(data.data);
			var searchResult = null;
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
		var searchResultURL = 'http://localhost:3000/search?keyword='+keyword+'&page='+page+'&order='+order+'&tids='+channel+'&type='+type;
		ajaxRequest(searchResultURL, 'GET', searchResultSuccess, searchResultError);

	},

	render: function(){

		var typeIsVideo = this.state.type === 'video' ? true : false;

		return	<div className='search-content'>
							<SearchNav searchNavData={this.state.searchNavData} requestSearchResult={this.requestSearchResult} searchType={this.state.type} />
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