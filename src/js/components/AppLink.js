// AppLink底部悬浮窗口
var React = require('react');
import appLinkShow from '../plugs/appLinkShow.js'; // 底部悬浮窗口显示隐藏appLinkShow.js

var AppLink = React.createClass({
	componentDidMount: function(){
		appLinkShow('.app-link', '.app-link .close-btn');
	},
	render: function(){
		return	<div className='app-link'>
					<div className='app-logo'></div>
					<div className='app-intro text-overflow'>
						<p>上bilibili客户端</p>
						<p>高清视频 离线观看 新番电影一览无余</p>
					</div>
					<a className='app-down-btn' href='###'>下载</a>
					<div className='close-btn'></div>
				</div>
	}
});

export default AppLink;