webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(40);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _setRootFontsize = __webpack_require__(191);

	var _setRootFontsize2 = _interopRequireDefault(_setRootFontsize);

	var _Header = __webpack_require__(192);

	var _Header2 = _interopRequireDefault(_Header);

	var _Nav = __webpack_require__(193);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Footer = __webpack_require__(194);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _AppLink = __webpack_require__(196);

	var _AppLink2 = _interopRequireDefault(_AppLink);

	var _LoadCover = __webpack_require__(198);

	var _LoadCover2 = _interopRequireDefault(_LoadCover);

	var _UserContent = __webpack_require__(218);

	var _UserContent2 = _interopRequireDefault(_UserContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 根据屏幕宽度改变根节点的fontsize值remAdaptation.js

	// 组件
	(0, _setRootFontsize2.default)();
	// 主要内容组件


	var Root = _react2.default.createClass({
		displayName: 'Root',

		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Header2.default, null),
				_react2.default.createElement(_Nav2.default, { pageActive: 4 }),
				_react2.default.createElement(_UserContent2.default, null),
				_react2.default.createElement(_AppLink2.default, null),
				_react2.default.createElement(_Footer2.default, null)
			);
		}
	});

	_reactDom2.default.render(_react2.default.createElement(Root, null), document.querySelector('#app'));

/***/ },

/***/ 191:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	// 根据屏幕宽度改变根节点的fontsize值
	function setRootFontsize() {
		var deviceWidth = document.documentElement.clientWidth;
		console.log(deviceWidth);
		document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px';
	}

	exports.default = setRootFontsize;

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// Header
	var React = __webpack_require__(9);
	var Header = React.createClass({
		displayName: 'Header',

		render: function render() {
			return React.createElement(
				'header',
				{ className: 'header' },
				React.createElement('a', { href: 'index.html', className: 'logo' }),
				React.createElement(
					'div',
					{ className: 'btn-box' },
					React.createElement(
						'a',
						{ href: '###', className: 'search-btn' },
						React.createElement('i', { className: 'icon-search' })
					),
					React.createElement(
						'a',
						{ href: '###', className: 'history-btn' },
						React.createElement('i', { className: 'icon-history' })
					)
				)
			);
		}
	});

	exports.default = Header;

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// Nav
	var React = __webpack_require__(9);
	var Nav = React.createClass({
		displayName: 'Nav',

		render: function render() {
			var pageActive = this.props.pageActive;
			return React.createElement(
				'nav',
				{ className: 'menu' },
				React.createElement(
					'ul',
					{ className: 'menu-list' },
					React.createElement(
						'li',
						{ className: pageActive === 0 ? 'menu-active' : '' },
						React.createElement(
							'a',
							{ href: 'index.html' },
							'\u9996\u9875'
						)
					),
					React.createElement(
						'li',
						{ className: pageActive === 1 ? 'menu-active' : '' },
						React.createElement(
							'a',
							{ href: 'channel.html' },
							'\u9891\u9053'
						)
					),
					React.createElement(
						'li',
						{ className: pageActive === 2 ? 'menu-active' : '' },
						React.createElement(
							'a',
							{ href: 'live.html' },
							'\u76F4\u64AD'
						)
					),
					React.createElement(
						'li',
						{ className: pageActive === 3 ? 'menu-active' : '' },
						React.createElement(
							'a',
							{ href: 'ranking.html' },
							'\u6392\u884C'
						)
					),
					React.createElement(
						'li',
						{ className: pageActive === 4 ? 'menu-active' : '' },
						React.createElement(
							'a',
							{ href: 'user.html' },
							'\u6211\u7684'
						)
					)
				)
			);
		}
	});

	exports.default = Nav;

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _toTop = __webpack_require__(195);

	var _toTop2 = _interopRequireDefault(_toTop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Footer
	var React = __webpack_require__(9);
	// 返回顶部toTop.js
	var Footer = React.createClass({
		displayName: 'Footer',

		componentDidMount: function componentDidMount() {
			(0, _toTop2.default)('.to-top');
		},
		render: function render() {
			return React.createElement(
				'footer',
				{ className: 'footer' },
				React.createElement(
					'ul',
					{ className: 'foot-menu' },
					React.createElement(
						'li',
						null,
						React.createElement(
							'a',
							{ className: 'to-computer', href: '###' },
							React.createElement('i', { className: 'icons icons-computer' }),
							React.createElement(
								'span',
								null,
								'\u7535\u8111\u7248'
							)
						)
					),
					React.createElement(
						'li',
						null,
						React.createElement(
							'a',
							{ className: 'to-app', href: '###' },
							React.createElement('i', { className: 'icons icons-app' }),
							React.createElement(
								'span',
								null,
								'\u5BA2\u6237\u7AEF'
							)
						)
					),
					React.createElement(
						'li',
						null,
						React.createElement(
							'a',
							{ className: 'to-top', href: '###' },
							React.createElement('i', { className: 'icons icons-top' }),
							React.createElement(
								'span',
								null,
								'\u8FD4\u56DE\u9876\u90E8'
							)
						)
					)
				),
				React.createElement(
					'p',
					null,
					'\u54D4\u54E9\u54D4\u54E9\u5F39\u5E55\u89C6\u9891\u7F51 \u6CAAICP\u590713002172\u53F7-3'
				),
				React.createElement(
					'p',
					null,
					'\u4FE1\u606F\u7F51\u7EDC\u4F20\u64AD\u89C6\u542C\u8282\u76EE\u8BB8\u53EF\u8BC1\uFF1A0910417'
				)
			);
		}
	});

	exports.default = Footer;

/***/ },

/***/ 195:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 返回顶部

	function toTop(clickEleSelector) {
		var clickEle = document.querySelector(clickEleSelector);
		var intervalId = null;
		clickEle.addEventListener('click', function () {
			intervalId = setInterval(function () {
				var rootNode = document.body.scrollTop === 0 ? document.documentElement : document.body;
				rootNode.scrollTop = rootNode.scrollTop - rootNode.scrollTop * 0.1;
				if (rootNode.scrollTop <= 0) {
					clearInterval(intervalId);
				}
			}, 10);
		});
	}

	exports.default = toTop;

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _appLinkShow = __webpack_require__(197);

	var _appLinkShow2 = _interopRequireDefault(_appLinkShow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// AppLink底部悬浮窗口
	var React = __webpack_require__(9);
	// 底部悬浮窗口显示隐藏appLinkShow.js

	var AppLink = React.createClass({
		displayName: 'AppLink',

		componentDidMount: function componentDidMount() {
			(0, _appLinkShow2.default)('.app-link', '.app-link .close-btn');
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'app-link' },
				React.createElement('div', { className: 'app-logo' }),
				React.createElement(
					'div',
					{ className: 'app-intro text-overflow' },
					React.createElement(
						'p',
						null,
						'\u4E0Abilibili\u5BA2\u6237\u7AEF'
					),
					React.createElement(
						'p',
						null,
						'\u9AD8\u6E05\u89C6\u9891 \u79BB\u7EBF\u89C2\u770B \u65B0\u756A\u7535\u5F71\u4E00\u89C8\u65E0\u4F59'
					)
				),
				React.createElement(
					'a',
					{ className: 'app-down-btn', href: '###' },
					'\u4E0B\u8F7D'
				),
				React.createElement('div', { className: 'close-btn' })
			);
		}
	});

	exports.default = AppLink;

/***/ },

/***/ 197:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 底部悬浮窗口显示隐藏
	function appLinkShow(appLinkEleSelector, closeEleSelector) {
		var appLink = document.querySelector(appLinkEleSelector);
		var closeBtn = document.querySelector(closeEleSelector);
		var isScroll = false;

		closeBtn.addEventListener('touchstart', function () {
			appLink.style.display = 'none';
			window.removeEventListener('scroll', scrollHandler);
		});

		var scrollHandler = function scrollHandler() {
			if (isScroll === true) {
				return;
			}

			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

			// 滚到底部则隐藏 
			// 页面总高度 - 视口上方因滚动隐藏的区域  = 视口高度  则可以认为滚动到了底部
			// 加上appLink的高度再加100px 意思是 滚动到appLink元素顶部再上100px的地方就隐藏
			if (document.body.scrollHeight - scrollTop <= window.innerHeight + appLink.offsetHeight + 100) {
				appLink.style.transform = 'translateY(100%)';
			} else {
				appLink.style.transform = 'translateY(0)';
			}
			isScroll = true;
			// console.log(body.scrollHeight-body.scrollTop,window.innerHeight+appLink.offsetHeight);

			setTimeout(function () {
				isScroll = false;
			}, 100);
		};

		window.addEventListener('scroll', scrollHandler);
	}

	exports.default = appLinkShow;

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 加载loading页面
	var React = __webpack_require__(9);

	var LoadCover = React.createClass({
		displayName: 'LoadCover',

		render: function render() {
			var loading = this.props.loading;
			return React.createElement(
				'div',
				{ className: 'load-cover' + (loading === false ? ' loaded' : '') },
				React.createElement(
					'div',
					{ className: 'loading-txt' },
					'(\xB4\u30FB\u03C9\u30FB\uFF40)\u6B63\u5728\u52A0\u8F7D...'
				)
			);
		}
	});

	exports.default = LoadCover;

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UserContent = _react2.default.createClass({
		displayName: 'UserContent',

		getInitialState: function getInitialState() {
			// 创建菜单数据
			function createUserMenuData(title, iconName) {
				return {
					title: title,
					iconName: iconName
				};
			}

			// 菜单数据
			var userMenuData = [createUserMenuData('我的收藏', 'fav'), createUserMenuData('我的投稿', 'upload'), createUserMenuData('历史记录', 'history')];

			return { userMenuData: userMenuData };
		},
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'user-content' },
				_react2.default.createElement(
					'div',
					{ className: 'info-box' },
					_react2.default.createElement(
						'div',
						{ className: 'user-face' },
						_react2.default.createElement('img', { src: 'http://i2.hdslb.com/bfs/face/cdc749623feef81a91840c302c07de5ba66875a3.jpg', alt: 'face' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'user-info' },
						_react2.default.createElement(
							'p',
							{ className: 'user-name' },
							'\u5DF2\u7ECF\u4E0D\u60F3\u53D6\u540D\u5B57\u4E86'
						),
						_react2.default.createElement(
							'p',
							{ className: 'user-coin' },
							'\u786C\u5E01\uFF1A1000'
						)
					),
					_react2.default.createElement('i', { className: 'user-icon-arrow' })
				),
				_react2.default.createElement(
					'ul',
					{ className: 'user-menu' },
					this.state.userMenuData.map(function (userMenuItem, key) {

						// 菜单标题
						var title = userMenuItem.title;
						// 菜单图标
						var iconName = userMenuItem.iconName;

						return _react2.default.createElement(
							'li',
							{ key: key },
							_react2.default.createElement(
								'a',
								{ href: '###' },
								_react2.default.createElement('i', { className: 'user-icon-' + iconName }),
								_react2.default.createElement(
									'p',
									null,
									title
								),
								_react2.default.createElement('i', { className: 'user-icon-arrow' })
							)
						);
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'exit-login' },
					_react2.default.createElement(
						'a',
						{ href: '#exit-login' },
						'\u9000\u51FA\u767B\u5F55'
					)
				)
			);
		}
	});

	exports.default = UserContent;

/***/ }

});