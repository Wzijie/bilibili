
import React from 'react';
import ReactDOM from 'react-dom';

import setRootFontsize from './plugs/setRootFontsize.js'; // 根据屏幕宽度改变根节点的fontsize值remAdaptation.js

// 组件
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import AppLink from './components/AppLink.js';
import LoadCover from './components/LoadCover.js';
import InitialSearch from './components/InitialSearch/InitialSearch.js';
// 主要内容组件
import LiveContent from './components/LiveContent/LiveContent.js';

import ajaxRequest from './plugs/ajaxRequest.js'; // ajax方法

// 存放全局jsonp回调函数
window.jsonpCallBack = {};

setRootFontsize();

var Root = React.createClass({
	getInitialState: function(){
		// 创建直播数据方法
		function createLiveData(title, iconName, dataName){
			return {
				// 直播版块标题
				title: title,
				// 直播版块图标class
				iconName: iconName,
				// 直播版块数据名
				dataName: dataName,
				// 存放主要数据
				data: null,
				// 搜索面板是否显示
				initialSearchDisplay: false
			}
		}

		// 直播数据结构
		var liveData = [
			createLiveData('绘画专区', 'draw', '0'),
			createLiveData('生活娱乐', 'ent-life', '1'),
			createLiveData('唱见舞见', 'sing-dance', '2'),
			createLiveData('手游直播', 'mobile-game', '3'),
			createLiveData('单机联机', 'single', '4'),
			createLiveData('网络游戏', 'online', '5'),
			createLiveData('电子竞技', 'e-sports', '6'),
			createLiveData('御宅文化', 'otaku', '7'),
			createLiveData('放映厅', 'movie', '8')	
		];

		return { 
			loading: true,
			// banner数据 Array
			bannerData: null,
			// 直播数据 Array
			liveData: liveData
		}
	},
	componentDidMount: function(){
		// banner及直播数据
		var liveRequestSuccess = (data) => {
			var responseLiveData = JSON.parse(data.data).data;
			this.setState(() => {
				// 设置属性名对应的直播数据
				this.state.liveData.forEach((liveSectionData, index) => {
					liveSectionData.data = responseLiveData.partitions[liveSectionData.dataName];
				});
				return { bannerData: responseLiveData.banner };
			});
			console.log(responseLiveData, 'responseLiveData');
		}
		var liveRequestError = (error) => {
			console.log(error);
		}

		var liveDataURL = 'http://weizijie.cc:3000/livePageData';
		ajaxRequest(liveDataURL, 'GET', liveRequestSuccess, liveRequestError);
	},

	// 改变loading状态
	loadingChange: function(){
		this.setState({ loading: false });
	},

	// 切换搜索面板是否显示
	toggleInitialSearch: function(){
		var initialSearchDisplay = !this.state.initialSearchDisplay;
		this.setState({ initialSearchDisplay: initialSearchDisplay });
	},

	render: function(){
		
		return  <div>
					<Header toggleInitialSearch={this.toggleInitialSearch} />
					<InitialSearch initialSearchDisplay={this.state.initialSearchDisplay} toggleInitialSearch={this.toggleInitialSearch} />
					<LoadCover loading={this.state.loading} />
					<Nav pageActive={2} />
					<Banner bannerData={this.state.bannerData} />
					<LiveContent liveData={this.state.liveData} loadingChange={this.loadingChange} />
					<AppLink />
					<Footer />			
				</div>
	}
});

ReactDOM.render(
	<Root />,
	document.querySelector('#app')
);