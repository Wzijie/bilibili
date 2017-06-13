
import React from 'react';
import imgLazyLoad from '../../plugs/imgLazyLoad.js';

var BangumiVideoContainer = React.createClass({
	componentDidUpdate: function(){
		if(this.props.liveData !== null){
			imgLazyLoad('.content-item div.video-cover');
		}
	},
	render: function(){

		var bangumiData = this.props.bangumiData;

		var bangumiList = bangumiData === null ? null : bangumiData.list.slice(0,6);

		return	<div className='main-container'>
							<div className='cont-head'>	
								<a href='###'>
									<div className='cont-title'>
										<span className='index-sprite index-sprite-bangumi'></span>
										<p>番剧更新</p>
									</div>
									<div className='cont-more'>
										<p>查看更多番剧</p>
										<span className='index-sprite index-sprite-arrow'></span>	
									</div>
								</a>
							</div>
							{
								bangumiData === null
								?	<p className='loading-info'>正在加载...</p>
								:   <ul className='content-list'>
									{
										bangumiList.map((bangumiItem, index) => {

											// 番剧封面
											var cover = bangumiItem.cover;
											// 番剧标题
											var title = bangumiItem.title;
											// 番剧更新至第几话
											var updateTo = bangumiItem.bgmcount;

											return	<li className='content-item bangumi-item' key={index}>		
														<a href='###'>
															<div className='video-cover' data-img={cover}></div>
															<p className='bangumi-name text-overflow'>{title}</p>
															<p className='bangumi-update-to text-overflow'>更新至第{updateTo}话</p>
														</a>
													</li>
										})
									}	
									</ul>
							}
							
						</div>
	}
});

export default BangumiVideoContainer;