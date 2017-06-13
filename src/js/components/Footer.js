// Footer
var React = require('react');
import toTop from '../plugs/toTop.js';	// 返回顶部toTop.js
var Footer = React.createClass({
	componentDidMount: function(){
		toTop('.to-top');
	},
	render: function(){
		return	<footer className='footer'>
							<ul className='foot-menu'>
								<li>
									<a className='to-computer' href='###'>
										<i className='icons icons-computer'></i>
										<span>电脑版</span>
									</a>
								</li>
								<li>
									<a className='to-app' href='###'>
										<i className='icons icons-app'></i>
										<span>客户端</span>
									</a>
								</li>
								<li>
									<a className='to-top' href='###'>
										<i className='icons icons-top'></i>
										<span>返回顶部</span>
									</a>
								</li>
							</ul>
							<p>哔哩哔哩弹幕视频网 沪ICP备13002172号-3</p>
							<p>信息网络传播视听节目许可证：0910417</p>
						</footer>
	}
});

export default Footer;