import React from 'react';
import ReactDOM from 'react-dom';

import setRootFontsize from './plugs/setRootFontsize.js'; // 根据屏幕宽度改变根节点的fontsize值remAdaptation.js

// 组件
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import AppLink from './components/AppLink.js';
import LoadCover from './components/LoadCover.js';
// 主要内容组件
import ChannelContent from './components/ChannelContent/ChannelContent.js';

setRootFontsize();

var Root = React.createClass({
	getInitialState: function(){
		return { loading: true }
	},
	loadendChange: function(){
		this.setState({ loading: false });
	},
	render: function(){

		return  <div>
					<Header />
					<LoadCover loading={this.state.loading} />
					<Nav pageActive={1} />
					<ChannelContent loadendChange={this.loadendChange} />
					<AppLink />
					<Footer />			
				</div>
	}
});

ReactDOM.render(
	<Root />,
	document.querySelector('#app')
);