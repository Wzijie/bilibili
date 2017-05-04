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

	var _Footer = __webpack_require__(194);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _AppLink = __webpack_require__(196);

	var _AppLink2 = _interopRequireDefault(_AppLink);

	var _LoadCover = __webpack_require__(198);

	var _LoadCover2 = _interopRequireDefault(_LoadCover);

	var _InitialSearch = __webpack_require__(199);

	var _InitialSearch2 = _interopRequireDefault(_InitialSearch);

	var _SearchContent = __webpack_require__(223);

	var _SearchContent2 = _interopRequireDefault(_SearchContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 存放全局jsonp回调函数
	// 根据屏幕宽度改变根节点的fontsize值remAdaptation.js

	// 组件
	window.jsonpCallBack = {};

	(0, _setRootFontsize2.default)();

	var Root = _react2.default.createClass({
		displayName: 'Root',

		getInitialState: function getInitialState() {
			return {
				loading: true,
				// 搜索面板是否显示
				initialSearchDisplay: false
			};
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
				_react2.default.createElement(_SearchContent2.default, { loadingChange: this.loadingChange }),
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

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _SearchOperation = __webpack_require__(200);

	var _SearchOperation2 = _interopRequireDefault(_SearchOperation);

	var _HotSearch = __webpack_require__(201);

	var _HotSearch2 = _interopRequireDefault(_HotSearch);

	var _HistorySearch = __webpack_require__(202);

	var _HistorySearch2 = _interopRequireDefault(_HistorySearch);

	var _SearchSuggest = __webpack_require__(203);

	var _SearchSuggest2 = _interopRequireDefault(_SearchSuggest);

	var _ajaxRequest = __webpack_require__(204);

	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);

	var _createScriptJsonp = __webpack_require__(205);

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

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

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

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

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

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

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

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

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

/***/ 204:
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

/***/ 205:
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

/***/ 212:
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

/***/ 221:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function navRoll(navSelector) {
		var nav = document.querySelector(navSelector);

		// 同一个元素只能执行一次
		if (nav.isExecute === true) {
			return;
		}
		nav.isExecute = true;

		nav.addEventListener('click', function (event) {
			if (event.target.nodeName !== 'LI' && event.target.nodeName !== 'A') {
				return;
			}
			// 获取li
			var navList = event.target.nodeName === 'A' ? event.target.parentNode : event.target;
			// li的宽度
			var navListWidth = navList.parentNode.children[0].offsetWidth;

			// 第一个li不需要进行偏移
			if (navList.offsetLeft !== 0) {
				// 偏移值 = 当前li的offsetLeft - li的宽度
				var navOffsetLeft = navList.offsetLeft - navListWidth;
				// 最大偏移值为总宽度减去显示宽度
				var maxOffsetLeft = nav.lastElementChild.offsetLeft + nav.lastElementChild.offsetWidth - document.body.offsetWidth;
				// 超出则设为最大偏移值
				if (navOffsetLeft >= maxOffsetLeft) {
					navOffsetLeft = maxOffsetLeft;
				}
				nav.style.transform = 'translateX(-' + navOffsetLeft + 'px)';
			}

			Array.from(nav.children).forEach(function (list) {
				list.classList.remove('on');
			});
			navList.classList.add('on');
		});
	}

	exports.default = navRoll;

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _SearchNav = __webpack_require__(224);

	var _SearchNav2 = _interopRequireDefault(_SearchNav);

	var _SearchFilterChannel = __webpack_require__(225);

	var _SearchFilterChannel2 = _interopRequireDefault(_SearchFilterChannel);

	var _SearchFilterOrder = __webpack_require__(226);

	var _SearchFilterOrder2 = _interopRequireDefault(_SearchFilterOrder);

	var _SearchResult = __webpack_require__(227);

	var _SearchResult2 = _interopRequireDefault(_SearchResult);

	var _ajaxRequest = __webpack_require__(204);

	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 排序筛选菜单
	// 类型筛选菜单
	var SearchContent = _react2.default.createClass({
		displayName: 'SearchContent',


		getInitialState: function getInitialState() {

			// 获取查询字符keyword
			// 首先将字符串以&分成数组
			var searchStr = location.search.slice(1).split('&');
			var keyword = null;
			searchStr.forEach(function (searchItem, index) {
				if (keyword !== null) {
					return;
				}
				// 拿到=号前面的key值，key=value
				var searchKey = searchItem.slice(0, searchItem.indexOf('='));
				// 找到key值为keyword的value
				if (searchKey === 'keyword') {
					keyword = searchItem.slice(searchItem.indexOf('=') + 1);
				}
			});

			// 创建筛选数据
			function createSearchNavData(title, filterName) {
				return {
					// 标题
					title: title,
					// 筛选关键字
					filterName: filterName
				};
			}

			// 搜索类型数据
			var searchNavData = [createSearchNavData('综合', 'video'), createSearchNavData('番剧', 'series'), createSearchNavData('专题', 'special'), createSearchNavData('UP主', 'upuser')];

			// 版块筛选数据
			var filterChannel = [createSearchNavData('全部', '-1'), createSearchNavData('动画', '1'), createSearchNavData('番剧', '33'), createSearchNavData('国创', '167'), createSearchNavData('舞蹈', '20'), createSearchNavData('游戏', '4'), createSearchNavData('科技', '36'), createSearchNavData('生活', '160'), createSearchNavData('娱乐', '5'), createSearchNavData('鬼畜', '119'), createSearchNavData('电影', '23'), createSearchNavData('时尚', '155'), createSearchNavData('电视剧', '11')];

			// 排序方式数据
			var filterOrder = [createSearchNavData('综合', 'default'), createSearchNavData('点击', 'click'), createSearchNavData('弹幕', 'dm'), createSearchNavData('评论', 'scores'), createSearchNavData('日期', 'senddate'), createSearchNavData('收藏', 'stow')];

			return {
				// 搜索类型数据
				searchNavData: searchNavData,
				// 版块筛选数据
				filterChannel: filterChannel,
				// 排序筛选数据
				filterOrder: filterOrder,
				// 搜索关键字
				keyword: keyword,
				// 当前搜索类型选择
				type: 'video',
				// 当前版块筛选选择
				channel: '-1',
				// 当前排序筛选选择
				order: 'default',
				// page控制第几批数据
				page: 1,
				// 请求过的搜索结果保存
				searchResultStorage: {},
				// 当前搜索结果 Array
				currentSearchResult: null
			};
		},

		componentDidMount: function componentDidMount() {

			this.props.loadingChange();

			// 执行默认搜索请求
			this.requestSearchResult();

			// 将搜索关键字存入本地储存localStorage
			var historySearch = localStorage.getItem('historySearch');
			historySearch = historySearch === null ? [] : JSON.parse(historySearch);
			if (this.state.keyword !== null) {
				// 如果已经有该关键字则删除
				var historyHaveKeyword = historySearch.indexOf(decodeURI(this.state.keyword));
				if (historyHaveKeyword !== -1) {
					historySearch.splice(historyHaveKeyword, 1);
				}
				// 在数组头部添加关键字
				historySearch.unshift(decodeURI(this.state.keyword));
				// 数据大于5只取前5条数据
				if (historySearch.length >= 5) {
					historySearch = historySearch.slice(0, 5);
				}
				localStorage.setItem('historySearch', JSON.stringify(historySearch));
			}
		},

		// 请求搜索结果 参数为筛选数据
		requestSearchResult: function requestSearchResult(type, channel, order, page) {
			var _this = this;

			var _state = this.state,
			    keyword = _state.keyword,
			    searchResultStorage = _state.searchResultStorage;

			// 如果没有传筛选数据参数则取state中的

			var type = type || this.state.type;
			var channel = channel || this.state.channel;
			var order = order || this.state.order;
			var page = page || this.state.page;

			// filterName用于作为属性名保存当前搜索结果数据到searchResultStorage中
			var filterName = type + channel + order;

			this.setState({ currentSearchResult: null });

			// 如果该搜索结果数据已经存在，直接使用该数据，退出函数
			if (searchResultStorage[filterName] !== undefined) {
				// 设置一个ready属性标记该数据为已经存在的
				searchResultStorage[filterName].ready = true;
				// 直接使用该数据设置为当前搜索结果
				this.setState({
					currentSearchResult: searchResultStorage[filterName],
					type: type,
					channel: channel,
					order: order,
					page: page
				});
				return;
			}

			// 请求搜索结果
			var searchResultSuccess = function searchResultSuccess(data) {
				console.log(JSON.parse(data.data), 'searchResultSuccess');
				var data = JSON.parse(data.data);
				var searchResult = null;
				// 根据type的不同，数据存在于不同的属性名中
				switch (type) {
					case 'video':
						searchResult = data.res.result || [];
						break;
					case 'series':
						searchResult = data.tp_res.result || [];
						break;
					case 'special':
						searchResult = data.sp_res.result || [];
						break;
					case 'upuser':
						searchResult = data.up_res.result || [];
						break;
					default:
						break;
				}
				// 将搜索结果保存
				searchResultStorage[filterName] = searchResult;
				_this.setState({
					currentSearchResult: searchResult,
					type: type,
					channel: channel,
					order: order,
					page: page
				});
			};
			var searchResultError = function searchResultError(error) {
				console.log(error, 'searchResultError');
			};
			var searchResultURL = 'http://weizijie.cc:3000/search?keyword=' + keyword + '&page=' + page + '&order=' + order + '&tids=' + channel + '&type=' + type;
			(0, _ajaxRequest2.default)(searchResultURL, 'GET', searchResultSuccess, searchResultError);
		},

		render: function render() {

			if (this.state.keyword === null) {
				return _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u83B7\u53D6\u4E0D\u5230\u201Ckeyword\u201D\u67E5\u8BE2\u5B57\u7B26'
				);
			}

			var typeIsVideo = this.state.type === 'video' ? true : false;

			return _react2.default.createElement(
				'div',
				{ className: 'search-content' },
				_react2.default.createElement(_SearchNav2.default, { searchNavData: this.state.searchNavData, requestSearchResult: this.requestSearchResult, typeIsVideo: typeIsVideo }),
				typeIsVideo ? _react2.default.createElement(
					'div',
					{ className: 'filter-container' },
					_react2.default.createElement(_SearchFilterChannel2.default, { filterChannel: this.state.filterChannel, requestSearchResult: this.requestSearchResult }),
					_react2.default.createElement(_SearchFilterOrder2.default, { filterOrder: this.state.filterOrder, requestSearchResult: this.requestSearchResult })
				) : '',
				_react2.default.createElement(_SearchResult2.default, { currentSearchResult: this.state.currentSearchResult, searchType: this.state.type })
			);
		}
	}); // 搜索结果显示

	// 版块筛选菜单
	exports.default = SearchContent;

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchNav = _react2.default.createClass({
		displayName: 'SearchNav',

		getInitialState: function getInitialState() {
			// typeIsVideo 搜索类型是否是‘video’
			return { typeIsVideo: this.props.typeIsVideo };
		},

		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			this.setState({ typeIsVideo: nextProps.typeIsVideo });
		},

		searchNavClickHandler: function searchNavClickHandler(type) {
			var _this = this;

			return function (event) {
				// search-nav li 点击后添加选中class
				var navList = Array.from(event.currentTarget.parentNode.children).slice(0, -1);
				navList.forEach(function (navItem) {
					navItem.classList.remove('menu-active');
				});
				event.currentTarget.classList.add('menu-active');

				// 请求搜索结果
				_this.props.requestSearchResult(type, '-1', 'default');
			};
		},

		// 切换filter-container筛选容器的显示隐藏
		filterBtnClick: function filterBtnClick(event) {
			var filterIcon = event.currentTarget.firstElementChild;
			var filterContainer = document.querySelector('.filter-container');
			if (this.state.typeIsVideo) {
				filterIcon.classList.add('on');
				filterContainer.classList.add('show');
			} else {
				filterIcon.classList.remove('on');
				filterContainer.classList.remove('show');
			}
			this.setState({ typeIsVideo: !this.state.typeIsVideo });
		},

		render: function render() {
			var _this2 = this;

			var searchNavData = this.props.searchNavData;

			return _react2.default.createElement(
				'nav',
				{ className: 'search-nav menu' },
				_react2.default.createElement(
					'ul',
					{ className: 'menu-list' },
					searchNavData.map(function (searchNavItem, index) {

						// 标题，筛选关键字
						var title = searchNavItem.title,
						    filterName = searchNavItem.filterName;


						var firstListClass = index === 0 ? 'menu-active' : '';

						return _react2.default.createElement(
							'li',
							{ className: firstListClass, key: index, onClick: _this2.searchNavClickHandler(filterName) },
							_react2.default.createElement(
								'a',
								null,
								title
							)
						);
					}),
					this.props.typeIsVideo ? _react2.default.createElement(
						'li',
						{ className: 'filter-btn', onClick: this.filterBtnClick },
						_react2.default.createElement('i', { className: 'filter-icon' })
					) : _react2.default.createElement('li', null)
				)
			);
		}
	});

	exports.default = SearchNav;

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _navRoll = __webpack_require__(221);

	var _navRoll2 = _interopRequireDefault(_navRoll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchFilterChannel = _react2.default.createClass({
		displayName: 'SearchFilterChannel',


		componentDidMount: function componentDidMount() {
			(0, _navRoll2.default)('.channel-filter .roll-list');
		},

		changeFilter: function changeFilter(channel) {
			var _this = this;

			return function () {
				_this.props.requestSearchResult(undefined, channel);
			};
		},

		render: function render() {
			var _this2 = this;

			var filterChannel = this.props.filterChannel;

			return _react2.default.createElement(
				'nav',
				{ className: 'search-filter rank-nav channel-filter' },
				_react2.default.createElement(
					'ul',
					{ className: 'roll-list' },
					filterChannel.map(function (filterChannelItem, index) {

						// 标题，筛选关键字
						var title = filterChannelItem.title,
						    filterName = filterChannelItem.filterName;


						var firstListClass = index === 0 ? 'on' : '';

						return _react2.default.createElement(
							'li',
							{ className: firstListClass, key: index, onClick: _this2.changeFilter(filterName) },
							_react2.default.createElement(
								'a',
								null,
								title
							)
						);
					})
				)
			);
		}
	});

	exports.default = SearchFilterChannel;

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _navRoll = __webpack_require__(221);

	var _navRoll2 = _interopRequireDefault(_navRoll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchFilterChannel = _react2.default.createClass({
		displayName: 'SearchFilterChannel',


		componentDidMount: function componentDidMount() {
			(0, _navRoll2.default)('.order-filter .roll-list');
		},

		changeFilter: function changeFilter(order) {
			var _this = this;

			return function () {
				_this.props.requestSearchResult(undefined, undefined, order);
			};
		},

		render: function render() {
			var _this2 = this;

			var filterOrder = this.props.filterOrder;

			return _react2.default.createElement(
				'nav',
				{ className: 'search-filter rank-nav order-filter' },
				_react2.default.createElement(
					'ul',
					{ className: 'roll-list' },
					filterOrder.map(function (filterOrderItem, index) {

						// 标题，筛选关键字
						var title = filterOrderItem.title,
						    filterName = filterOrderItem.filterName;


						var firstListClass = index === 0 ? 'on' : '';

						return _react2.default.createElement(
							'li',
							{ className: firstListClass, key: index, onClick: _this2.changeFilter(filterName) },
							_react2.default.createElement(
								'a',
								null,
								title
							)
						);
					})
				)
			);
		}
	});

	exports.default = SearchFilterChannel;

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _imgLazyLoad = __webpack_require__(212);

	var _imgLazyLoad2 = _interopRequireDefault(_imgLazyLoad);

	var _ComprehensiveResult = __webpack_require__(228);

	var _ComprehensiveResult2 = _interopRequireDefault(_ComprehensiveResult);

	var _BangumiSpecialResult = __webpack_require__(229);

	var _BangumiSpecialResult2 = _interopRequireDefault(_BangumiSpecialResult);

	var _UpuserResult = __webpack_require__(230);

	var _UpuserResult2 = _interopRequireDefault(_UpuserResult);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// up主搜索结果

	// 综合搜索结果
	var SearchResult = _react2.default.createClass({
		displayName: 'SearchResult',

		componentDidUpdate: function componentDidUpdate() {
			if (this.props.currentRankingData !== null) {
				(0, _imgLazyLoad2.default)('.cover-box', true, '.list-box', 'fade-in');
			}
		},
		render: function render() {

			var currentSearchResult = this.props.currentSearchResult;
			var type = this.props.searchType;

			if (currentSearchResult === null) {
				return _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6B63\u5728\u52A0\u8F7D...'
				);
			}
			if (currentSearchResult.length === 0) {
				return _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u6CA1\u6709\u6570\u636E...'
				);
			}

			// 根据type的不同选择不同的显示组件
			function TypeFilterResult() {
				switch (type) {
					case 'video':
						return _react2.default.createElement(_ComprehensiveResult2.default, { currentSearchResult: currentSearchResult });
					case 'series':
						return _react2.default.createElement(_BangumiSpecialResult2.default, { currentSearchResult: currentSearchResult, searchType: type });
					case 'special':
						return _react2.default.createElement(_BangumiSpecialResult2.default, { currentSearchResult: currentSearchResult, searchType: type });
					case 'upuser':
						return _react2.default.createElement(_UpuserResult2.default, { currentSearchResult: currentSearchResult });
					default:
						return _react2.default.createElement(
							'p',
							{ className: 'loading-info' },
							'\u672A\u77E5\u72B6\u51B5...'
						);
				}
			}

			return _react2.default.createElement(TypeFilterResult, null);
		}
	}); // 番剧和专题搜索结果
	exports.default = SearchResult;

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ComprehensiveResult = _react2.default.createClass({
		displayName: 'ComprehensiveResult',

		render: function render() {

			var currentSearchResult = this.props.currentSearchResult;

			return _react2.default.createElement(
				'ul',
				{ className: 'search-result rank-list' },
				currentSearchResult.map(function (searchResultItem, index) {

					// av号
					var aid = searchResultItem.aid;
					// 用户名
					var username = searchResultItem.author;
					// 视频封面
					var pic = searchResultItem.pic;
					// 视频标题
					var title = searchResultItem.title;
					// 播放数
					var playNum = searchResultItem.play >= 10000 ? (searchResultItem.play / 10000).toFixed(1) + '万' : searchResultItem.play;
					// 弹幕数
					var barrageNum = searchResultItem.video_review >= 10000 ? (searchResultItem.video_review / 10000).toFixed(1) + '万' : searchResultItem.video_review;
					// 视频长度
					var duration = searchResultItem.duration;

					return _react2.default.createElement(
						'li',
						{ key: index },
						_react2.default.createElement(
							'a',
							{ href: 'video.html?aid=' + aid, className: 'list-box' },
							_react2.default.createElement(
								'div',
								{ className: 'video-cover' },
								_react2.default.createElement(
									'div',
									{ className: 'cover-box', 'data-img': pic },

									// 如果当前的数据已经加载过保存起来了，就将图片显示出来
									// 如果是新的数据则依靠懒加载滚动将图片插入
									currentSearchResult.ready === true ? _react2.default.createElement('div', { className: 'cover-img', style: { 'backgroundImage': 'url("' + pic + '")', 'opacity': '1' } }) : ''
								),
								_react2.default.createElement(
									'span',
									{ className: 'video-duration' },
									duration
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'video-info' },
								_react2.default.createElement(
									'div',
									{ className: 'video-title' },
									title
								),
								_react2.default.createElement(
									'div',
									{ className: 'video-detaied' },
									_react2.default.createElement('img', { className: 'icon-detaied', src: './src/image/ranking/ico_up.png' }),
									_react2.default.createElement(
										'span',
										null,
										username
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'video-detaied' },
									_react2.default.createElement(
										'div',
										{ className: 'play-danmu' },
										_react2.default.createElement('img', { className: 'icon-detaied', src: './src/image/ranking/ico_play.png' }),
										_react2.default.createElement(
											'span',
											null,
											playNum
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'play-danmu' },
										_react2.default.createElement('img', { className: 'icon-detaied', src: './src/image/ranking/ico_danmu.png' }),
										_react2.default.createElement(
											'span',
											null,
											barrageNum
										)
									)
								)
							)
						)
					);
				})
			);
		}
	});

	exports.default = ComprehensiveResult;

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BangumiSpecialResult = _react2.default.createClass({
		displayName: 'BangumiSpecialResult',

		render: function render() {

			var currentSearchResult = this.props.currentSearchResult;
			var type = this.props.searchType;
			var videoSign = type === 'series' ? '番剧' : '专题';

			return _react2.default.createElement(
				'ul',
				{ className: 'search-result rank-list other-result' },
				currentSearchResult.map(function (searchResultItem, index) {

					// 视频封面
					var pic = searchResultItem.pic;
					// 视频标题 返回内容有html标签，替换掉有可能存在的script标签
					var title = searchResultItem.title.replace(/\<script/g, '<!--').replace(/\<\/script\>/g, '-->');
					// 播放数
					var playNum = searchResultItem.click >= 10000 ? (searchResultItem.click / 10000).toFixed(1) + '万' : searchResultItem.click;
					// 视频数
					var videoNum = type === 'series' ? searchResultItem.bgmcount : searchResultItem.count;
					// 视频描述
					var description = searchResultItem.description.replace(/\<script/g, '<!--').replace(/\<\/script\>/g, '-->');;

					return _react2.default.createElement(
						'li',
						{ key: index },
						_react2.default.createElement(
							'a',
							{ href: '###', className: 'list-box' },
							_react2.default.createElement(
								'div',
								{ className: 'video-cover' },
								_react2.default.createElement(
									'div',
									{ className: 'cover-box', 'data-img': pic },

									// 如果当前的数据已经加载过保存起来了，就将图片显示出来
									// 如果是新的数据则依靠懒加载滚动将图片插入
									currentSearchResult.ready === true ? _react2.default.createElement('div', { className: 'cover-img', style: { 'backgroundImage': 'url("' + pic + '")', 'opacity': '1' } }) : ''
								),
								_react2.default.createElement(
									'span',
									{ className: 'video-duration video-sign' },
									videoSign
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'video-info' },
								_react2.default.createElement('div', { className: 'video-title', dangerouslySetInnerHTML: { __html: title } }),
								_react2.default.createElement(
									'div',
									{ className: 'video-detaied' },
									_react2.default.createElement(
										'div',
										{ className: 'play-danmu' },
										_react2.default.createElement(
											'span',
											null,
											'\u89C6\u9891\uFF1A',
											videoNum
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'play-danmu' },
										_react2.default.createElement('img', { className: 'icon-detaied', src: './src/image/ranking/ico_play.png' }),
										_react2.default.createElement(
											'span',
											null,
											playNum
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'video-detaied video-description' },
									_react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: description } })
								)
							)
						)
					);
				})
			);
		}
	});

	exports.default = BangumiSpecialResult;

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UpuserResult = _react2.default.createClass({
		displayName: 'UpuserResult',

		render: function render() {

			var currentSearchResult = this.props.currentSearchResult;

			return _react2.default.createElement(
				'ul',
				{ className: 'search-result rank-list other-result' },
				currentSearchResult.map(function (searchResultItem, index) {

					// 用户名
					var username = searchResultItem.uname;
					// 用户封面
					var pic = searchResultItem.upic;
					// 视频数
					var videoNum = searchResultItem.videos;
					// 用户描述
					var description = searchResultItem.usign.replace(/\<script/g, '<!--').replace(/\<\/script\>/g, '-->');;

					return _react2.default.createElement(
						'li',
						{ key: index },
						_react2.default.createElement(
							'a',
							{ href: '###', className: 'list-box' },
							_react2.default.createElement(
								'div',
								{ className: 'video-cover' },
								_react2.default.createElement(
									'div',
									{ className: 'cover-box', 'data-img': pic },

									// 如果当前的数据已经加载过保存起来了，就将图片显示出来
									// 如果是新的数据则依靠懒加载滚动将图片插入
									currentSearchResult.ready === true ? _react2.default.createElement('div', { className: 'cover-img', style: { 'backgroundImage': 'url("' + pic + '")', 'opacity': '1' } }) : ''
								),
								_react2.default.createElement(
									'span',
									{ className: 'video-duration video-sign' },
									'up\u4E3B'
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'video-info' },
								_react2.default.createElement(
									'div',
									{ className: 'video-title' },
									username
								),
								_react2.default.createElement(
									'div',
									{ className: 'video-detaied' },
									_react2.default.createElement(
										'div',
										{ className: 'play-danmu' },
										_react2.default.createElement(
											'span',
											null,
											'\u89C6\u9891\uFF1A',
											videoNum
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'video-detaied video-description' },
									_react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: description } })
								)
							)
						)
					);
				})
			);
		}
	});

	exports.default = UpuserResult;

/***/ }

});