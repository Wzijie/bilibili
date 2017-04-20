
import React from 'react';
import imgLazyLoad from '../../plugs/imgLazyLoad.js';

var RecommendVideoContainer = React.createClass({
	componentDidUpdate: function(){
		if(this.props.recommendData !== null){
			imgLazyLoad('.content-item div.video-cover');
		}
	},
	render: function(){

		var recommendData = this.props.recommendData;

		// recommendList是个对象 存放着视频数据
		var recommendList = recommendData === null ? null : recommendData.list;
		// Object.keys 返回该对象属性集合的数组
		var recommendListKey =  recommendData === null ? null : Object.keys(recommendList).slice(0,4);

		return	<div className='main-container'>
					<div className='cont-head'>	
						<a href='###'>
							<div className='cont-title'>
								<span className='index-sprite index-sprite-hot'></span>
								<p>热门推荐</p>
							</div>
							<div className='cont-more'>
								<span className='index-sprite index-sprite-rank'></span>	
								<p className='rank-txt'>排行榜</p>
							</div>
						</a>
					</div>
					{
						recommendData === null 
						?	<p className='loading-info'>正在加载...</p>
						:   <ul className='content-list'>
							{
								recommendListKey.map((recommendKeyItem, index) => {
									var recommendItem = recommendList[recommendKeyItem];

									// av号
									var aid = recommendItem.aid;
									// 视频封面
									var pic = recommendItem.pic;
									// 视频标题
									var title = recommendItem.title;
									// 视频播放数
									var playNum = recommendItem.play >= 10000 ? (recommendItem.play/10000).toFixed(1)+'万' : recommendItem.play;
									// 视频弹幕数
									var barrageNum = recommendItem.video_review >= 10000 ? (recommendItem.video_review/10000).toFixed(1)+'万' : recommendItem.video_review;

									return	<li className='content-item' key={index}>		
												<a href={'video.html?aid=' + aid}>
													<div className='video-cover' data-img={pic}></div>
													<p className='video-name'>{title}</p>
													<div className='video-info'>
														<div className='play-num'>
															<span className='index-sprite index-sprite-play'></span>
															<p>{playNum}</p>
														</div>
														<div className='barrage-num'>
															<span className='index-sprite index-sprite-barrage'></span>
															<p>{barrageNum}</p>
														</div>
													</div>
												</a> 
											</li>
								})	
							}
							</ul>
					}
					
				</div>
	}
});

export default RecommendVideoContainer;