
import React from 'react';

var HotSearch = React.createClass({
	render: function(){

		var hotSearchData = this.props.hotSearchData;

		return	<div className='hot-search'>
					<h3 className='search-info-title'>热门搜索</h3>
					{
						hotSearchData === null
						?	<p className='loading-info'>正在加载...</p>
						:   <ul className='hot-search-list'>
							{
								hotSearchData.map((hotSearchItem, index) => {

									// 关键字
									var keyword = hotSearchItem.keyword;
									
									return	<li key={index}>
												<a href={'search.html?keyword='+ keyword}>{keyword}</a>
											</li>
								})
							}
							</ul>
					}
				</div>
	}
});

export default HotSearch;