
import React from 'react';
import createScriptJsonp from '../../plugs/createScriptJsonp.js';
import ajaxRequest from '../../plugs/ajaxRequest.js';

var VideoIntro = React.createClass({
	getInitialState: function(){
		return { 
			// 播放、弹幕、收藏数 Object
			detaiedData: null,
			// 其余大部分信息 Object
			videoInfo: null,
			// 控制标题及描述元素的显示隐藏
			isOpen: false,
			// 标题及描述元素的高度
			titleDescHeight: null
		};
	},
	componentDidMount: function(){

		var avNum = this.props.avNum;

		// jsonp 获取播放、弹幕、收藏数 start
		window.getdetaiedData = (data) => {
			console.log(data, 'videoIntro-detaiedData');
			this.setState({detaiedData: data});
			document.body.removeChild(getdetaiedDataScriptEle);
		}

		var currentDate = Date.now();
			
		// 回调函数字符串有'.'的话不能正确返回，如jsonp.callback，只能写全局变量了。
		var getdetaiedDataSrc ='http://api.bilibili.com/archive_stat/stat?callback=getdetaiedData&aid='+ avNum +'&type=jsonp&_=' + currentDate;
		var getdetaiedDataScriptEle = createScriptJsonp(getdetaiedDataSrc);
		// jsonp 获取播放、弹幕、收藏数 end

		// ajax 获取视频信息 start
		var successFun = (data) => {
			console.log(data, 'videoIntro-videoInfo');
			if(data.code === 404){
				this.setState({ videoInfo: data.code });
				return;
			}

			this.setState({ videoInfo: data.data });
			document.title = data.data.title || 'av' + this.props.avNum;

			setTimeout(() => {
				// 拿到标题描述信息元素高度后再设置为0
				this.setState({titleDescHeight: this.refs.titleDesc.offsetHeight});
				this.refs.titleDesc.style.height = '0';
			}, 10);
		}
		var errorFun = (error) => {
			console.log(error);
		}

		var requestURL = 'http://weizijie.cc:3000/videoInfo/'+ avNum;
		ajaxRequest(requestURL, 'GET', successFun, errorFun);
		// ajax 获取视频信息 end
		
	},

	// 切换标题及描述元素的显示隐藏
	changeDisplayEle: function(){
		// 详情信息切换显示		
		var titleDesc = this.refs.titleDesc;
		var arrowDownIcon = this.refs.arrowDownIcon;
		var dateInfo = this.refs.dateInfo;
		var titleDescHeight = this.state.titleDescHeight; 

		if(this.state.isOpen){
			titleDesc.style.height = '0px';
			arrowDownIcon.classList.remove('icon-arrow-up');
			dateInfo.classList.add('hide');
			this.setState({isOpen: false});
		}else{
			titleDesc.style.height = titleDescHeight + 'px';
			arrowDownIcon.classList.add('icon-arrow-up');
			dateInfo.classList.remove('hide');
			this.setState({isOpen: true});
		}
	},

	render: function(){
		// 处理查询不到此aid的数据
		if(this.state.videoInfo === 404){
			return	<div className='video-intro'>
						<p className='loading-info'>查询错误，可能找不到此aid的数据</p>
					</div>
		}
		
		var detaiedData = this.state.detaiedData;
		// 播放数
		var view = detaiedData !== null ? detaiedData.data.view : '正在加载';
		// 弹幕数
		var danmaku = detaiedData !== null ? detaiedData.data.danmaku : '正在加载';
		// 收藏数
		var favorite = detaiedData !== null ? detaiedData.data.favorite : '正在加载';


		var videoInfo = this.state.videoInfo;
		// 用户名
		var username = videoInfo !== null ? videoInfo.username : '正在加载';
		// 头像URL
		var face =  videoInfo !== null ? videoInfo.face : './src/image/img_loading.png';
		// 视频标题
		var title = videoInfo !== null ? videoInfo.title : '正在加载';
		// 视频描述
		var descript = videoInfo !== null ? videoInfo.descript : '正在加载';
		// 视频创建时间
		var createTime = videoInfo !== null ? videoInfo.createTime : '正在加载';
		// 导航信息 
		var navInfo = videoInfo !== null ? videoInfo.navInfo : [];

		return	<div className='video-intro'>
					<div className='up-info'>
						<div className='up-face'>
							<a><img src={face} /></a>
						</div>
						<div className='up-name'>
							<a>UP主：{username}</a>
							<a>围观UP主的全部投稿</a>
						</div>
						<a href='' className='up-follow'>关注</a>
					</div>
					<div className='title-desc' ref='titleDesc'>
						<h1 className='video-title'>{title}</h1>
						<div className='video-desc'>
							<p>{descript}</p>
						</div>
					</div>
					<div className='nav-info'>
					{	
						navInfo.map((navInfoItem, index) => {
							return	<a key={index}>{navInfoItem}<span> &gt; </span></a>; 
						})
					}
					<span>av{this.props.avNum}</span>
					</div>
					<ul className='detaied-info'>
						<li>播放：{view >= 10000 ? (view/10000).toFixed(1) + '万' : view}</li>
						<li>弹幕：{danmaku >= 10000 ? (danmaku/10000).toFixed(1) + '万' : danmaku}</li>
						<li>收藏：{favorite >= 10000 ? (favorite/10000).toFixed(1) + '万' : favorite}</li>
						<li className='hide' ref='dateInfo'>时间：{createTime}</li>
					</ul>
					<div className='more-info-toggle' onClick={this.changeDisplayEle}>
						<i className='icon icon-arrow-down' ref='arrowDownIcon'></i>
					</div>
				</div>
	}
});

export default VideoIntro;