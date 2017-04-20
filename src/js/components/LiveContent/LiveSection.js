
import React from 'react';
import imgLazyLoad from '../../plugs/imgLazyLoad.js'; // 图片懒加载imgLazyLoad.js

var LiveSection = React.createClass({
	componentDidUpdate: function(){
		if(this.props.liveSectionData.data !== null){
			imgLazyLoad('.content-item div.video-cover');
		}
	},
	render: function(){

		var liveSectionData = this.props.liveSectionData;

		// 版块标题，图标
		var { title, iconName } = liveSectionData;

		// 直播数据
		var liveListData = liveSectionData.data;

		return	<div className='main-container'>
					<div className='cont-head'>	
						<a href='###'>
							<div className='cont-title'>
								<span className={'icon icon-' + iconName}></span>
								<p>{title}</p>
							</div>	 
							<div className='cont-more'>
								<p>进去看看</p>
								<span className='icon icon-more'></span>	
							</div>
						</a>
					</div>
					{
						liveListData === null
						?	<p className='loading-info'>正在加载...</p>
						:   <ul className='content-list'>
							{
								liveListData.lives.slice(0,4).map((liveListItem, index) => {

									// 直播封面
									var cover = liveListItem.cover.src;
									// 用户名
									var username = liveListItem.owner.name;
									// 用户头像
									var face = liveListItem.owner.face;
									// 直播标题
									var title = liveListItem.title;
									// 观看人数
									var online = liveListItem.online;
									// 直播房间id
									var roomid = liveListItem.room_id;

									return	<li className='content-item' key={index}>		
												<a href={'http://live.bilibili.com/h5/' + roomid}>
													<div className='video-cover' data-img={cover}></div>
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

export default LiveSection;