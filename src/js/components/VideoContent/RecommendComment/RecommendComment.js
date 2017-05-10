
import React from 'react';
import Recommend from './Recommend.js';
import Comment from './Comment.js';

var RecommendComment = React.createClass({
	getInitialState: function(){
		return { 
			toggleCont: 'recommend',
			commentCount: null
		}
	},
	toggleChange: function(toggleTarget){
		return () => {
			this.setState({toggleCont: toggleTarget});
		}
	},
	getCommentCount: function(){
		return (count) => {
			this.setState({ commentCount: count });
		}
	},
	render: function(){

		var toggleCont = this.state.toggleCont;
		var commentCount = this.state.commentCount === null ? '正在加载' : this.state.commentCount;
	
		return	<div className='recommend-comment'>
							<ul className='cont-toggle'>
								<li onClick={this.toggleChange('recommend')}><p className={toggleCont === 'recommend' ? 'on' : ''}>相关推荐</p></li>
								<li onClick={this.toggleChange('comment')}><p className={toggleCont === 'comment' ? 'on' : ''}>评论<em className='comment-num'>{commentCount}</em></p></li>
							</ul>
							<Recommend toggleCont={toggleCont} avNum={this.props.avNum} />
							<Comment toggleCont={toggleCont} avNum={this.props.avNum} getCommentCount={this.getCommentCount()} />
						</div>
	}
});

export default RecommendComment;