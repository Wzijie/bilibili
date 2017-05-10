
import React from 'react';
import navRoll from '../../plugs/navRoll.js';

var RankingNav = React.createClass({
	componentDidMount: function(){
		navRoll('.roll-list');
	},
	render: function(){

		var navData = this.props.navData;

		// 请求并设置排行榜数据方法
		var requestRankData = this.props.requestRankData;

		function navClickHandler(dataName){
			return () => {
				requestRankData(dataName);
			}
		}

		return	<nav className='rank-nav'>
							<ul className='roll-list'>
							{
								navData.map((navItem, index) => {
									
									// 标题，数据名
									var { title, dataName } = navItem;

									return	<li className={index === 0 ? 'on' : ''} key={index} onClick={navClickHandler(dataName)} >
														<a>{title}</a>
													</li>
								})
							}
							</ul>
						</nav>
	}
});

export default RankingNav;