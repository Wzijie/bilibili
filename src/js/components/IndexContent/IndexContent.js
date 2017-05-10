
import React from 'react';

// 插件方法
import ajaxRequest from '../../plugs/ajaxRequest.js'; // ajax请求方法
import createScriptJsonp from '../../plugs/createScriptJsonp.js'; // jsonp请求方法

// 组件
import RecommendVideoContainer from './RecommendVideoContainer.js'; // 推荐视频版块
import LiveVideoContainer from './LiveVideoContainer.js'; // 正在直播版块
import BangumiVideoContainer from './BangumiVideoContainer.js'; // 番剧更新版块
import DefaultVideoContainer from './DefaultVideoContainer.js'; // 其他大部分版块

// 主要内容
var IndexContent = React.createClass({
	getInitialState: function(){
		// 创建存放大部分视频版块初始的数据
		function createMostData(title, iconName, dataName){
			return {
				// 视频版块标题
				title: title,
				// 视频版块图标
				iconName: iconName,
				// 视频版块数据名
				dataName: dataName,
				// 存放视频版块相应的数据
				data: null
			};
		}

		// 大部分视频版块数据
		var mostData = [
			createMostData('国创区', 'guoman', 'guochuang'),
			createMostData('动画区', 'douga', 'douga'),
			createMostData('音乐区', 'music', 'music'),
			createMostData('舞蹈区', 'dance', 'dance'),
			createMostData('游戏区', 'game', 'game'),
			createMostData('科技区', 'technology', 'technology'),
			createMostData('生活区', 'life', 'life'),
			createMostData('鬼畜区', 'kichiku', 'kichiku'),
			createMostData('时尚区', 'fashion', 'fashion'),
			createMostData('娱乐区', 'ent', 'ent'),
			createMostData('电视剧区', 'teleplay', 'teleplay'),
			createMostData('电影区', 'movie', 'movie'),
			createMostData('广告区', 'advertise', 'ad')
		];

		return { 
			// 推荐视频数据 Object
			recommendData: null,
			// 正在直播数据 Object
			liveData: null,
			// 番剧更新数据 Object
			bangumiData: null,
			// 其余全部视频版块数据 Object
			mostData: mostData
		};
	},
	componentDidMount: function(){

		this.props.loadingChange();

		// 推荐视频数据获取 start
		var recommendDataSuccess = (data) => {
			var recommendData = JSON.parse(data.data).recommend;
			this.setState({ recommendData: recommendData });
			console.log(recommendData, 'recommendData');
		}
		var recommendDataError = (error) => {
			console.log(error, 'recommendDataError');
		}
		var recommendDataURL = 'http://weizijie.cc:3000/indexRecommend';
		ajaxRequest(recommendDataURL, 'GET', recommendDataSuccess, recommendDataError);
		// 推荐视频数据获取 end

		// 正在直播数据获取 start
		try{
			window.jsonpCallBack.getLiveData = (data) => {
				this.setState({ liveData: data });
				console.log(data, 'liveData');
			}
			var liveDataURL = 'http://api.live.bilibili.com/h5/recommendRooms?callback=jsonpCallBack.getLiveData&_=' + Date.now();
			var getLiveDataScript = createScriptJsonp(liveDataURL);
			document.body.removeChild(getLiveDataScript);
		}catch(error){
			console.log(error, 'liveDataError');
		}
		// 正在直播数据获取 end

		// 番剧更新数据获取 start
		var bangumiDataSuccess = (data) => {
			var bangumiData = JSON.parse(data.data);
			this.setState({ bangumiData: bangumiData });
			console.log(bangumiData, 'bangumiData');
		}
		var bangumiDataError = (error) => {
			console.log(error, 'bangumiDataError');
		}
		var bangumiDataURL = 'http://weizijie.cc:3000/indexBangumi';
		ajaxRequest(bangumiDataURL, 'GET', bangumiDataSuccess, bangumiDataError);
		// 番剧更新数据获取 end

		// 其余全部视频数据获取 start
		var mostDataSuccess = (data) => {
			var responseMostData = JSON.parse(data.data);
			this.setState(() => {
				// mostDataItem.dataName 为数据属性名，与响应的数据名对应
				// 将数据根据对应的数据属性名设置为相应的数据，可以看初始化数据mostData里对象的结构
				this.state.mostData.forEach((mostDataItem, index) => {
					mostDataItem.data = responseMostData[mostDataItem.dataName];
				});
			});
			console.log(responseMostData, 'responseMostData');
		}
		var mostDataError = (error) => {
			console.log(error, 'mostDataError');
		}
		var mostDataURL = 'http://weizijie.cc:3000/indexMost';
		ajaxRequest(mostDataURL, 'GET', mostDataSuccess, mostDataError);
		// 其余全部视频数据获取 end

	},
	render: function(){
		
		return	<div>
							<RecommendVideoContainer recommendData={this.state.recommendData} />
							<LiveVideoContainer liveData={this.state.liveData} />
							<BangumiVideoContainer bangumiData={this.state.bangumiData} />
							{
								this.state.mostData.map((mostDataItem, index) => {
									return <DefaultVideoContainer mostDataItem={mostDataItem} key={index} />
								})
							}
						</div>
	}
});

export default IndexContent;
