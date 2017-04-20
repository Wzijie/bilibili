
import React from 'react';

var UserContent = React.createClass({
	getInitialState: function(){
		// 创建菜单数据
		function createUserMenuData(title, iconName){
			return {
				title: title,
				iconName: iconName
			}
		}

		// 菜单数据
		var userMenuData = [
			createUserMenuData('我的收藏', 'fav'),
			createUserMenuData('我的投稿', 'upload'),
			createUserMenuData('历史记录', 'history')
		];

		return { userMenuData: userMenuData }
	},
	render: function(){
		return	<div className='user-content'>
					<div className='info-box'>
						<div className='user-face'>
							<img src='http://i2.hdslb.com/bfs/face/cdc749623feef81a91840c302c07de5ba66875a3.jpg' alt='face' />
						</div>
						<div className='user-info'>
							<p className='user-name'>已经不想取名字了</p>
							<p className='user-coin'>硬币：1000</p>
						</div>
						<i className='user-icon-arrow'></i>
					</div>
					<ul className='user-menu'>
					{
						this.state.userMenuData.map((userMenuItem, key) => {

							// 菜单标题
							var title = userMenuItem.title;
							// 菜单图标
							var iconName = userMenuItem.iconName;

							return	<li key={key}>
										<a href='###'>
											<i className={'user-icon-' + iconName}></i>
											<p>{title}</p>
											<i className='user-icon-arrow'></i>
										</a>
									</li>
						})
					}
					</ul>
					<div className='exit-login'>
						<a href='#exit-login'>退出登录</a>
					</div>
				</div>
	}
});

export default UserContent;