// 加载loading页面
var React = require('react');

var LoadCover = React.createClass({
	render: function(){
		var loading = this.props.loading;
		return	<div className={ 'load-cover' + (loading === false ? ' loaded' : '') }>
					<div className='loading-txt'>(´・ω・｀)正在加载...</div>
				</div>
	}
});

export default LoadCover;