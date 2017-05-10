
import React from 'react';

import VideoContainer from './VideoContainer.js'; // 播放器
import RecommendComment from './RecommendComment/RecommendComment.js'; // 推荐视频及评论
import VideoIntro from './VideoIntro.js'; // 视频信息
import VideoOption from './VideoOption.js';  // 视频操作菜单，单纯布局
import VideoPart from './VideoPart.js';  // 视频分p
import VideoTag from './VideoTag.js';  // 视频标签


var VideoContent = React.createClass({
	getInitialState: function(){
		// 获取查询字符aid
		// 首先将字符串以&分成数组
		var searchStr = location.search.slice(1).split('&');
		var aid = null;
		searchStr.forEach((searchItem, index) => {
			if(aid !== null){
				return;
			}
			// 拿到=号前面的key值，key=value
			var searchKey = searchItem.slice(0, searchItem.indexOf('='));
			// 找到key值为aid的value
			if(searchKey === 'aid'){
				aid = parseInt( searchItem.slice( searchItem.indexOf('=')+1 ) );
			}
		});
		return { 
			// 当前分p默认是1
			videoPage: 1,
			aid: aid 
		}
	},
	componentDidMount: function(){
		this.props.loadendChange();
		document.title = 'av' + this.state.aid;
	},

	// 传递给partlist的方法，点击后改成对应的分p数
	changeVideoPage: function(page){
		this.setState({ videoPage: page });
	},
	render: function(){

		console.log(this.state.aid,'aid');
		var aid = this.state.aid

		if(aid === null){
			return	<p className='loading-info'>获取不到"aid"查询字符</p>
		}

		if(aid === '' || isNaN(aid)){
			return	<p className='loading-info'>获取不到"aid"查询字符有效的值</p>
		}

		return	<div className='video-content'>
							<VideoContainer avNum={aid} videoPage={this.state.videoPage} />
							<VideoOption />
							<VideoIntro avNum={aid} />
							<VideoPart avNum={aid} videoPage={this.state.videoPage} changeVideoPage={this.changeVideoPage} />
							<RecommendComment avNum={aid} />
							<VideoTag avNum={aid} />
						</div>
	}
});

export default VideoContent;