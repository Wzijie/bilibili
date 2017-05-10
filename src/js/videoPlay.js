
import React from 'react';
import ReactDOM from 'react-dom';

import setRootFontsize from './plugs/setRootFontsize.js';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import LoadCover from './components/LoadCover.js';
import AppLink from './components/AppLink.js';
import InitialSearch from './components/InitialSearch/InitialSearch.js';
// 主要内容组件
import VideoContent from './components/VideoContent/VideoContent.js';

// 存放全局jsonp回调函数
window.jsonpCallBack = {};

setRootFontsize();

var Root = React.createClass({
	getInitialState: function(){
		return { 
			loading: true,
			// 搜索面板是否显示
			initialSearchDisplay: false
		}
	},

	loadingChange: function(){
		this.setState({ loading: false });
	},

	// 切换搜索面板是否显示
	toggleInitialSearch: function(){
		var initialSearchDisplay = !this.state.initialSearchDisplay;
		this.setState({ initialSearchDisplay: initialSearchDisplay });
	},

	render: function(){
		return	<div>
							<Header toggleInitialSearch={this.toggleInitialSearch} />
							<InitialSearch initialSearchDisplay={this.state.initialSearchDisplay} toggleInitialSearch={this.toggleInitialSearch} />
							<LoadCover loading={this.state.loading} />
							<VideoContent loadendChange={this.loadingChange} />
							<AppLink />
							<Footer />
						</div>
	}
});

ReactDOM.render(
	<Root />,
	document.querySelector('#app')
);