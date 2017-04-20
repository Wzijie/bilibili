
import React from 'react';
import ajaxRequest from '../../../plugs/ajaxRequest.js';
import imgLazyLoad from '../../../plugs/imgLazyLoad.js';

var Recommend = React.createClass({
	getInitialState: function(){
		return { 
			recommendData: [],
			displayData: []
		};
	},
	componentDidMount: function(){

		var successFun = (data) => {
			console.log(data, 'recommend');

			// 将第8项之后的数据保存起来
			// 前8项放到当前显示的数据
			this.setState({
				recommendData: data.data.slice(8),
				displayData: data.data.slice(0,8)
			});
			imgLazyLoad('.content-item div.video-cover');  
		}
		var errorFun = (error) => {
			console.log(error);
		}
		var avNum = this.props.avNum;
		var requestURL = 'http://comment.bilibili.com/recommendnew,' + avNum;
		ajaxRequest(requestURL, 'GET', successFun, errorFun);
	},
	displayMoreData: function(){
		if(this.state.recommendData.length === 0){
			return;
		}
		// 才想起能用...操作符
		// 本来想着一个一个数据shift取出再push，突然想到有...操作符，主要也不够了解...操作符
		// 例[1,2,3].push([3,2,1]) = [1,2,3,[3,2,1]] || [1,2,3].push(...[3,2,1]) = [1,2,3,3,2,1]
		// 删除总数据中的前八项并插入到显示数据的末尾
		this.setState(() => {
			var moreData = this.state.recommendData.splice(0,8);
			this.state.displayData.push(...moreData);
		});
		// 立刻执行是无效的，想不到原因，猜测是触发render渲染后节点还没渲染到页面上
		setTimeout(() => {
			imgLazyLoad('.content-item div.video-cover');
			if(this.state.recommendData.length === 0){
				this.refs.loadMore.classList.add('load-disabled');
				this.refs.loadMore.innerHTML = '没有更多信息了';
			}
		},10); 
	},
	render: function(){

		if(this.state.displayData.length === 0){
			return	<div className={'recommend main-container' + (this.props.toggleCont !== 'recommend' ? ' hide' : '')}>
						<p className='loading-info'>(´・ω・｀)正在加载...</p>
					</div>
		}

		var recommendDisplayData = this.state.displayData;
		
		return	<div className={'recommend main-container' + (this.props.toggleCont !== 'recommend' ? ' hide' : '')}>
					<ul className='content-list'>
					{
						recommendDisplayData.map((recommendDataItem, index) => {
							// av号
							var aid = recommendDataItem.aid;
							// 视频封面url
							var pic = recommendDataItem.pic;
							// 标题
							var title = recommendDataItem.title;
							// 播放数
							var view = recommendDataItem.stat.view;
							// 弹幕数
							var danmaku = recommendDataItem.stat.danmaku;

							return	<li className='content-item' key={index}>
										<a href={'video.html?aid=' + aid}>
											<div className='video-cover' data-img={pic}></div>
											<p className='video-name'>{title}</p>
											<div className='video-info'>
												<div className='play-num'>
													<span className='index-sprite index-sprite-play'></span>
													<p>{view >= 10000 ? (view/10000).toFixed(1)+'万' : view}</p>
												</div>
												<div className='barrage-num'>
													<span className='index-sprite index-sprite-barrage'></span>
													<p>{danmaku >= 10000 ? (danmaku/10000).toFixed(1)+'万' : danmaku}</p>
												</div>
											</div>
										</a>
									</li>
						})
					}
					</ul>
					<div className='load-more' onClick={this.displayMoreData} ref='loadMore'>请给我更多!</div>
				</div>
	}
});

export default Recommend;