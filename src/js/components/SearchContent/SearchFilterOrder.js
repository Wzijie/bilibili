
import React from 'react';

import navRoll from '../../plugs/navRoll.js';

var SearchFilterChannel = React.createClass({

	componentDidMount: function(){
		navRoll('.order-filter .roll-list');
	},

	changeFilter: function(order){
		return () => {
			this.props.requestSearchResult(undefined, undefined, order);
		}
	},

	render: function(){

		var filterOrder = this.props.filterOrder;

		return	<nav className='search-filter rank-nav order-filter'>
							<ul className='roll-list'>
							{
								filterOrder.map((filterOrderItem, index) => {

									// 标题，筛选关键字
									var { title, filterName } = filterOrderItem;

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