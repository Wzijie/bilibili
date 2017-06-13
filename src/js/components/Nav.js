// Nav
var React = require('react');
var Nav = React.createClass({
	render: function(){
		var pageActive = this.props.pageActive;
		return	<nav className='menu'>
							<ul className='menu-list'>
								<li className={pageActive === 0 ? 'menu-active' : ''}><a href='index.html'>首页</a></li>
								<li className={pageActive === 1 ? 'menu-active' : ''}><a href='channel.html'>频道</a></li>
								<li className={pageActive === 2 ? 'menu-active' : ''}><a href='live.html'>直播</a></li>
								<li className={pageActive === 3 ? 'menu-active' : ''}><a href='ranking.html'>排行</a></li>
								<li className={pageActive === 4 ? 'menu-active' : ''}><a href='user.html'>我的</a></li>
							</ul>
						</nav>
	}
});

export default Nav;