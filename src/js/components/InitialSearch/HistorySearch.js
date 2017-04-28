
import React from 'react';

var HistorySearch  = React.createClass({
	render: function(){

		// 历史搜索数据
		var historySearchData = this.props.historySearchData;
		// 是否有历史搜索数据
		var noHistorySearch = historySearchData.length === 0 ? true : false;
		// 删除历史搜索数据方法
		var removeHistorySearch = this.props.removeHistorySearch;

		return	<div className='history-search'>
					<h3 className='search-info-title'>历史搜索</h3>
					{
						noHistorySearch
						?	<p className='loading-info'>暂无历史搜索</p>
						:   <ul className='history-search-list'>
							{
								historySearchData.map((historySearchItem, index) => {
									// historySearchItem 搜索关键字
									return	<li key={index}>
												<a href={'search.html?keyword='+ historySearchItem}>{historySearchItem}</a>
												<i className='history-delete' onClick={removeHistorySearch(index)}></i>
											</li>
								})
							}
							</ul>
					}
				</div>
	}	
});

export default HistorySearch;