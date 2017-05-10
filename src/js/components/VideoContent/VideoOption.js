
import React from 'react';

var VideoOption = React.createClass({
	render: function(){
		return	<div className='video-option'>
							<div className='control-btn'>
								<i className='icon icon-share'></i>
								<p>分享</p>
							</div>
							<div className='control-btn'>
								<i className='icon icon-collect'></i>
								<p>收藏</p>
							</div>
							<div className='control-btn'>
								<i className='icon icon-down'></i>
								<p>下载</p>
							</div>
							<a className='open-app'>用客户端打开</a>
						</div>
	}
});

export default VideoOption;