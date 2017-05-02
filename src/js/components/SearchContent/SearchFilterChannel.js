
import React from 'react';

import navRoll from '../../plugs/navRoll.js';

var SearchFilterChannel = React.createClass({

	componentDidMount: function(){
		navRoll('.channel-filter .roll-list');
	},

	changeFilter: function(channel){
		return () => {
			this.props.requestSearchResult(undefined, channel);
		}
	},

	render: function(){

		var filterChannel = this.props.filterChannel;

		return	<nav className='search-filter rank-nav channel-filter'>
							<ul className='roll-list'>
							{
								filterChannel.map((filterChannelItem, index) => {

									// 标题，筛选关键字
									var { title, filterName } = filterChannelItem;

									var firstListClass = index === 0 ? 'on' : '';
									
									return	<li className={firstListClass} key={index} onClick={this.changeFilter(filterName)}>
														<a>{title}</a>
													</li>
								})
							}
							</ul>
						</nav>
	}
});

export default SearchFilterChannel;