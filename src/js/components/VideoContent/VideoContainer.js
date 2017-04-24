
import React from 'react';
import createScriptJsonp from '../../plugs/createScriptJsonp.js';

var VideoContainer = React.createClass({
	getInitialState: function(){
		return { 
			// 视频数据 Object
			playerData: null,
			// 播放器是否加载 首次点击封面后才会显示播放器内容
			playerLoad: false,
			// 播放器是否暂停
			paused: true,
			// 播放器控制面板是否显示
			controlShow: false,
			// 储存控制播放器隐藏的定时器ID
			controlShowTimeout: null,
			// 进度条是否在拖动中
			isProgressTouchMove: false,
			// 视频播放出错的错误代码
			errorCode: null,
			// 弹幕数据 Array
			barrageData: null
		};
	},
	componentDidMount: function(){
		// 本来在思考全局函数getPlayerData怎么改变react组件内部的数据
		// 然后直接写在window上也可以...
		// 但是还不知道外部如何改变内部的数据
		// 如vue的话可以 component.data = data; 修改数据
		// 回调函数名有'.'出现的话，首次获取会出错
		// 本来打算将jsonp的回调函数全部写在一个对象里
		window.getPlayerData = (data) => {
			console.log(data, 'playerData');
			if(data.message){
				this.setState({playerData: data.message});
			}else{
				this.setState({playerData: data});
			}	
		}
		this.getPlayerDataHandler(this.props.videoPage);
	
	},

	// 在接受到的videoPage改变时重新请求视频数据(更换part时)
	componentWillReceiveProps: function(nextProps){
		if(this.state.playerData === null){
			return;
		}
		console.log('componentWillReceiveProps');

		// 视频暂停
		this.refs.player.pause();
		// 清除执行控制面板显示隐藏的定时器
		clearTimeout(this.state.controlShowTimeout);
		// 数据初始化
		this.setState({ 
			playerData: null,
			playerLoad: false,
			paused: true,
			controlShow: false,
			controlShowTimeout: null,
			isProgressTouchMove: false,
			errorCode: null
		});
		// 根据新的分p数执行jsonp请求
		this.getPlayerDataHandler(nextProps.videoPage);
	},

	// jsonp请求方法
	// page：分p数
	getPlayerDataHandler: function(page){
		var avNum = this.props.avNum;
		var getPlayerDataSrc = 'http://api.bilibili.com/playurl?callback=getPlayerData&aid='+avNum+'&page='+ page +'&platform=html5&quality=1&vtype=mp4&type=jsonp&token=fb4ddc7a1b10ee45bd962f2833c453c2&_=' + Date.now();
		// 如何处理返回错误的数据报错
		try{
			var getPlayerDataScriptEle = createScriptJsonp(getPlayerDataSrc);
			document.body.removeChild(getPlayerDataScriptEle);
		}catch(error){
			console.log('error',error);
		}
	},

	// 首次点击封面后视频加载
	playerLoadHandler: function(){
		this.setState({playerLoad: true});

		// xhr请求弹幕数据
		var xhr = new XMLHttpRequest();
		var barrageURL = this.state.playerData.cid;
		var barrageList = [];
		xhr.open('GET', barrageURL);
		xhr.addEventListener('readystatechange', (event) => {
			var xhrTarget = event.target;
			if(xhrTarget.readyState === 4 && xhrTarget.status === 200){
				console.log(xhrTarget.responseXML, 'xhr');
				// 因为是xml文档所以使用responseXML，获取到的是整个xml文档
				var xmlRoot = xhrTarget.responseXML;
				// 获取所有d标签，d标签为弹幕内容
				var barrageNode = xmlRoot.querySelectorAll('d');
				// 遍历拿到想要的数据，弹幕内容及弹幕发送时间
				Array.from(barrageNode).forEach((barrageItem) => {
					var content = barrageItem.innerHTML;
					var playTime = barrageItem.getAttribute('p');
					barrageList.push({
						content: content,
						playTime: playTime.slice( 0, playTime.indexOf(',') )
					});
				});
				// 设置弹幕数据
				this.setState({ barrageData: barrageList });
			}
		});
		xhr.addEventListener('error', (event) => {
			console.log('请求弹幕数据出错');
		});
		xhr.send(null);
	},

	// 视频播放
	// canplay事件 当浏览器可以播放音频/视频时触发
	canplayHandler: function(event){
		event.target.play();
		this.setState({paused: false});
		// 视频播放后隐藏缓冲图标
		this.refs.stateIcon.classList.add('hide');
		this.refs.loadingIcon.classList.remove('active');
		console.log('canplay');
	},

	// 控制面板 显示隐藏切换
	controlToggle: function(){
		clearTimeout(this.state.controlShowTimeout);
		if(this.state.controlShow){
			this.setState({controlShow: false});
		}else{
			this.setState({controlShow: true});
			// 控制面板显示时，如果正在播放则3秒后隐藏控制面板
			if(!this.state.paused){
				this.setState( { controlShowTimeout: setTimeout(this.controlToggle, 3000) } );
			}
		}
	},

	// 播放暂停切换
	playToggle: function(){
		if(this.state.paused){
			this.refs.player.play();
			// 开始播放后开启隐藏控制面板定时器
			this.setState({
				paused: false, 
				controlShowTimeout: setTimeout(this.controlToggle, 3000)
			});
		}else{
			this.refs.player.pause();
			this.setState({paused: true});
			// 暂停后停止隐藏控制面板的定时器
			clearTimeout(this.state.controlShowTimeout);
		}
	},

	// 将毫秒转换成 分 秒的方法
	timeFrom: function(ms){
		var min = Math.floor(ms/60);
		var second = Math.floor(ms%60);
		return { min, second };
	},

	// 修改视频总时长显示
	// durationchange事件 当音频/视频的时长已更改时触发
	changeTotalTime: function(event){
		var totalTime = this.timeFrom(event.target.duration);
		var totalTimeStr = (totalTime.min < 10 ? '0' + totalTime.min : totalTime.min) + ':' + (totalTime.second < 10 ? '0' + totalTime.second : totalTime.second);
		this.refs.totalTime.innerHTML = totalTimeStr;
	},

	// 修改视频当前播放时间及进度条长度
	// timeupdate事件 当目前的播放位置已更改时触发
	changeCurrentTime: function(event){
		var currentTime = this.timeFrom(event.target.currentTime);
		var currentTimeStr = (currentTime.min < 10 ? '0' + currentTime.min : currentTime.min) + ':' + (currentTime.second < 10 ? '0' + currentTime.second : currentTime.second);

		// 当前播放时间 / 总时间 得到比率
		var currentProgress = event.target.currentTime / event.target.duration;

		// 设置时间
		this.refs.currentTime.innerHTML = currentTimeStr;

		// 进度条当前不在拖动中则设置进度条长度
		if(this.state.isProgressTouchMove){
			return;
		}
		this.refs.currentProgress.style.width = currentProgress*100 + "%";

		/* 初步实现播放弹幕 */
		// 获取弹幕轨道
		var barrageTrack = document.querySelectorAll('.barrage-track');
		var trackIndex = 0;
		this.state.barrageData.forEach((barrageItem) => {
			// 判断当前播放时间与弹幕播放时发送时间是否一致
			if(Math.round(event.target.currentTime) === Math.round(barrageItem.playTime)){
				// 创建弹幕内容插入轨道
				var barrageContent = document.createElement('p');
				barrageContent.innerHTML = barrageItem.content;
				barrageTrack[trackIndex].appendChild(barrageContent);
				// barrageContent.style.transform = 'translateX(-3.75rem)';

				((node, index) => {
					setTimeout(() => {
						node.style.transform = 'translateX(-3.75rem)';
					}, 0);

					// 5s后删除弹幕
					setTimeout(() => {
						barrageTrack[index].removeChild(node);
					}, 5000);
				})(barrageContent, trackIndex);

				// 轨道索引+1
				trackIndex++;
				// 等于轨道数量则归0
				if(trackIndex === barrageTrack.length){
					trackIndex = 0;
				}
			}
		});
		console.log(trackIndex)
	},

	// 改变缓冲条长度
	//　progress事件当浏览器正在下载音频/视频时触发
	progressHandler: function(event){
		// buffered返回表示音频/视频已缓冲部分的 TimeRanges 对象
		// TimeRanges 对象属性：
		// length - 获得音视频中已缓冲范围的数量
		// start(index) - 获得某个已缓冲范围的开始位置
		// end(index) - 获得某个已缓冲范围的结束位置
		console.log(event.target.buffered);
		var buffered = event.target.buffered;
		// 没有缓冲数据则退出
		if(buffered.length <= 0){
			return;
		}
		// 当前以缓冲时间 /  总时间 得到比率
		var maxBuffered = buffered.end(buffered.length-1) / event.target.duration;
		console.log(buffered.start(buffered.length-1),buffered.end(buffered.length-1), '缓冲进度');
		this.refs.bufferedProgress.style.width = maxBuffered*100 + '%';
	},

	// 设置当前播放时间
	setCurrentTime: function(event){
		// touchend事件 touches数组为空, 触摸事件信息在changedTouches
		console.log(event.touches,event.changedTouches);
		// ( 当前点击的X位置 - 进度条的offLeft 得到X位置相对于进度条的offLeft ) / 进度条的宽度 得到比率
		var touchLeftRatio = (event.changedTouches[0].pageX - event.currentTarget.offsetLeft) / event.currentTarget.offsetWidth;

		// 处理当拖动超出范围时数据也超出范围
		if(touchLeftRatio >= 1){
			touchLeftRatio = 0.99;
		}
		if(touchLeftRatio <= 0){
			touchLeftRatio = 0.01;
		}
		console.log(touchLeftRatio);
		// 总时间 * 比率 得到实际时间
		this.refs.player.currentTime = this.refs.player.duration * touchLeftRatio;
		console.log(this.refs.player.duration * touchLeftRatio);
		this.setState( { controlShowTimeout: setTimeout(this.controlToggle, 3000) } );
		this.setState({isProgressTouchMove: false});
	},

	// 拖动进度条
	progressTouchMove: function(event){
		var currentProgressWidth = (event.touches[0].pageX - event.currentTarget.offsetLeft) / event.currentTarget.offsetWidth;
		// 限制最大为1最小为0
		if(currentProgressWidth >= 1){
			currentProgressWidth = 1;
		}
		if(currentProgressWidth <= 0){
			currentProgressWidth = 0;
		}

		this.refs.currentProgress.style.width = currentProgressWidth*100 + '%';
	},

	// 点击进度条
	progressTouchStart: function(){
		clearTimeout(this.state.controlShowTimeout);
		this.setState({isProgressTouchMove: true});
	},

	// waiting事件当视频由于需要缓冲下一帧而停止时触发
	waiting: function(event){
		// 显示缓冲图标
		this.refs.stateIcon.classList.remove('hide');
		this.refs.loadingIcon.classList.add('active');
		this.setState({paused: 'buffered'});
	},

	// playing事件当音频/视频在已因缓冲而暂停或停止后已就绪时触发
	playing: function(){
		// 隐藏缓冲图标
		this.refs.loadingIcon.classList.remove('active');
		this.setState({paused: false});
	},

	// 视频播放出错事件error
	// 设置错误代码
	error: function(event){
		console.log(event.target.error.code);
		this.setState({errorCode: event.target.error.code});
	},

	// 重新加载视频方法
	videoReload: function(){
		this.refs.player.load();
		this.setState({errorCode: null});
	},

	// 全屏方法 
	playerFullScreen: function(){
		// 直接调用的是控制全屏的api
		// 方法名与标准有差异
		if(this.refs.player.requestFullScreen){
			this.refs.player.requestFullScreen();
		}else if(this.refs.player.webkitRequestFullScreen){
			this.refs.player.webkitRequestFullScreen();
		}else if(this.refs.player.mozRequestFullScreen){
			this.refs.player.mozRequestFullScreen();
		}
	},

	render: function(){

		// 处理播放器数据还未加载时
		if(this.state.playerData === null){
			return	<div className='video-container'>
						<div className='video-loading'>
							<p>(´・ω・｀)正在加载...</p>
						</div>
					</div>
		}

		// 处理查询不到此aid对应的数据
		if(Object.prototype.toString.call(this.state.playerData) === '[object String]'){
			return	<div className='video-container'>
						<div className='video-loading'>
							<p>查询错误，可能找不到此aid的数据</p>
						</div>
					</div>
		}

		var playerData = this.state.playerData;

		// 视频时间长度 单位毫秒
		var videoLength = this.timeFrom(Math.floor(playerData.timelength/1000));
		// 时间显示格式 00:00
		var videoLengthStr = (videoLength.min < 10 ? '0' + videoLength.min : videoLength.min) + ':' + (videoLength.second < 10 ? '0' + videoLength.second : videoLength.second);

		return	<div className='video-container'>
					<div className='barrage'>
						<div className='barrage-track'>
						</div>
						<div className='barrage-track'>
						</div>
						<div className='barrage-track'>
						</div>
						<div className='barrage-track'>
						</div>
						<div className='barrage-track'>
						</div>
						<div className='barrage-track'>
						</div>
						<div className='barrage-track'>
						</div>
						<div className='barrage-track'>
						</div>
						<div className='barrage-track'>
						</div>
					</div>
					<div className='player-container' onTouchStart={this.controlToggle}>
						<video className='player'  data-webkit-playsinline preload='auto' onDurationChange={this.changeTotalTime} onLoadStart={this.waiting} onCanPlay={this.canplayHandler} onTimeUpdate={this.changeCurrentTime} onProgress={this.progressHandler} onWaiting={this.waiting} onPlaying={this.playing} onError={this.error} ref='player'>
							{this.state.playerLoad ? <source src={playerData.durl[0].url} type="video/mp4" /> : ''}
						</video>
					</div>
					<div className={'load-layer' + (this.state.playerLoad ? ' hide' : '')} onTouchStart={this.playerLoadHandler}>
						<img className='video-cover' src={playerData.img} /> 
						<h2 className='video-load-title'>av{this.props.avNum}</h2>
						<a className='app-down'>粉色有角三倍速缓冲，就用bilibili客户端 >></a>
						<div className='video-length'>{videoLengthStr}</div>
						<i className='load-player player-icon'></i>
					</div>
					<div className={'player-control' + (this.state.controlShow ? '' : ' hide')}>
						<div className='time-container'>
							<span className='current-time' ref='currentTime'>00:00</span>
							<span>/</span>
							<span className='total-time' ref='totalTime'>00:00</span>
						</div>
						<div className='progress' onTouchEnd={this.setCurrentTime} onTouchMove={this.progressTouchMove} onTouchStart={this.progressTouchStart}>
							<div className='total-progress'></div>	
							<div className='buffered-progress' ref='bufferedProgress'></div>
							<div className='current-progress' ref='currentProgress'></div>
						</div>
						<div className='more-control'>
							<div className='danmu-toggle'>
								<i className='danmu-toggle-icon'></i>
							</div>
							<div className='full-screen' onClick={this.playerFullScreen}>
								<i className='full-screen-icon'></i>
							</div>
						</div>
					</div>
					<div className={'state-icon' + (this.state.controlShow ? '' : ' hide')} ref='stateIcon'>
						<i className='loading-icon' ref='loadingIcon'></i>
						<i className={'play-icon' + (this.state.paused === true ? ' active' : '')} onTouchStart={this.playToggle}></i>
						<i className={'pause-icon' + (this.state.paused === false ? ' active' : '')} onTouchStart={this.playToggle}></i>
					</div>
					{
						this.state.errorCode !== null ? 
						<div className='error-info'>
							<p className='error-msg'>错误代码：{this.state.errorCode}，视频加载发生错误，请刷新页面或重新加载视频</p>
							<span className='video-reload' onTouchStart={this.videoReload}>重新加载</span>
						</div> : ''
					}
				</div>
	}
});

export default VideoContainer;