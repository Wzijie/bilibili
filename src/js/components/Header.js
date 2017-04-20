// Header
var React = require('react');
var Header = React.createClass({
	render: function(){
		return	<header className='header'>
					<a href='index.html' className='logo'></a>
					<div className='btn-box'>
						<a href='###' className='search-btn'><i className='icon-search'></i></a>
						<a href='###' className='history-btn'><i className='icon-history'></i></a>
					</div>
				</header>
	}
});

export default Header;