
import React from 'react';
import createScriptJsonp from '../../plugs/createScriptJsonp.js';

var VideoTag = React.createClass({
	getInitialState: function(){
		// 标签数据 Array
		return { tagData: null };
	},
	componentDidMount: function(){
		// 标签数据请求
		window.jsonpCallBack.getTagData = (data) => {
			console.log(data,'tagdata');
			if(data.data){
				this.setState({ tagData: data.data });
			}else{
				this.setState({ tagData: data.message });
			}
		}

		var avNum = this.props.avNum;
		var getTagDataSrc = 'http://api.bilibili.com/x/tag/archive/tags?callback=jsonpCallBack.getTagData&aid='+ avNum +'&jsonp=jsonp&_='+ Date.now();
		var getTagDataScript = createScriptJsonp(getTagDataSrc);
		document.body.removeChild(getTagDataScript);
	},
	
	render: function(){
		// 没有请求数据时tagData为null
		if(this.state.tagData === null){
			return  <div className='video-tag'>
						<p className='loading-info'>正在加载...</p>
					</div>
		}
		// 请求了数据但没有标签数据时tagData为字符串
		// 新发现： !this.state.tagData instanceof Array | !操作符优先于instanceof操作符
		if(!(this.state.tagData instanceof Array)){
			return  <div className='video-tag'>
						<p className='loading-info'>找不到这个视频的标签了</p>
					</div>		
		}
		// 请求了数据但标签数为0
		if(this.state.tagData.length === 0){
			return  <div className='video-tag'>
						<p className='loading-info'>没有标签</p>
					</div>			
		}

		var tagData = this.state.tagData;

		return	<div className='video-tag'>
					<h2 className='tag-desc'>标签</h2>
					<ul className='tag-list'>
					{
						tagData.map((tagDataItem, index) => {
							var tagName = tagDataItem.tag_name;
							return	<li key={index}>
										<a>{tagName}</a>
									</li>
						})
					}
					</ul>
				</div>
	}
});

export default VideoTag;