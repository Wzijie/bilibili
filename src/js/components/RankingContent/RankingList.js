
import React from 'react';
import imgLazyLoad from '../../plugs/imgLazyLoad.js';

var RankingList = React.createClass({
	componentDidUpdate: function(){
		if(this.props.currentRankingData !== null){
			imgLazyLoad('.cover-box', true, '.list-box', 'fade-in');
		}
	},
	render: function(){
		
		if(this.props.currentRankingData === null){
			return <p className='loading-info'>正在加载...</p>
		}

		var rankingData = this.props.currentRankingData;

		return	<ul className='rank-list'>
				{
					rankingData.slice(0,30).map((rankItem, index) => {

						// av号
						var aid = rankItem.aid;
						// 用户名
						var username = rankItem.author;
						// 视频封面
						var pic = rankItem.pic;
						// 视频标题
						var title = rankItem.title;
						// 播放数
						var playNum = rankItem.play >= 10000 ? (rankItem.play/10000).toFixed(1) + '万' : rankItem.play;
						// 弹幕数
						var barrageNum = rankItem.video_review >= 10000 ? (rankItem.video_review/10000).toFixed(1) + '万' : rankItem.video_review;
						// 排名top3添加class改变背景颜色
						var topThreeClass = index < 3 ? ' top-three' : '';

						return	<li key={index}>
									<a href={'video.html?aid=' + aid} className='list-box'>
										<div className='video-cover'>
											<div className={'rank-num' + topThreeClass}>{index+1}</div>
											<div className='cover-box' data-img={pic}>
											{	
												// 如果当前的数据已经加载过保存起来了，就将图片显示出来
												// 如果是新的数据则依靠懒加载滚动将图片插入
												rankingData.ready === true
												? <div className='cover-img' style={{'backgroundImage': 'url("'+pic+'")', 'opacity': '1'}} ></div>
												: ''
											}
											</div>
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

export default RankingList;