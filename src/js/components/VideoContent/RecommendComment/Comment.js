
import React from 'react';
import createScriptJsonp from '../../../plugs/createScriptJsonp.js';

var Comment = React.createClass({
	getInitialState: function(){
		return { commentData: null }
	},
	componentDidMount: function(){

		window.jsonpCallBack.getCommentData = (data) => {
			console.log(data, 'comment');

			// if(data.message !== ''){
			// 	this.setState({ commentData: data.message });
			// 	return;
			// }

			this.setState({ commentData: data.data.replies.slice(0,5) });
			this.props.getCommentCount(data.data.page.count);	
		}

		var currentDate = Date.now();
		var avNum = this.props.avNum;
		var getCommentDataSrc = 'http://api.bilibili.com/x/v2/reply?callback=jsonpCallBack.getCommentData&jsonp=jsonp&type=1&sort=2&oid='+ avNum +'&pn=1&nohot=1&_=' + currentDate;
		var getCommentDataScript = createScriptJsonp(getCommentDataSrc);
		document.body.removeChild(getCommentDataScript);

	},
	formatDate: function(date){
		var date = new Date(date);
		return	{
			year: date.getFullYear(),
			month: date.getMonth()+1,
			day: date.getDate(),
			hours: date.getHours(),
			minutes: date.getMinutes()
		}
	},
	render: function(){
		if(this.state.commentData === null){
			return	<div className={'comment' + (this.props.toggleCont !== 'comment' ? ' hide' : '')}>
						<p className='loading-info'>(´・ω・｀)正在加载...</p>
					</div>
		}

		// if(Object.prototype.toString.call(this.state.commentData) === '[object String]'){
		// 	return	<div className={'comment' + (this.props.toggleCont !== 'comment' ? ' hide' : '')}>
		// 				<p className='loading-info'>{this.state.commentData}</p>
		// 			</div>
		// }

		if(this.state.commentData.length === 0){
			return	<div className={'comment' + (this.props.toggleCont !== 'comment' ? ' hide' : '')}>
						<p className='loading-info'>没有评论</p>
					</div>
		}

		var commentData = this.state.commentData;

		return	<div className={'comment' + (this.props.toggleCont !== 'comment' ? ' hide' : '')}>
					<ul className='comment-list'>
					{
						commentData.map((commentDataItem, index) => {
							// 头像URL
							var face = commentDataItem.member.avatar;
							// 用户名
							var username = commentDataItem.member.uname;
							// 评论信息
							var message = commentDataItem.content.message;
							// 评论时间
							var createTime = this.formatDate(commentDataItem.ctime*1000);
							var createTimeStrYMD = createTime.year + '-' + createTime.month + '-' + createTime.day;
							var createTimeStrHM = (createTime.hours >= 10 ? createTime.hours : '0'+createTime.hours) +':'+ (createTime.minutes >= 10 ? createTime.minutes : '0'+createTime.minutes);
							return	<li key={index}>
										<div className='comment-face'>
											<a href='###'>
												<img src={face} alt='face' />
											</a>
										</div>
										<div className='comment-main'>
											<div className='comment-info'>
												<a href='###' className='comment-name'>{username}</a>
												<span className='comment-date'>{createTimeStrYMD + ' ' + createTimeStrHM}</span>
											</div>
											<div className='comment-cont'>
												{message}
											</div>
										</div>
									</li>
						})
					}
					</ul>
					<div className='download-link'>
						<a href='###'>下载bilibili客户端，查看全部评论</a>
					</div>
				</div>
	}
});

export default Comment;