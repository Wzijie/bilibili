
import React from 'react';

import SearchOperation from './SearchOperation.js'; // 搜索操作组件
import HotSearch from './HotSearch.js'; // 热门搜索组件
import HistorySearch from './HistorySearch.js'; // 历史搜索组件
import SearchSuggest from './SearchSuggest.js'; // 搜索建议组件

import ajaxRequest from '../../plugs/ajaxRequest.js';
import createScriptJsonp from '../../plugs/createScriptJsonp.js';

var InitialSearch = React.createClass({
	getInitialState: function(){
		var historySearch = localStorage.getItem('historySearch');
		historySearch = historySearch === null ? [] : JSON.parse(historySearch);
		return {
			// 表单输入的搜索关键字
			keyword: '',
			// 热很搜索数据 Array
			hotSearch: null,
			// 历史搜索数据 Array
			historySearch: historySearch,
			// 搜索建议数据
			searchSuggest: []
		}
	},

	componentDidMount: function(){
		// 请求热门搜索数据 start
		var hotSearchSuccess = (data) => {
			console.log(JSON.parse(data.data), 'hotSearch');
			var hotSearchList = JSON.parse(data.data).list;
			this.setState({ hotSearch: hotSearchList });
		}
		var hotSearchError = (error) => {
			console.log(error, 'hotSearchError');
		}
		var hotSearchURL = 'http://weizijie.cc:3000/hotSearch';
		ajaxRequest(hotSearchURL, 'GET', hotSearchSuccess, hotSearchError);
		// 请求热门搜索数据 end
	},

	componentWillReceiveProps: function(nextProps){
		if(nextProps.initialSearchDisplay === true){
			this.refs.initialSearch.classList.add('show');
		}else{
			this.refs.initialSearch.classList.remove('show');
		}
	},

	// 改变keyword数据时执行的操作
	keywordChange: function(value){
		this.setState({ keyword: value });
		if(value === ''){
			return;
		}
		// 如果搜索关键字不为空则请求搜索建议数据 start
		window.jsonpCallBack.getSearchSuggest = (data) => {
			console.log(data, 'searchSuggest');
			var searchSuggest = [];
			// 分为番剧搜索建议和普通搜索建议，处理一下
			if(data.result.accurate !== undefined){
				searchSuggest.push(...data.result.accurate.bangumi);
			}
			if(data.result.tag !== undefined){
				searchSuggest.push(...data.result.tag);
			}
			this.setState({ searchSuggest: searchSuggest });
		}
		var searchSuggestURL = 'http://s.search.bilibili.com/main/suggest?jsoncallback=jsonpCallBack.getSearchSuggest&func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&bangumi_acc_num=3&special_acc_num=0&upuser_acc_num=0&tag_num=10&term='+ value +'&rnd=0.22961591460117337&_='+ Date.now();
		var searchSuggestScript = createScriptJsonp(searchSuggestURL);
		document.body.removeChild(searchSuggestScript);
		// 如果搜索关键字不为空则请求搜索建议数据 end

	},

	// 删除历史搜索
	removeHistorySearch: function(index){
		return () => {
			var newHistorySearch = this.state.historySearch.concat();
			newHistorySearch.splice(index, 1);
			localStorage.setItem('historySearch', JSON.stringify(newHistorySearch));
			this.setState({ historySearch: newHistorySearch });
		}
	},

	render: function(){

		// 切换搜索面板是否显示方法
		var toggleInitialSearch = this.props.toggleInitialSearch;

		return	<div className='initial-search' ref='initialSearch'>
					<SearchOperation keyword={this.state.keyword} keywordChange={this.keywordChange} toggleInitialSearch={toggleInitialSearch} />
					<div className='search-message'>
					{
						this.state.keyword === ''
						?	<div className='hot-history-content'>
						  		<HotSearch hotSearchData={this.state.hotSearch} />
								<HistorySearch historySearchData={this.state.historySearch} removeHistorySearch={this.removeHistorySearch} />
						 	</div>
						:   <SearchSuggest searchSuggestData={this.state.searchSuggest} />
					}
					</div>
				</div>
	}
});

export default InitialSearch;