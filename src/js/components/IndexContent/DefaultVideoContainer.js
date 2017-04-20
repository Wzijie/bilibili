
import React from 'react';
import imgLazyLoad from '../../plugs/imgLazyLoad.js';

var DefaultVideoContainer = React.createClass({
	render: function(){

		var mostDataItem = this.props.mostDataItem;

		// 该视频版块标题
		var partTitle = mostDataItem.title;
		// 该视频版块的图标class
		var partIconName = mostDataItem.iconName;
		// 该视频版块的视频数据
		var partData = mostDataItem.data;

		return	<div className='main-container'>
					<div className='cont-head'>	
						<a href='###'>
							<div className='cont-title'>
								<span className={'index-sprite index-sprite-' + partIconName}></span>
								<p>{partTitle}</p>
							</div>
							<div className='cont-more'>
								<p>查看更多更新</p>
								<span className='index-sprite index-sprite-arrow'></span>	
							</div>
						</a>
					</div>
					
					{
						partData === null 
						?	<p className='loading-info'>正在加载...</p>
						:	<ul className='content-list'>
							{
								partData.slice(0,4).map((partDataItem, index) => {

									// av号
									var aid = partDataItem.aid;
									// 视频封面
									var pic = partDataItem.pic;
									// 视频标题
									var title = partDataItem.title;
									// 播放数
									var playNum = partDataItem.play >= 10000 ? (partDataItem.play/10000).toFixed(1)+'万' : partDataItem.play;
									// 弹幕数
									var barrageNum = partDataItem.video_review >= 10000 ? (partDataItem.video_review/10000).toFixed(1)+'万' : partDataItem.video_review;

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

export default DefaultVideoContainer;