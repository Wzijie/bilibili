// Banner
import React from 'react';
import slideTouch from '../plugs/slideTouch.js'; // 拖动焦点图 slideTouch.js
import ajaxRequest from '../plugs/ajaxRequest.js'; // ajax

var Banner = React.createClass({
	componentDidUpdate: function(){
		if(this.props.bannerData !== null){
			slideTouch('.slide','.slide-active li','active');
		}
	},
	render: function(){

		if(this.props.bannerData === null){
			return	<div className='banner'>
								<div className='load-tip'>
									<p>正在请求数据...</p>
								</div>
							</div>
		}

		var bannerData = this.props.bannerData;

		// 主页与直播页返回的数据名不同，需要处理一下

		// 第一个banner
		var firstBanner = bannerData[0];
		var firstBannerImg = firstBanner.pic || firstBanner.img;
		var firstBannerAlt = firstBanner.name || firstBanner.title;
		var firstBannerLink = firstBanner.url || firstBanner.link;
		// 最后一个banner
		var lastBanner = bannerData[bannerData.length-1];
		var lastBannerImg = lastBanner.pic || lastBanner.img;
		var lastBannerAlt = lastBanner.name || lastBanner.title;
		var lastBannerLink = lastBanner.url || lastBanner.link;

		return	<div className='banner'>
							<ul className='slide'>
								<li>
									<a href={lastBannerLink}>
										<img src={lastBannerImg} alt={lastBannerAlt} />
									</a>
								</li>
								{
									bannerData.map( (bannerValue, bannerKey) => {

										// banner图片URL
										var img = bannerValue.pic || bannerValue.img;
										// banner图片描述
										var alt = bannerValue.name || bannerValue.title;
										// banner链接
										var link = bannerValue.url || bannerValue.link;

										return	<li key={bannerKey}>
													<a href={link}>
														<img src={img} alt={alt} />
													</a>
												</li>
									} )
								}
								<li>
									<a href={firstBannerLink}>
										<img src={firstBannerImg} alt={firstBannerAlt} />
									</a>
								</li>
							</ul>	
							<ul className="slide-active">
								{
									bannerData.map( (bannerValue, bannerKey) => {
										return	<li key={bannerKey}></li>
									} )
								}
							</ul>
						</div>
	}
});

export default Banner;