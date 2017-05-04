
import React from 'react';

var BangumiSpecialResult = React.createClass({
	render: function(){

		var currentSearchResult = this.props.currentSearchResult;
		var type = this.props.searchType;
		var videoSign = type === 'series' ? '番剧' : '专题';

		return	<ul className='search-result rank-list other-result'>
						{
							currentSearchResult.map((searchResultItem, index) => {

								// 视频封面
								var pic = searchResultItem.pic;
								// 视频标题 返回内容有html标签，替换掉有可能存在的script标签
								var title = searchResultItem.title.replace(/\<script/g, '<!--').replace(/\<\/script\>/g,'-->');
								// 播放数
								var playNum = searchResultItem.click >= 10000 ? (searchResultItem.click/10000).toFixed(1) + '万' : searchResultItem.click;
								// 视频数
								var videoNum = type === 'series' ? searchResultItem.bgmcount : searchResultItem.count;
								// 视频描述
								var description = searchResultItem.description.replace(/\<script/g, '<!--').replace(/\<\/script\>/g,'-->');;

								return	<li key={index}>
													<a href='###' className='list-box'>
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
															<span className='video-duration video-sign'>{videoSign}</span>
														</div>
														<div className='video-info'>
															<div className='video-title' dangerouslySetInnerHTML={{__html: title}}></div>
															<div className='video-detaied'>
																<div className='play-danmu'>
															    <span>视频：{videoNum}</span>
																</div>
																<div className='play-danmu'>
																	<img className='icon-detaied' src='./src/image/ranking/ico_play.png' />
															    <span>{playNum}</span>
																</div>
															</div>
															<div className='video-detaied video-description'>
																<p dangerouslySetInnerHTML={{__html: description}}></p>
															</div>
														</div>
													</a>
												</li>
							})
						}
						</ul>
	}
});

export default BangumiSpecialResult;