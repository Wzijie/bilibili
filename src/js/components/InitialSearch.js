
import React from 'react';

import ajaxRequest from '../plugs/ajaxRequest.js';

var InitialSearch = React.createClass({
	getInitialState: function(){
		return {
			hotSearch: null
		}
	},
	componentDidMount: function(){
		var hotSearchSuccess = (data) => {
			console.log(JSON.parse(data.data), 'hotSearch');
			var hotSearchList = JSON.parse(data.data).list;
			this.setState({ hotSearch: hotSearchList });
		}
		var hotSearchError = (error) => {
			console.log(error, 'hotSearchError');
		}
		var hotSearchURL = 'http://localhost:3000/hotSearch';
		ajaxRequest(hotSearchURL, 'GET', hotSearchSuccess, hotSearchError);
	},
	render: function(){
		var hotSearch = this.state.hotSearch;
		return	<div className='initial-search'>
					<div className='search-operation'>
						<form action='search.html' method='GET' className='search-form'>
							<input className='search-input' name='keyword' type='text' autoComplete='off' placeholder='搜索视频、番剧、up主或AV号' />
						</form>
						<i className='search-input-delete'></i>
						<div className='search-cancel'>取消</div>
					</div>
					<div className='search-message'>
						<div className='hot-search'>
							<h3 className='search-info-title'>热门搜索</h3>
							{
								hotSearch === null
								?	<p className='loading-info'>正在加载...</p>
								:   <ul className='hot-search-list'>
									{
										hotSearch.map((hotSearchItem, index) => {
											var kwyword = hotSearchItem.keyword;
											return	<li key={index}>
														<a href={'search.html?keyword='+ kwyword}>{kwyword}</a>
													</li>
										})
									}
									</ul>
							}
						</div>
						<div className='history-search'>
							<h3 className='search-info-title'>历史搜索</h3>
							<ul className='history-search-list'>
								<li>
									<a href='###'>哥哥太爱我怎么办</a>
									<i className='history-delete'></i>
								</li>
								<li>
									<a href='###'>哥哥太爱我怎么办</a>
									<i className='history-delete'></i>
								</li>
								<li>
									<a href='###'>哥哥太爱我怎么办</a>
									<i className='history-delete'></i>
								</li>
								<li>
									<a href='###'>哥哥太爱我怎么办</a>
									<i className='history-delete'></i>
								</li>
							</ul>
						</div>
						<ul className='search-suggest'>
							<li>
								<a href='###'>哥哥太爱我怎么办</a>
								<span className='suggest-bangumi'>番剧</span>
							</li>
							<li>
								<a href='###'>哥哥太爱我怎么办</a>
								<span className='suggest-bangumi'>番剧</span>
							</li>
							<li>
								<a href='###'>哥哥太爱我怎么办</a>
								<span className='suggest-bangumi'>番剧</span>
							</li>
						</ul>
					</div>
				</div>
	}
});

export default InitialSearch;