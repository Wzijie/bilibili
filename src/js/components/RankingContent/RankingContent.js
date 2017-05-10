
import React from 'react';


import RankingTitle from './RankingTitle.js'; // 排行榜标题
import RankingNav from './RankingNav.js'; // 排行榜导航
import RankingList from './RankingList.js'; // 排行榜列表

import ajaxRequest from '../../plugs/ajaxRequest.js'; // ajax方法

var RankingContent = React.createClass({
	getInitialState: function(){

		// 创建排行榜导航数据
		function createNavData(title, dataName){
			return {
				// 标题
				title: title,
				// 数据名
				dataName: dataName
			}
		}

		// 排行榜导航数据
		var navData = [
			createNavData('全站', 'all-3-0'),
			createNavData('动画', 'all-3-1'),
			createNavData('番剧', 'all-3-33'),
			createNavData('国创', 'all-3-167'),
			createNavData('电影', 'all-3-23'),
			createNavData('音乐', 'all-3-3'),
			createNavData('舞蹈', 'all-3-129'),
			createNavData('游戏', 'all-3-4'),
			createNavData('科技', 'all-3-36'),
			createNavData('生活', 'all-3-160'),
			createNavData('鬼畜', 'all-3-119'),
			createNavData('时尚', 'all-3-155'),
			createNavData('娱乐', 'all-3-5'),
			createNavData('电视剧', 'all-3-11')
		];

		return {
			// 排行榜导航数据
			navData: navData,
			// 储存请求过的排行榜数据
			rankingDataStorage: {},
			// 当前显示的排行榜数据 Array
			currentRankingData: null
		}

	},
	componentDidMount: function(){
		this.props.loadingChange();

		// 默认请求'全站'数据
		this.requestRankData('all-3-0');
	},

	// 请求并设置排行榜数据方法
	// dataName为需要请求的数据名
	requestRankData: function(dataName){

		// 先将当前排行榜数据清空
		this.setState({ currentRankingData: null });

		// 判断是否已经储存过当前需要请求的数据
		// 有就直接使用储存好的数据，没有则执行下方ajax请求数据
		if(this.state.rankingDataStorage[dataName] !== undefined){
			// 用一个ready属性来标记这个数据是已经存在的
			this.state.rankingDataStorage[dataName].ready = true;
			// 设置数据
			this.setState({ currentRankingData: this.state.rankingDataStorage[dataName] });
			return;
		}

		var rankingSuccess = (data) => {
			console.log(JSON.parse(data.data).rank, 'rankData:' + dataName);
			var currentRankingData = JSON.parse(data.data).rank.list;
			this.setState(() => {
				// 用数据名作为属性名来储存请求的数据
				this.state.rankingDataStorage[dataName] = currentRankingData;
				return { currentRankingData: currentRankingData }
			});
		}
		var rankingError = (error) => {
			console.log(error);
		}

		var rankingDataURL = 'http://weizijie.cc:3000/rank/' + dataName;
		ajaxRequest(rankingDataURL, 'GET', rankingSuccess, rankingError);
	},
	render: function(){
		return	<div className='ranking-content'>
							<RankingTitle />
							<RankingNav navData={this.state.navData} requestRankData={this.requestRankData} />
							<RankingList currentRankingData={this.state.currentRankingData} />
						</div>
	}
});

export default RankingContent;