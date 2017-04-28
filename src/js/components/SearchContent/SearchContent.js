
import React from 'react';

import SearchNav from './SearchNav.js';
import SearchFilterChannel from './SearchFilterChannel.js';

var SearchContent = React.createClass({

	getInitialState: function(){

		function createSearchNavData(title, filterName){
			return {
				// 标题
				title,
				// 筛选关键字
				filterName
			};
		}

		var searchNavData = [
			createSearchNavData('综合', 'video'),
			createSearchNavData('番剧', 'series'),
			createSearchNavData('专题', 'special'),
			createSearchNavData('UP主', 'upuser'),
		];

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
			type: 'video'
		}
	},

	componentDidMount: function(){
		this.props.loadingChange();
	},

	render: function(){
		return	<div className='search-content'>
							<SearchNav searchNavData={this.state.searchNavData} />
							<div className='filter-container'>
								<SearchFilterChannel filterChannel={this.state.filterChannel} class='channel-filter' />
								<SearchFilterChannel filterChannel={this.state.filterOrder} class='order-filter' />
							</div>
						</div>
	}
});

export default SearchContent;