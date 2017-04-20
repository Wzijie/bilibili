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
import UserContent from './components/UserContent/UserContent.js';

setRootFontsize();

var Root = React.createClass({
	render: function(){
		return	<div>
					<Header />
					<Nav pageActive={4} />
					<UserContent />
					<AppLink />
					<Footer />
				</div>
	}
});

ReactDOM.render(
	<Root />,
	document.querySelector('#app')
);