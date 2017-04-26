import React from 'react';
import ReactDOM from 'react-dom';

import setRootFontsize from './plugs/setRootFontsize.js'; // 根据屏幕宽度改变根节点的fontsize值remAdaptation.js
import ajaxRequest from './plugs/ajaxRequest.js';

// 组件
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import AppLink from './components/AppLink.js';
import LoadCover from './components/LoadCover.js';
import InitialSearch from './components/InitialSearch.js';
// 主要内容组件
import IndexContent from './components/IndexContent/IndexContent.js';

// 存放全局jsonp回调函数
window.jsonpCallBack = {};

setRootFontsize();

var Root = React.createClass({
	getInitialState: function(){
		return { 
			loading: true,
			// banner数据 Array
			bannerData: null
		}
	},

	componentDidMount: function(){
		// banner数据请求
		var bannerRequestSuccess = (data) => {
			this.setState({ bannerData: JSON.parse(data.data).data });
		}
		var bannerRequestError = (error) => {
			console.log(error);
		}
		var bannerRequestURL = 'http://weizijie.cc:3000/indexBanner';
		ajaxRequest(bannerRequestURL, 'GET', bannerRequestSuccess, bannerRequestError);

	},

	// 改变loading数据,当数据请求完成后执行
	loadendChange: function(){
		this.setState({loading: false});
	},

	render: function(){
		
		return  <div>
					<Header />
					<InitialSearch />
					<LoadCover loading={this.state.loading} />
					<Nav pageActive={0} />
					<Banner bannerData={this.state.bannerData} />
					<IndexContent loadendChange={this.loadendChange} />
					<AppLink />
					<Footer />			
				</div>
	}
});

ReactDOM.render(
	<Root />,
	document.querySelector('#app')
);