
import React from 'react';

var ChannelList = React.createClass({
	render: function(){

		var channelData = this.props.channelData;

		return	<ul className='channel-list'>
						{
							channelData.map((channelItem, index) => {

								// 频道标题
								var title = channelItem.title;
								// 频道图标class
								var iconName = channelItem.iconName;
								// 是否有更新总数
								var isUpdateCount = channelItem.updateCount !== undefined ? true : false;
								// 更新总数
								var updateCount = channelItem.updateCount > 99 ? '99+' : channelItem.updateCount;

								return	<li key={index}>
													<a href='###'>
														<i className={'channel-icon channel-icon-' + iconName}>
															{
																isUpdateCount 
																? <span className='channel-num'>{updateCount}</span> 
																: ''
															}
														</i>
														<p className='channel-name'>{title}</p>
													</a>
												</li>
							})
						}
						</ul>
	}
});

export default ChannelList;