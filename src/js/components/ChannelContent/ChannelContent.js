
import React from 'react';

import ChannelList from './ChannelList.js'; // 频道列表组件
import createScriptJsonp from '../../plugs/createScriptJsonp.js'; // jsonp请求方法

var ChannelContent = React.createClass({
	getInitialState: function(){

		// 创建频道数据
		function createChannelData(title, iconName, dataName){
			return {
				// 频道标题
				title: title,
				// 频道图标class
				iconName: iconName,
				// 数据属性名
				dataName: dataName,
				// 更新总数数据
				updateCount: null
			};
		}

		// 频道全部数据
		var channelData = [
			createChannelData('直播', 'live'),
			createChannelData('番剧', 'bangumi', 'c13'),
			createChannelData('国创', 'guoman', 'c167'),
			createChannelData('动画', 'douga', 'c1'),
			createChannelData('音乐', 'music', 'c3'),
			createChannelData('舞蹈', 'dance', 'c129'),
			createChannelData('游戏', 'game', 'c4'),
			createChannelData('科技', 'tech', 'c36'),
			createChannelData('生活', 'life', 'c160'),
			createChannelData('鬼畜', 'kichiku', 'c119'),
			createChannelData('娱乐', 'ent', 'c5'),
			createChannelData('电影', 'movie', 'c23'),
			createChannelData('电视剧', 'tv', 'c11'),
			createChannelData('时尚', 'fashion', 'c155'),
			createChannelData('广告', 'advertise', 'c165')
		];

		return {
			loading: true,
			// 频道全部数据 Array
			channelData: channelData
		}
	},
	componentDidMount: function(){

		var channelDataURL = 'http://www.bilibili.com/online.js?_=' + Date.now();
		var getChannelDataScript = createScriptJsonp(channelDataURL);

		// 这请求的是js文件，文件内是直接一个变量存放着数据，用load事件确保js文件内容加载完成再使用
		getChannelDataScript.addEventListener('load', (event) => {
			console.log(countInfo, '各频道更新数，Object');
			this.setState(() => {
				// 跟index页默认版块一样，用事先设置好的数据名来赋值对应属性名的数据
				// countInfo为请求到的存放数据的变量
				this.state.channelData.forEach((channelItem, index) => {
					channelItem.updateCount = countInfo[channelItem.dataName];
				});

				return { loading: false }
			});

			this.props.loadendChange();
			document.body.removeChild(event.currentTarget);
		});
	},
	render: function(){
		
		if(this.state.loading){
			return	<p className='loading-info'>正在加载...</p>
		}

		return	<div className='channel-content'>
							<ChannelList channelData={this.state.channelData} />
						</div>
	}
});

export default ChannelContent;