
import React from 'react';
import ajaxRequest from '../../plugs/ajaxRequest.js';

var VideoPart = React.createClass({
	getInitialState: function(){
		return { 
			// 全部分p的数据 Object
			partData: null,
			// 当前显示的分p 3个
			partDisplay: null,
			// 是否显示全部分p
			isAllDisplay: false
		}
	},
	componentDidMount: function(){

		var successFun = (data) => {
			console.log(data, 'videoPart');
			if(data.code === 404){
				this.setState({ partData: data.code });
				return;
			}

			this.setState({ 
				partData: data.data,
				partDisplay: data.data.partName.slice(0,3)
			});
		}
		var errorFun = (error) => {
			console.log(error);
		}

		var avNum = this.props.avNum;
		var requestURL = 'http://weizijie.cc:3000/partList/' + avNum;
		ajaxRequest(requestURL, 'GET', successFun, errorFun);

	},

	// 改变videoPage并且滚动到顶部
	changeVideoPageHandler: function(page){
		return () => {
			this.props.changeVideoPage(page);

			var intervalTime = setInterval(() => {
				var rootNode = document.body.scrollTop === 0 ? document.documentElement : document.body;
				rootNode.scrollTop = rootNode.scrollTop - rootNode.scrollTop * 0.1;
				if(rootNode.scrollTop <= 0){
					clearInterval(intervalTime);
				}
			}, 10);		
		}
	},

	// 切换是否显示全部分p
	toggleDisplayAll: function(){
		var partDisplay = this.state.partDisplay;

		if(this.state.isAllDisplay){
			// 后来再看不明白只有一个参数的splice方法，记忆中第一个参数是要添加/删除的起始位置，第二个参数是要删除多少项
			// 百度后发现如果不设置第二个参数，则从起始位置到数组末尾的元素全部删除
			// 删除前三项后的所有元素
			partDisplay.splice(3);

			this.setState({ 
				partDisplay: partDisplay,
				isAllDisplay: false 
			});
			this.refs.displayMoreText.innerHTML = '查看全部（共'+this.state.partData.totalPage+'P）';
		}else{
			// 将所有part数据中除前三项数据添加进显示数据
			partDisplay.push(...this.state.partData.partName.slice(3));
			this.setState({ 
				partDisplay: partDisplay,
				isAllDisplay: true 
			});
			this.refs.displayMoreText.innerHTML = '收起列表';
		}
	},

	render: function(){
		if(this.state.partData === null){
			return	<div className='video-part'>
								<p className='loading-info'>正在加载...</p>
							</div>
		}

		if(this.state.partData === 404){
			return	<div className='video-part'>
								<p className='loading-info'>查询错误，可能找不到此aid的数据</p>
							</div>
		}

		var partData = this.state.partData;

		// 当前分p
		var videoPage = this.props.videoPage;

		// 分p名
		var partName = partData.partName;
		// 分p数
		var totalPage = partData.totalPage;

		// 当前显示分p的数据
		var partDisplay = this.state.partDisplay;
		console.log(partDisplay,'partDisplay');

		return	<div className='video-part'>
							<ul className='part-list'>
							{
								partDisplay.map((name, index) => {
									return	<li key={index} className={videoPage === index+1 ? 'on' : ''} onClick={this.changeVideoPageHandler(index+1)}>
														<a>{name}</a>
													</li>
								})
							}
							{
								partName.length === 0 
								? <li className='on'>
										<a>1</a>
									</li>
								: ''
							}
							{
								partName.length > 3
								?	<li className='display-more-part' onClick={this.toggleDisplayAll}>
										<a ref='displayMoreText'>查看全部（共{partName.length}P）</a>
									</li>
								: ''
							}
							</ul>
						</div>
	}
});

export default VideoPart;