// Header
var React = require('react');

var Header = React.createClass({
	render: function(){
		
		// 切换搜索面板是否显示方法
		var toggleInitialSearch = this.props.toggleInitialSearch;

		return	<header className='header'>
					<a href='index.html' className='logo'></a>
					<div className='btn-box'>
						<a href='###' className='search-btn' onClick={toggleInitialSearch}><i className='icon-search'></i></a>
						<a href='###' className='history-btn'><i className='icon-history'></i></a>
					</div>
				</header>
	}
});

export default Header;