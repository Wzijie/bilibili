webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _setRootFontsize = __webpack_require__(185);

	var _setRootFontsize2 = _interopRequireDefault(_setRootFontsize);

	var _ajaxRequest = __webpack_require__(198);

	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);

	var _Header = __webpack_require__(186);

	var _Header2 = _interopRequireDefault(_Header);

	var _Nav = __webpack_require__(187);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Banner = __webpack_require__(202);

	var _Banner2 = _interopRequireDefault(_Banner);

	var _Footer = __webpack_require__(188);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _AppLink = __webpack_require__(190);

	var _AppLink2 = _interopRequireDefault(_AppLink);

	var _LoadCover = __webpack_require__(192);

	var _LoadCover2 = _interopRequireDefault(_LoadCover);

	var _InitialSearch = __webpack_require__(193);

	var _InitialSearch2 = _interopRequireDefault(_InitialSearch);

	var _IndexContent = __webpack_require__(204);

	var _IndexContent2 = _interopRequireDefault(_IndexContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 存放全局jsonp回调函数


	// 组件
	window.jsonpCallBack = {};
	// 主要内容组件
	// 根据屏幕宽度改变根节点的fontsize值remAdaptation.js


	(0, _setRootFontsize2.default)();

	var Root = _react2.default.createClass({
		displayName: 'Root',

		getInitialState: function getInitialState() {
			return {
				loading: true,
				// banner数据 Array
				bannerData: null,
				// 搜索面板是否显示
				initialSearchDisplay: false
			};
		},

		componentDidMount: function componentDidMount() {
			var _this = this;

			// banner数据请求
			var bannerRequestSuccess = function bannerRequestSuccess(data) {
				_this.setState({ bannerData: JSON.parse(data.data).data });
			};
			var bannerRequestError = function bannerRequestError(error) {
				console.log(error);
			};
			var bannerRequestURL = 'http://weizijie.cc:3000/indexBanner';
			(0, _ajaxRequest2.default)(bannerRequestURL, 'GET', bannerRequestSuccess, bannerRequestError);
		},

		// 改变loading数据,当数据请求完成后执行
		loadingChange: function loadingChange() {
			this.setState({ loading: false });
		},

		// 切换搜索面板是否显示
		toggleInitialSearch: function toggleInitialSearch() {
			var initialSearchDisplay = !this.state.initialSearchDisplay;
			this.setState({ initialSearchDisplay: initialSearchDisplay });
		},

		render: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Header2.default, { toggleInitialSearch: this.toggleInitialSearch }),
				_react2.default.createElement(_InitialSearch2.default, { initialSearchDisplay: this.state.initialSearchDisplay, toggleInitialSearch: this.toggleInitialSearch }),
				_react2.default.createElement(_LoadCover2.default, { loading: this.state.loading }),
				_react2.default.createElement(_Nav2.default, { pageActive: 0 }),
				_react2.default.createElement(_Banner2.default, { bannerData: this.state.bannerData }),
				_react2.default.createElement(_IndexContent2.default, { loadingChange: this.loadingChange }),
				_react2.default.createElement(_AppLink2.default, null),
				_react2.default.createElement(_Footer2.default, null)
			);
		}
	});

	_reactDom2.default.render(_react2.default.createElement(Root, null), document.querySelector('#app'));

/***/ },

/***/ 185:
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

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// Header
	var React = __webpack_require__(3);

	var Header = React.createClass({
		displayName: 'Header',

		render: function render() {

			// 切换搜索面板是否显示方法
			var toggleInitialSearch = this.props.toggleInitialSearch;

			return React.createElement(
				'header',
				{ className: 'header' },
				React.createElement('a', { href: 'index.html', className: 'logo' }),
				React.createElement(
					'div',
					{ className: 'btn-box' },
					React.createElement(
						'a',
						{ href: '###', className: 'search-btn', onClick: toggleInitialSearch },
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

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// Nav
	var React = __webpack_require__(3);
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

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _toTop = __webpack_require__(189);

	var _toTop2 = _interopRequireDefault(_toTop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Footer
	var React = __webpack_require__(3);
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

/***/ 189:
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

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _appLinkShow = __webpack_require__(191);

	var _appLinkShow2 = _interopRequireDefault(_appLinkShow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// AppLink底部悬浮窗口
	var React = __webpack_require__(3);
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

/***/ 191:
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

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// 加载loading页面
	var React = __webpack_require__(3);

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

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _SearchOperation = __webpack_require__(194);

	var _SearchOperation2 = _interopRequireDefault(_SearchOperation);

	var _HotSearch = __webpack_require__(195);

	var _HotSearch2 = _interopRequireDefault(_HotSearch);

	var _HistorySearch = __webpack_require__(196);

	var _HistorySearch2 = _interopRequireDefault(_HistorySearch);

	var _SearchSuggest = __webpack_require__(197);

	var _SearchSuggest2 = _interopRequireDefault(_SearchSuggest);

	var _ajaxRequest = __webpack_require__(198);

	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);

	var _createScriptJsonp = __webpack_require__(199);

	var _createScriptJsonp2 = _interopRequireDefault(_createScriptJsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // 搜索操作组件
	// 热门搜索组件
	// 历史搜索组件
	// 搜索建议组件

	var InitialSearch = _react2.default.createClass({
		displayName: 'InitialSearch',

		getInitialState: function getInitialState() {
			var historySearch = localStorage.getItem('historySearch');
			historySearch = historySearch === null ? [] : JSON.parse(historySearch);
			return {
				// 表单输入的搜索关键字
				keyword: '',
				// 热很搜索数据 Array
				hotSearch: null,
				// 历史搜索数据 Array
				historySearch: historySearch,
				// 搜索建议数据
				searchSuggest: []
			};
		},

		componentDidMount: function componentDidMount() {
			var _this = this;

			// 请求热门搜索数据 start
			var hotSearchSuccess = function hotSearchSuccess(data) {
				console.log(JSON.parse(data.data), 'hotSearch');
				var hotSearchList = JSON.parse(data.data).list;
				_this.setState({ hotSearch: hotSearchList });
			};
			var hotSearchError = function hotSearchError(error) {
				console.log(error, 'hotSearchError');
			};
			var hotSearchURL = 'http://weizijie.cc:3000/hotSearch';
			(0, _ajaxRequest2.default)(hotSearchURL, 'GET', hotSearchSuccess, hotSearchError);
			// 请求热门搜索数据 end
		},

		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (nextProps.initialSearchDisplay === true) {
				this.refs.initialSearch.classList.add('show');
			} else {
				this.refs.initialSearch.classList.remove('show');
			}
		},

		// 改变keyword数据时执行的操作
		keywordChange: function keywordChange(value) {
			var _this2 = this;

			this.setState({ keyword: value });
			if (value === '') {
				return;
			}
			// 如果搜索关键字不为空则请求搜索建议数据 start
			window.jsonpCallBack.getSearchSuggest = function (data) {
				console.log(data, 'searchSuggest');
				var searchSuggest = [];
				// 分为番剧搜索建议和普通搜索建议，处理一下
				if (data.result.accurate !== undefined) {
					searchSuggest.push.apply(searchSuggest, _toConsumableArray(data.result.accurate.bangumi));
				}
				if (data.result.tag !== undefined) {
					searchSuggest.push.apply(searchSuggest, _toConsumableArray(data.result.tag));
				}
				_this2.setState({ searchSuggest: searchSuggest });
			};
			var searchSuggestURL = 'http://s.search.bilibili.com/main/suggest?jsoncallback=jsonpCallBack.getSearchSuggest&func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&bangumi_acc_num=3&special_acc_num=0&upuser_acc_num=0&tag_num=10&term=' + value + '&rnd=0.22961591460117337&_=' + Date.now();
			var searchSuggestScript = (0, _createScriptJsonp2.default)(searchSuggestURL);
			document.body.removeChild(searchSuggestScript);
			// 如果搜索关键字不为空则请求搜索建议数据 end
		},

		// 删除历史搜索
		removeHistorySearch: function removeHistorySearch(index) {
			var _this3 = this;

			return function () {
				var newHistorySearch = _this3.state.historySearch.concat();
				newHistorySearch.splice(index, 1);
				localStorage.setItem('historySearch', JSON.stringify(newHistorySearch));
				_this3.setState({ historySearch: newHistorySearch });
			};
		},

		render: function render() {

			// 切换搜索面板是否显示方法
			var toggleInitialSearch = this.props.toggleInitialSearch;

			return _react2.default.createElement(
				'div',
				{ className: 'initial-search', ref: 'initialSearch' },
				_react2.default.createElement(_SearchOperation2.default, { keyword: this.state.keyword, keywordChange: this.keywordChange, toggleInitialSearch: toggleInitialSearch }),
				_react2.default.createElement(
					'div',
					{ className: 'search-message' },
					this.state.keyword === '' ? _react2.default.createElement(
						'div',
						{ className: 'hot-history-content' },
						_react2.default.createElement(_HotSearch2.default, { hotSearchData: this.state.hotSearch }),
						_react2.default.createElement(_HistorySearch2.default, { historySearchData: this.state.historySearch, removeHistorySearch: this.removeHistorySearch })
					) : _react2.default.createElement(_SearchSuggest2.default, { searchSuggestData: this.state.searchSuggest })
				)
			);
		}
	});

	exports.default = InitialSearch;

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchOperation = _react2.default.createClass({
		displayName: 'SearchOperation',


		// 表单change事件
		keywordChangeHandler: function keywordChangeHandler(event) {
			// 改变keyword关键字数据
			this.props.keywordChange(event.target.value);
		},

		// 清空keyword关键字数据
		keywordClear: function keywordClear() {
			this.props.keywordChange('');
		},

		render: function render() {

			// 切换搜索面板是否显示方法
			var toggleInitialSearch = this.props.toggleInitialSearch;
			// 关键字
			var keyword = this.props.keyword;
			// 是否显示删除按钮
			var deleteIconShow = keyword === '' ? '' : ' show';

			return _react2.default.createElement(
				'div',
				{ className: 'search-operation' },
				_react2.default.createElement(
					'form',
					{ action: 'search.html', method: 'GET', className: 'search-form' },
					_react2.default.createElement('input', { className: 'search-input', name: 'keyword', type: 'text', value: keyword, autoComplete: 'off', placeholder: '\u641C\u7D22\u89C6\u9891\u3001\u756A\u5267\u3001up\u4E3B\u6216AV\u53F7', onChange: this.keywordChangeHandler, ref: 'searchInput' })
				),
				_react2.default.createElement('i', { className: 'search-input-delete' + deleteIconShow, onClick: this.keywordClear, ref: 'deleteIcon' }),
				_react2.default.createElement(
					'div',
					{ className: 'search-cancel', onClick: toggleInitialSearch },
					'\u53D6\u6D88'
				)
			);
		}
	});

	exports.default = SearchOperation;

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HotSearch = _react2.default.createClass({
		displayName: 'HotSearch',

		render: function render() {

			var hotSearchData = this.props.hotSearchData;

			return _react2.default.createElement(
				'div',
				{ className: 'hot-search' },
				_react2.default.createElement(
					'h3',
					{ className: 'search-info-title' },
					'\u70ED\u95E8\u641C\u7D22'
				),
				hotSearchData === null ? _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6B63\u5728\u52A0\u8F7D...'
				) : _react2.default.createElement(
					'ul',
					{ className: 'hot-search-list' },
					hotSearchData.map(function (hotSearchItem, index) {

						// 关键字
						var keyword = hotSearchItem.keyword;

						return _react2.default.createElement(
							'li',
							{ key: index },
							_react2.default.createElement(
								'a',
								{ href: 'search.html?keyword=' + keyword },
								keyword
							)
						);
					})
				)
			);
		}
	});

	exports.default = HotSearch;

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HistorySearch = _react2.default.createClass({
		displayName: 'HistorySearch',

		render: function render() {

			// 历史搜索数据
			var historySearchData = this.props.historySearchData;
			// 是否有历史搜索数据
			var noHistorySearch = historySearchData.length === 0 ? true : false;
			// 删除历史搜索数据方法
			var removeHistorySearch = this.props.removeHistorySearch;

			return _react2.default.createElement(
				'div',
				{ className: 'history-search' },
				_react2.default.createElement(
					'h3',
					{ className: 'search-info-title' },
					'\u5386\u53F2\u641C\u7D22'
				),
				noHistorySearch ? _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6682\u65E0\u5386\u53F2\u641C\u7D22'
				) : _react2.default.createElement(
					'ul',
					{ className: 'history-search-list' },
					historySearchData.map(function (historySearchItem, index) {
						// historySearchItem 搜索关键字
						return _react2.default.createElement(
							'li',
							{ key: index },
							_react2.default.createElement(
								'a',
								{ href: 'search.html?keyword=' + historySearchItem },
								historySearchItem
							),
							_react2.default.createElement('i', { className: 'history-delete', onClick: removeHistorySearch(index) })
						);
					})
				)
			);
		}
	});

	exports.default = HistorySearch;

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchSuggest = _react2.default.createClass({
		displayName: 'SearchSuggest',

		render: function render() {
			var searchSuggestData = this.props.searchSuggestData;
			return _react2.default.createElement(
				'ul',
				{ className: 'search-suggest' },
				searchSuggestData.map(function (searchSuggestItem, index) {

					// 查询搜索建议结果的html，替换script字符防止xss攻击
					// 组件使用属性dangerouslySetInnerHTML={{__html: suggestResultHTML}} 插入html
					var suggestResultHTML = searchSuggestItem.name.replace(/\<script/g, '<!--').replace(/\<\/script\>/g, '-->');
					// 搜索关键字
					var keyword = searchSuggestItem.value;
					// 是否是番剧搜索建议
					var isBangumi = searchSuggestItem.bgmcount === undefined ? false : true;

					return _react2.default.createElement(
						'li',
						{ key: index },
						_react2.default.createElement('a', { href: 'search.html?keyword=' + keyword, dangerouslySetInnerHTML: { __html: suggestResultHTML } }),
						isBangumi ? _react2.default.createElement(
							'span',
							{ className: 'suggest-bangumi' },
							'\u756A\u5267'
						) : ''
					);
				})
			);
		}
	});

	exports.default = SearchSuggest;

/***/ },

/***/ 198:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// ajax
	/*
	url 请求地址
	method 请求方式 GET POST
	successHandler 请求成功时执行的方法
	errorHandler 请求失败时执行的方法
	*/
	function ajaxRequest(url, method, successHandler, errorHandler) {
		if (window.fetch !== undefined) {
			fetch(url, {
				method: method
			}).then(function (response) {
				// console.log(response);
				// 将json数据转换成对象
				return response.json();
			}).then(function (indexContentData) {
				if (successHandler !== undefined) {
					successHandler(indexContentData);
				}
			}).catch(function (error) {
				if (errorHandler !== undefined) {
					errorHandler(error);
				}
			});
		} else {
			var xhr = new XMLHttpRequest();
			xhr.open(method, url);
			xhr.onreadystatechange = function (event) {
				var target = event.target;
				console.log(event.target);
				if (target.readyState !== 4) {
					return;
				}
				if (target.status === 200 || target.status === 304) {
					var indexContentData = JSON.parse(target.responseText);
					if (successHandler !== undefined) {
						successHandler(indexContentData);
					}
				}
			};
			xhr.send(null);
		}
	}

	exports.default = ajaxRequest;

/***/ },

/***/ 199:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function createScriptJsonp(src) {
		var scriptEle = document.createElement('script');
		scriptEle.src = src;
		try {
			return document.body.appendChild(scriptEle);
		} catch (error) {
			console.log(error, 'createScriptJsonp');
		}
	}

	exports.default = createScriptJsonp;

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _slideTouch = __webpack_require__(203);

	var _slideTouch2 = _interopRequireDefault(_slideTouch);

	var _ajaxRequest = __webpack_require__(198);

	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ajax

	var Banner = _react2.default.createClass({
		displayName: 'Banner',

		componentDidUpdate: function componentDidUpdate() {
			if (this.props.bannerData !== null) {
				(0, _slideTouch2.default)('.slide', '.slide-active li', 'active');
			}
		},
		render: function render() {

			if (this.props.bannerData === null) {
				return _react2.default.createElement(
					'div',
					{ className: 'banner' },
					_react2.default.createElement(
						'div',
						{ className: 'load-tip' },
						_react2.default.createElement(
							'p',
							null,
							'\u6B63\u5728\u8BF7\u6C42\u6570\u636E...'
						)
					)
				);
			}

			var bannerData = this.props.bannerData;

			// 主页与直播页返回的数据名不同，需要处理一下

			// 第一个banner
			var firstBanner = bannerData[0];
			var firstBannerImg = firstBanner.pic || firstBanner.img;
			var firstBannerAlt = firstBanner.name || firstBanner.title;
			var firstBannerLink = firstBanner.url || firstBanner.link;
			// 最后一个banner
			var lastBanner = bannerData[bannerData.length - 1];
			var lastBannerImg = lastBanner.pic || lastBanner.img;
			var lastBannerAlt = lastBanner.name || lastBanner.title;
			var lastBannerLink = lastBanner.url || lastBanner.link;

			return _react2.default.createElement(
				'div',
				{ className: 'banner' },
				_react2.default.createElement(
					'ul',
					{ className: 'slide' },
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: lastBannerLink },
							_react2.default.createElement('img', { src: lastBannerImg, alt: lastBannerAlt })
						)
					),
					bannerData.map(function (bannerValue, bannerKey) {

						// banner图片URL
						var img = bannerValue.pic || bannerValue.img;
						// banner图片描述
						var alt = bannerValue.name || bannerValue.title;
						// banner链接
						var link = bannerValue.url || bannerValue.link;

						return _react2.default.createElement(
							'li',
							{ key: bannerKey },
							_react2.default.createElement(
								'a',
								{ href: link },
								_react2.default.createElement('img', { src: img, alt: alt })
							)
						);
					}),
					_react2.default.createElement(
						'li',
						null,
						_react2.default.createElement(
							'a',
							{ href: firstBannerLink },
							_react2.default.createElement('img', { src: firstBannerImg, alt: firstBannerAlt })
						)
					)
				),
				_react2.default.createElement(
					'ul',
					{ className: 'slide-active' },
					bannerData.map(function (bannerValue, bannerKey) {
						return _react2.default.createElement('li', { key: bannerKey });
					})
				)
			);
		}
	}); // 拖动焦点图 slideTouch.js
	// Banner
	exports.default = Banner;

/***/ },

/***/ 203:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = slideTouch;
	// banner拖动焦点图
	/*
	** slideSelector 焦点图容器选择器 Selector
	** slideActive 焦点图下方的圆点 Selector
	** activeClass 圆点active时添加的class String
	*/
	function slideTouch(slideSelector, slideActive, activeClass) {

		var slide = document.querySelector(slideSelector);

		// 同一个元素只能执行一次
		if (slide.isExecute === true) {
			return;
		}
		slide.isExecute = true;

		var slideActive = document.querySelectorAll(slideActive); // 焦点图下方的点
		var slideActiveIndex = 0;
		var touchStartX = 0; // 按下屏幕后记录X坐标
		var diffX = 0; // 松开屏幕时的X坐标 - touchStartX 的差值
		var slideIndex = 1; // 当前拖动到第几张图片
		var slideNum = slide.children.length; // 有几张焦点图
		var translateX = -3.75; // 左右位移的值
		var intervalId = null;

		// 初始样式
		slide.style.width = slideNum + '00%';
		slide.style.transform = 'translateX(' + translateX + 'rem)';
		slideActive[slideActiveIndex].classList.add(activeClass);

		// 清除样式方法
		// nodeList 节点集合
		// className 样式名
		function loopRemoveClass(nodeList, className) {
			Array.from(nodeList).forEach(function (nodeItem) {
				nodeItem.classList.remove(className);
			});
		};

		// 触摸开始
		slide.addEventListener('touchstart', function (event) {
			// 记录当前触摸坐标
			touchStartX = event.touches[0].pageX;
			// 清除掉执行下一张banner切换的定时器
			clearInterval(intervalId);
		});

		slide.addEventListener('touchmove', function (event) {
			// 拖动焦点图时禁止页面上下拖动
			event.preventDefault();
			// 记录当前拖动的手指坐标
			var touchMoveX = event.touches[0].pageX;
			// 拖动坐标 - 触摸坐标 得到拖动的距离
			diffX = touchMoveX - touchStartX;
			// 得到的坐标是以px为单位的数值，而我是以rem为单位的。
			// 除以100是因为我是以px/100 换算为rem单位的
			slide.style.transform = 'translateX(' + (translateX + diffX / 100) + 'rem)';
		});

		// 图片切换执行的内容
		function slideChangeHandle() {

			slide.style.transition = 'all 0.2s ease';
			// 焦点图位移，当前第几张图片 * 视口宽度为3.75rem
			translateX = -slideIndex * 3.75;
			slide.style.transform = 'translateX(' + translateX + 'rem)';

			loopRemoveClass(slideActive, activeClass);
			slideActive[slideActiveIndex].classList.add(activeClass);

			setTimeout(function () {

				// 将动画过渡取消
				slide.style.transition = '0s';

				// 提醒：第一张图片跟倒数第二张是一样的，最后一张图片跟第二张是一样的
				if (slideIndex === slideNum - 1) {
					// 如果当前为最后一张图片，则跳到第二张图片
					slideIndex = 1;
					translateX = -slideIndex * 3.75;
					slide.style.transform = 'translateX(' + translateX + 'rem)';

					// 将圆点聚焦到第一个
					slideActiveIndex = 0;
					loopRemoveClass(slideActive, activeClass);
					slideActive[slideActiveIndex].classList.add(activeClass);
				}
				if (slideIndex === 0) {
					// 如果当前为第一张图片，则跳到倒数第二张
					slideIndex = slideNum - 2;
					translateX = -slideIndex * 3.75;
					slide.style.transform = 'translateX(' + translateX + 'rem)';

					// 将圆点聚焦到最后一个
					slideActiveIndex = slideActive.length - 1;
					loopRemoveClass(slideActive, activeClass);
					slideActive[slideActiveIndex].classList.add(activeClass);
				}

				// 之后再看代码时疑问为什么这里需要清除定时器
				// 在touchstart事件内不是清除过了吗
				// 问题就是这里的定时器是延迟200毫秒执行的
				// 要是在拖动过一次也就是end事件执行之后马上在200毫秒内再拖动时
				// 因为第二次触摸时延迟200毫秒的定时器还未执行，所以在第二次touchstart事件内清除是没意义的
				// 而在200毫秒后定时器启动，这时就会有一个定时器在运行，而这个定时器我预想是在第二次start时清除的
				// 在我松开这次触摸后又会有一个定时器运行。
				// 所有结论是如果我下一次拖动快过200毫秒就会多一个定时器，所以要在这里加一个清除定时器
				clearInterval(intervalId);
				intervalId = setInterval(slideNext, 3000);

				//200毫秒是因为过渡动画transition为200毫秒
			}, 200);
		};

		slide.addEventListener('touchend', function (event) {

			// 触摸时的坐标 === 松开时的坐标 (没有拖动，只是触摸然后松开，不执行切换banner图
			if (touchStartX === event.changedTouches[0].pageX) {
				return;
			};

			// diffx在拖动事件中赋值，拖动时的手指坐标 - 触摸时的手指坐标 的差值
			// 如果为正即为往右拖动否则往左拖动
			if (diffX > 0) {
				if (slideIndex > 0) {
					slideIndex = slideIndex - 1;
				}
				if (slideActiveIndex > 0) {
					slideActiveIndex = slideActiveIndex - 1;
				}
			} else if (diffX < 0) {
				if (slideIndex < slideNum - 1) {
					slideIndex = slideIndex + 1;
				}
				if (slideActiveIndex < slideActive.length - 1) {
					slideActiveIndex = slideActiveIndex + 1;
				}
			};
			slideChangeHandle();
		});

		// 图片下一张执行的方法
		function slideNext() {
			if (slideIndex < slideNum - 1) {
				slideIndex = slideIndex + 1;
			}
			if (slideActiveIndex < slideActive.length - 1) {
				slideActiveIndex = slideActiveIndex + 1;
			}
			slideChangeHandle();
		};

		intervalId = setInterval(slideNext, 3000);
	}

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _ajaxRequest = __webpack_require__(198);

	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);

	var _createScriptJsonp = __webpack_require__(199);

	var _createScriptJsonp2 = _interopRequireDefault(_createScriptJsonp);

	var _RecommendVideoContainer = __webpack_require__(205);

	var _RecommendVideoContainer2 = _interopRequireDefault(_RecommendVideoContainer);

	var _LiveVideoContainer = __webpack_require__(207);

	var _LiveVideoContainer2 = _interopRequireDefault(_LiveVideoContainer);

	var _BangumiVideoContainer = __webpack_require__(208);

	var _BangumiVideoContainer2 = _interopRequireDefault(_BangumiVideoContainer);

	var _DefaultVideoContainer = __webpack_require__(209);

	var _DefaultVideoContainer2 = _interopRequireDefault(_DefaultVideoContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 其他大部分版块

	// 主要内容
	// 正在直播版块
	// jsonp请求方法

	// 组件


	// 插件方法
	var IndexContent = _react2.default.createClass({
		displayName: 'IndexContent',

		getInitialState: function getInitialState() {
			// 创建存放大部分视频版块初始的数据
			function createMostData(title, iconName, dataName) {
				return {
					// 视频版块标题
					title: title,
					// 视频版块图标
					iconName: iconName,
					// 视频版块数据名
					dataName: dataName,
					// 存放视频版块相应的数据
					data: null
				};
			}

			// 大部分视频版块数据
			var mostData = [createMostData('国创区', 'guoman', 'guochuang'), createMostData('动画区', 'douga', 'douga'), createMostData('音乐区', 'music', 'music'), createMostData('舞蹈区', 'dance', 'dance'), createMostData('游戏区', 'game', 'game'), createMostData('科技区', 'technology', 'technology'), createMostData('生活区', 'life', 'life'), createMostData('鬼畜区', 'kichiku', 'kichiku'), createMostData('时尚区', 'fashion', 'fashion'), createMostData('娱乐区', 'ent', 'ent'), createMostData('电视剧区', 'teleplay', 'teleplay'), createMostData('电影区', 'movie', 'movie'), createMostData('广告区', 'advertise', 'ad')];

			return {
				// 推荐视频数据 Object
				recommendData: null,
				// 正在直播数据 Object
				liveData: null,
				// 番剧更新数据 Object
				bangumiData: null,
				// 其余全部视频版块数据 Object
				mostData: mostData
			};
		},
		componentDidMount: function componentDidMount() {
			var _this = this;

			this.props.loadingChange();

			// 推荐视频数据获取 start
			var recommendDataSuccess = function recommendDataSuccess(data) {
				var recommendData = JSON.parse(data.data).recommend;
				_this.setState({ recommendData: recommendData });
				console.log(recommendData, 'recommendData');
			};
			var recommendDataError = function recommendDataError(error) {
				console.log(error, 'recommendDataError');
			};
			var recommendDataURL = 'http://weizijie.cc:3000/indexRecommend';
			(0, _ajaxRequest2.default)(recommendDataURL, 'GET', recommendDataSuccess, recommendDataError);
			// 推荐视频数据获取 end

			// 正在直播数据获取 start
			try {
				window.jsonpCallBack.getLiveData = function (data) {
					_this.setState({ liveData: data });
					console.log(data, 'liveData');
				};
				var liveDataURL = 'http://api.live.bilibili.com/h5/recommendRooms?callback=jsonpCallBack.getLiveData&_=' + Date.now();
				var getLiveDataScript = (0, _createScriptJsonp2.default)(liveDataURL);
				document.body.removeChild(getLiveDataScript);
			} catch (error) {
				console.log(error, 'liveDataError');
			}
			// 正在直播数据获取 end

			// 番剧更新数据获取 start
			var bangumiDataSuccess = function bangumiDataSuccess(data) {
				var bangumiData = JSON.parse(data.data);
				_this.setState({ bangumiData: bangumiData });
				console.log(bangumiData, 'bangumiData');
			};
			var bangumiDataError = function bangumiDataError(error) {
				console.log(error, 'bangumiDataError');
			};
			var bangumiDataURL = 'http://weizijie.cc:3000/indexBangumi';
			(0, _ajaxRequest2.default)(bangumiDataURL, 'GET', bangumiDataSuccess, bangumiDataError);
			// 番剧更新数据获取 end

			// 其余全部视频数据获取 start
			var mostDataSuccess = function mostDataSuccess(data) {
				var responseMostData = JSON.parse(data.data);
				_this.setState(function () {
					// mostDataItem.dataName 为数据属性名，与响应的数据名对应
					// 将数据根据对应的数据属性名设置为相应的数据，可以看初始化数据mostData里对象的结构
					_this.state.mostData.forEach(function (mostDataItem, index) {
						mostDataItem.data = responseMostData[mostDataItem.dataName];
					});
				});
				console.log(responseMostData, 'responseMostData');
			};
			var mostDataError = function mostDataError(error) {
				console.log(error, 'mostDataError');
			};
			var mostDataURL = 'http://weizijie.cc:3000/indexMost';
			(0, _ajaxRequest2.default)(mostDataURL, 'GET', mostDataSuccess, mostDataError);
			// 其余全部视频数据获取 end
		},
		render: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_RecommendVideoContainer2.default, { recommendData: this.state.recommendData }),
				_react2.default.createElement(_LiveVideoContainer2.default, { liveData: this.state.liveData }),
				_react2.default.createElement(_BangumiVideoContainer2.default, { bangumiData: this.state.bangumiData }),
				this.state.mostData.map(function (mostDataItem, index) {
					return _react2.default.createElement(_DefaultVideoContainer2.default, { mostDataItem: mostDataItem, key: index });
				})
			);
		}
	}); // 番剧更新版块
	// 推荐视频版块
	// ajax请求方法
	exports.default = IndexContent;

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _imgLazyLoad = __webpack_require__(206);

	var _imgLazyLoad2 = _interopRequireDefault(_imgLazyLoad);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RecommendVideoContainer = _react2.default.createClass({
		displayName: 'RecommendVideoContainer',

		componentDidUpdate: function componentDidUpdate() {
			if (this.props.recommendData !== null) {
				(0, _imgLazyLoad2.default)('.content-item div.video-cover');
			}
		},
		render: function render() {

			var recommendData = this.props.recommendData;

			// recommendList是个对象 存放着视频数据
			var recommendList = recommendData === null ? null : recommendData.list;
			// Object.keys 返回该对象属性集合的数组
			var recommendListKey = recommendData === null ? null : Object.keys(recommendList).slice(0, 4);

			return _react2.default.createElement(
				'div',
				{ className: 'main-container' },
				_react2.default.createElement(
					'div',
					{ className: 'cont-head' },
					_react2.default.createElement(
						'a',
						{ href: '###' },
						_react2.default.createElement(
							'div',
							{ className: 'cont-title' },
							_react2.default.createElement('span', { className: 'index-sprite index-sprite-hot' }),
							_react2.default.createElement(
								'p',
								null,
								'\u70ED\u95E8\u63A8\u8350'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'cont-more' },
							_react2.default.createElement('span', { className: 'index-sprite index-sprite-rank' }),
							_react2.default.createElement(
								'p',
								{ className: 'rank-txt' },
								'\u6392\u884C\u699C'
							)
						)
					)
				),
				recommendData === null ? _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6B63\u5728\u52A0\u8F7D...'
				) : _react2.default.createElement(
					'ul',
					{ className: 'content-list' },
					recommendListKey.map(function (recommendKeyItem, index) {
						var recommendItem = recommendList[recommendKeyItem];

						// av号
						var aid = recommendItem.aid;
						// 视频封面
						var pic = recommendItem.pic;
						// 视频标题
						var title = recommendItem.title;
						// 视频播放数
						var playNum = recommendItem.play >= 10000 ? (recommendItem.play / 10000).toFixed(1) + '万' : recommendItem.play;
						// 视频弹幕数
						var barrageNum = recommendItem.video_review >= 10000 ? (recommendItem.video_review / 10000).toFixed(1) + '万' : recommendItem.video_review;

						return _react2.default.createElement(
							'li',
							{ className: 'content-item', key: index },
							_react2.default.createElement(
								'a',
								{ href: 'video.html?aid=' + aid },
								_react2.default.createElement('div', { className: 'video-cover', 'data-img': pic }),
								_react2.default.createElement(
									'p',
									{ className: 'video-name' },
									title
								),
								_react2.default.createElement(
									'div',
									{ className: 'video-info' },
									_react2.default.createElement(
										'div',
										{ className: 'play-num' },
										_react2.default.createElement('span', { className: 'index-sprite index-sprite-play' }),
										_react2.default.createElement(
											'p',
											null,
											playNum
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'barrage-num' },
										_react2.default.createElement('span', { className: 'index-sprite index-sprite-barrage' }),
										_react2.default.createElement(
											'p',
											null,
											barrageNum
										)
									)
								)
							)
						);
					})
				)
			);
		}
	});

	exports.default = RecommendVideoContainer;

/***/ },

/***/ 206:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// 图片懒加载
	function imgLazyLoad(imgBoxSelector, isFadeIn, listBoxSelector, fadeInClass) {

		var imgBoxArray = [].concat(_toConsumableArray(document.querySelectorAll(imgBoxSelector)));
		var isScroll = false; // 让滚动事件执行的少一点
		var removeEventTime = null;

		// ranking排行榜页面用到的列项容器
		var listBox = isFadeIn !== undefined ? document.querySelectorAll(listBoxSelector) : null;

		// 符合条件的图片显示
		var imgShow = function imgShow() {
			imgBoxArray.forEach(function (imgBox, key) {
				// 如果这个图片容器已经插入了图片则退出此次操作
				if (imgBox.innerHTML !== '') {

					// 这个判断是为了排行榜页加的，需要处理一些特殊的地方
					// 排行榜页图片容器会出现已有图片的情况，不需要执行插入图片，但是要将容器显示出来
					if (listBox !== null) {
						listBox[key].classList.add(fadeInClass);
					}

					return;
				}

				var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

				// 排行榜页的图片容器的父元素用了flex属性，导致offsetTop为0，使用父元素的offsetTop
				var showEleOffsetTop = listBox === null ? imgBox.offsetTop : listBox[key].offsetTop;

				// 视口上方因滚动隐藏的区域 + 视口高度 >= 图片离顶部的距离 则可以认为图片出现在视口底部离页面顶部的距离范围内
				// -50意思是判定点为图片顶部再往上50px
				if (scrollTop + window.innerHeight >= showEleOffsetTop - 50) {
					var coverImgUrl = imgBox.getAttribute('data-img');
					var coverImgHtml = '<div class="cover-img" \
										style="background-image: url(' + coverImgUrl + ')" > \
										</div>';
					imgBox.innerHTML = coverImgHtml;

					// ranking排行榜页面用到的列项淡入效果
					if (listBox !== null) {
						listBox[key].classList.add(fadeInClass);
					}

					setTimeout(function () {
						imgBox.firstElementChild.style.opacity = '1';
					}, 50);
				}
			});

			// 图片加载完毕后清除滚动事件
			var imgDisplayComplete = imgBoxArray.every(function (item) {
				return item.innerHTML !== '';
			});
			if (imgDisplayComplete) {
				window.onscroll = undefined;
			}
		};

		// 默认执行一次
		imgShow();

		var scrollHandler = function scrollHandler() {
			if (isScroll === true) {
				return;
			}
			console.log('imgLazyLoad');
			imgShow();
			isScroll = true;

			// 限制100毫秒内最多执行一次
			setTimeout(function () {
				isScroll = false;
			}, 100);
		};

		// 后来再看下面这句没意义，赋值操作已经覆盖了事件
		// window.onscroll = undefined;
		window.onscroll = scrollHandler;
	}

	exports.default = imgLazyLoad;

/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _imgLazyLoad = __webpack_require__(206);

	var _imgLazyLoad2 = _interopRequireDefault(_imgLazyLoad);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LiveVideoContainer = _react2.default.createClass({
		displayName: 'LiveVideoContainer',

		componentDidUpdate: function componentDidUpdate() {
			if (this.props.liveData !== null) {
				(0, _imgLazyLoad2.default)('.content-item div.video-cover');
			}
		},
		render: function render() {

			var liveData = this.props.liveData;

			return _react2.default.createElement(
				'div',
				{ className: 'main-container' },
				_react2.default.createElement(
					'div',
					{ className: 'cont-head' },
					_react2.default.createElement(
						'a',
						{ href: '###' },
						_react2.default.createElement(
							'div',
							{ className: 'cont-title' },
							_react2.default.createElement('span', { className: 'index-sprite index-sprite-live' }),
							_react2.default.createElement(
								'p',
								null,
								'\u6B63\u5728\u76F4\u64AD'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'cont-more' },
							_react2.default.createElement(
								'p',
								null,
								'\u67E5\u770B\u66F4\u591A\u76F4\u64AD'
							),
							_react2.default.createElement('span', { className: 'index-sprite index-sprite-arrow' })
						)
					)
				),
				liveData === null ? _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6B63\u5728\u52A0\u8F7D...'
				) : _react2.default.createElement(
					'ul',
					{ className: 'content-list' },
					liveData.data.map(function (liveItem, index) {

						// 直播封面
						var pic = liveItem.cover;
						// 用户头像
						var face = liveItem.face;
						// 用户名
						var username = liveItem.uname;
						// 直播标题
						var title = liveItem.title;
						// 观看直播人数
						var online = liveItem.online >= 10000 ? (liveItem.online / 10000).toFixed(1) + '万' : liveItem.online;
						// 直播房间id
						var roomid = liveItem.roomid;

						return _react2.default.createElement(
							'li',
							{ className: 'content-item', key: index },
							_react2.default.createElement(
								'a',
								{ href: 'http://live.bilibili.com/h5/' + roomid },
								_react2.default.createElement('div', { className: 'video-cover', 'data-img': pic }),
								_react2.default.createElement(
									'div',
									{ className: 'user' },
									_react2.default.createElement(
										'div',
										{ className: 'face' },
										_react2.default.createElement('img', { src: face, alt: username })
									),
									_react2.default.createElement(
										'p',
										{ className: 'name text-overflow' },
										username
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'user' },
									_react2.default.createElement(
										'div',
										{ className: 'online' },
										online
									),
									_react2.default.createElement(
										'p',
										{ className: 'intro text-overflow' },
										title
									)
								)
							)
						);
					})
				)
			);
		}
	});

	exports.default = LiveVideoContainer;

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _imgLazyLoad = __webpack_require__(206);

	var _imgLazyLoad2 = _interopRequireDefault(_imgLazyLoad);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BangumiVideoContainer = _react2.default.createClass({
		displayName: 'BangumiVideoContainer',

		componentDidUpdate: function componentDidUpdate() {
			if (this.props.liveData !== null) {
				(0, _imgLazyLoad2.default)('.content-item div.video-cover');
			}
		},
		render: function render() {

			var bangumiData = this.props.bangumiData;

			var bangumiList = bangumiData === null ? null : bangumiData.list.slice(0, 6);

			return _react2.default.createElement(
				'div',
				{ className: 'main-container' },
				_react2.default.createElement(
					'div',
					{ className: 'cont-head' },
					_react2.default.createElement(
						'a',
						{ href: '###' },
						_react2.default.createElement(
							'div',
							{ className: 'cont-title' },
							_react2.default.createElement('span', { className: 'index-sprite index-sprite-bangumi' }),
							_react2.default.createElement(
								'p',
								null,
								'\u756A\u5267\u66F4\u65B0'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'cont-more' },
							_react2.default.createElement(
								'p',
								null,
								'\u67E5\u770B\u66F4\u591A\u756A\u5267'
							),
							_react2.default.createElement('span', { className: 'index-sprite index-sprite-arrow' })
						)
					)
				),
				bangumiData === null ? _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6B63\u5728\u52A0\u8F7D...'
				) : _react2.default.createElement(
					'ul',
					{ className: 'content-list' },
					bangumiList.map(function (bangumiItem, index) {

						// 番剧封面
						var cover = bangumiItem.cover;
						// 番剧标题
						var title = bangumiItem.title;
						// 番剧更新至第几话
						var updateTo = bangumiItem.bgmcount;

						return _react2.default.createElement(
							'li',
							{ className: 'content-item bangumi-item', key: index },
							_react2.default.createElement(
								'a',
								{ href: '###' },
								_react2.default.createElement('div', { className: 'video-cover', 'data-img': cover }),
								_react2.default.createElement(
									'p',
									{ className: 'bangumi-name text-overflow' },
									title
								),
								_react2.default.createElement(
									'p',
									{ className: 'bangumi-update-to text-overflow' },
									'\u66F4\u65B0\u81F3\u7B2C',
									updateTo,
									'\u8BDD'
								)
							)
						);
					})
				)
			);
		}
	});

	exports.default = BangumiVideoContainer;

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _imgLazyLoad = __webpack_require__(206);

	var _imgLazyLoad2 = _interopRequireDefault(_imgLazyLoad);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefaultVideoContainer = _react2.default.createClass({
		displayName: 'DefaultVideoContainer',

		render: function render() {

			var mostDataItem = this.props.mostDataItem;

			// 该视频版块标题
			var partTitle = mostDataItem.title;
			// 该视频版块的图标class
			var partIconName = mostDataItem.iconName;
			// 该视频版块的视频数据
			var partData = mostDataItem.data;

			return _react2.default.createElement(
				'div',
				{ className: 'main-container' },
				_react2.default.createElement(
					'div',
					{ className: 'cont-head' },
					_react2.default.createElement(
						'a',
						{ href: '###' },
						_react2.default.createElement(
							'div',
							{ className: 'cont-title' },
							_react2.default.createElement('span', { className: 'index-sprite index-sprite-' + partIconName }),
							_react2.default.createElement(
								'p',
								null,
								partTitle
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'cont-more' },
							_react2.default.createElement(
								'p',
								null,
								'\u67E5\u770B\u66F4\u591A\u66F4\u65B0'
							),
							_react2.default.createElement('span', { className: 'index-sprite index-sprite-arrow' })
						)
					)
				),
				partData === null ? _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6B63\u5728\u52A0\u8F7D...'
				) : _react2.default.createElement(
					'ul',
					{ className: 'content-list' },
					partData.slice(0, 4).map(function (partDataItem, index) {

						// av号
						var aid = partDataItem.aid;
						// 视频封面
						var pic = partDataItem.pic;
						// 视频标题
						var title = partDataItem.title;
						// 播放数
						var playNum = partDataItem.stat.view >= 10000 ? (partDataItem.stat.view / 10000).toFixed(1) + '万' : partDataItem.stat.view;
						// 弹幕数
						var barrageNum = partDataItem.stat.danmaku >= 10000 ? (partDataItem.stat.danmaku / 10000).toFixed(1) + '万' : partDataItem.stat.danmaku;

						return _react2.default.createElement(
							'li',
							{ className: 'content-item', key: index },
							_react2.default.createElement(
								'a',
								{ href: 'video.html?aid=' + aid },
								_react2.default.createElement('div', { className: 'video-cover', 'data-img': pic }),
								_react2.default.createElement(
									'p',
									{ className: 'video-name' },
									title
								),
								_react2.default.createElement(
									'div',
									{ className: 'video-info' },
									_react2.default.createElement(
										'div',
										{ className: 'play-num' },
										_react2.default.createElement('span', { className: 'index-sprite index-sprite-play' }),
										_react2.default.createElement(
											'p',
											null,
											playNum
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'barrage-num' },
										_react2.default.createElement('span', { className: 'index-sprite index-sprite-barrage' }),
										_react2.default.createElement(
											'p',
											null,
											barrageNum
										)
									)
								)
							)
						);
					})
				)
			);
		}
	});

	exports.default = DefaultVideoContainer;

/***/ }

});