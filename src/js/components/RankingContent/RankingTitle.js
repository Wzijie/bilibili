
import React from 'react';

var RankingTitle = React.createClass({
	render: function(){
		return	<div className='rank-title'>
							<a href='index.html' className='back-index'>
								<i className='rank-icon-back'></i>
							</a>
							<h2>排行榜</h2>
						</div>
	}
});

export default RankingTitle;