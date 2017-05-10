
import React from 'react';
import imgLazyLoad from '../../plugs/imgLazyLoad.js';

var LiveVideoContainer = React.createClass({
	componentDidUpdate: function(){
		if(this.props.liveData !== null){
			imgLazyLoad('.content-item div.video-cover');
		}
	},
	render: function(){

		var liveData = this.props.liveData;

		return	<div className='main-container'>
							<div className='cont-head'>	
								<a href='###'>
									<div className='cont-title'>
										<span className='index-sprite index-sprite-live'></span>
										<p>正在直播</p>
									</div>
									<div className='cont-more'>
										<p>查看更多直播</p>
										<span className='index-sprite index-sprite-arrow'></span>	
									</div>
								</a>
							</div>
							{
								liveData === null
								?	<p className='loading-info'>正在加载...</p>
								: <ul className='content-list'>
									{
										liveData.data.map((liveItem, index) => {

											// 直播封面
											var pic = liveItem.cover;
											// 用户头像
											var face = liveItem.face;
											// 用户名
											var username = liveItem.uname;
											// 直播标题
											var title = liveItem.title;
											// 观看直播人数
											var online = liveItem.online >= 10000 ? (liveItem.online/10000).toFixed(1)+'万' : liveItem.online;
											// 直播房间id
											var roomid = liveItem.roomid;

											return	<li className='content-item' key={index}>		
																<a href={'http://live.bilibili.com/h5/' + roomid}>
																	<div className='video-cover' data-img={pic}></div>
																	<div className='user'>
																		<div className='face'><img src={face} alt={username} /></div>
																		<p className='name text-overflow'>{username}</p>
																	</div>
																	<div className='user'>
																		<div className='online'>{online}</div>
																		<p className='intro text-overflow'>{title}</p>
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

export default LiveVideoContainer;