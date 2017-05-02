
import React from 'react';

import imgLazyLoad from '../../plugs/imgLazyLoad.js';

var SearchResult = React.createClass({
	componentDidUpdate: function(){
		if(this.props.currentRankingData !== null){
			imgLazyLoad('.cover-box', true, '.list-box', 'fade-in');
		}
	},
	render: function(){
		console.log(this.props.currentSearchResult);
		var currentSearchResult = this.props.currentSearchResult;
		if(currentSearchResult === null){
			return <p className='loading-info'>正在加载...</p>
		}
		if(currentSearchResult.length === 0){
			return <p className='loading-info'>没有数据...</p>
		}
		return	<ul className='search-result rank-list'>
						{
							currentSearchResult.map((searchResultItem, index) => {

								// av号
								var aid = searchResultItem.aid;
								// 用户名
								var username = searchResultItem.author;
								// 视频封面
								var pic = searchResultItem.pic;
								// 视频标题
								var title = searchResultItem.title;
								// 播放数
								var playNum = searchResultItem.play >= 10000 ? (searchResultItem.play/10000).toFixed(1) + '万' : searchResultItem.play;
								// 弹幕数
								var barrageNum = searchResultItem.video_review >= 10000 ? (searchResultItem.video_review/10000).toFixed(1) + '万' : searchResultItem.video_review;
								// 视频长度
								var duration = searchResultItem.duration;

								return	<li key={index}>
													<a href={'video.html?aid=' + aid} className='list-box'>
														<div className='video-cover'>
															<div className='cover-box' data-img={pic}>
															{	
																// 如果当前的数据已经加载过保存起来了，就将图片显示出来
																// 如果是新的数据则依靠懒加载滚动将图片插入
																currentSearchResult.ready === true
																? <div className='cover-img' style={{'backgroundImage': 'url("'+pic+'")', 'opacity': '1'}} ></div>
																: ''
															}
															</div>
															<span className='video-duration'>{duration}</span>
														</div>
														<div className='video-info'>
															<div className='video-title'>{title}</div>
															<div className='video-detaied'>
																<img className='icon-detaied' src='./src/image/ranking/ico_up.png' />
																<span>{username}</span>
															</div>
															<div className='video-detaied'>
																<div className='play-danmu'>
																	<img className='icon-detaied' src='./src/image/ranking/ico_play.png' />
															    	<span>{playNum}</span>
																</div>
																<div className='play-danmu'>
																	<img className='icon-detaied' src='./src/image/ranking/ico_danmu.png' />
															    	<span>{barrageNum}</span>
																</div>
															</div>
														</div>
													</a>
												</li>
							})
						}
						</ul>
	}
});

export default SearchResult;