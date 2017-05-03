
import React from 'react';

var UpuserResult = React.createClass({
	render: function(){

		var currentSearchResult = this.props.currentSearchResult;

		return	<ul className='search-result rank-list other-result'>
						{
							currentSearchResult.map((searchResultItem, index) => {

								// 用户名
								var username = searchResultItem.uname;
								// 用户封面
								var pic = searchResultItem.upic;
								// 视频数
								var videoNum = searchResultItem.videos;
								// 用户描述
								var description = searchResultItem.usign.replace(/\<script/g, '<!--').replace(/\<\/script\>/g,'-->');;

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
															<span className='video-duration video-sign'>up主</span>
														</div>
														<div className='video-info'>
															<div className='video-title'>{username}</div>
															<div className='video-detaied'>
																<div className='play-danmu'>
															    <span>视频：{videoNum}</span>
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

export default UpuserResult;