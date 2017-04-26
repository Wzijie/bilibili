webpackJsonp([6],{

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

	var _LoadCover = __webpack_require__(198);

	var _LoadCover2 = _interopRequireDefault(_LoadCover);

	var _AppLink = __webpack_require__(196);

	var _AppLink2 = _interopRequireDefault(_AppLink);

	var _VideoContent = __webpack_require__(220);

	var _VideoContent2 = _interopRequireDefault(_VideoContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 存放全局jsonp回调函数
	window.jsonpCallBack = {};
	// 主要内容组件


	(0, _setRootFontsize2.default)();

	var Root = _react2.default.createClass({
		displayName: 'Root',

		getInitialState: function getInitialState() {
			return { loading: true };
		},
		loadingChange: function loadingChange() {
			this.setState({ loading: false });
		},
		render: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Header2.default, null),
				_react2.default.createElement(_LoadCover2.default, { loading: this.state.loading }),
				_react2.default.createElement(_VideoContent2.default, { loadendChange: this.loadingChange }),
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

/***/ 201:
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

/***/ 208:
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

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _VideoContainer = __webpack_require__(221);

	var _VideoContainer2 = _interopRequireDefault(_VideoContainer);

	var _RecommendComment = __webpack_require__(222);

	var _RecommendComment2 = _interopRequireDefault(_RecommendComment);

	var _VideoIntro = __webpack_require__(225);

	var _VideoIntro2 = _interopRequireDefault(_VideoIntro);

	var _VideoOption = __webpack_require__(226);

	var _VideoOption2 = _interopRequireDefault(_VideoOption);

	var _VideoPart = __webpack_require__(227);

	var _VideoPart2 = _interopRequireDefault(_VideoPart);

	var _VideoTag = __webpack_require__(228);

	var _VideoTag2 = _interopRequireDefault(_VideoTag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 视频标签


	// 视频操作菜单，单纯布局
	// 推荐视频及评论
	var VideoContent = _react2.default.createClass({
		displayName: 'VideoContent',

		getInitialState: function getInitialState() {
			// 获取查询字符aid
			// 首先将字符串以&分成数组
			var searchStr = location.search.slice(1).split('&');
			var aid = null;
			searchStr.forEach(function (searchItem, index) {
				if (aid !== null) {
					return;
				}
				// 拿到=号前面的key值，key=value
				var searchKey = searchItem.slice(0, searchItem.indexOf('='));
				// 找到key值为aid的value
				if (searchKey === 'aid') {
					aid = parseInt(searchItem.slice(searchItem.indexOf('=') + 1));
				}
			});
			return {
				// 当前分p默认是1
				videoPage: 1,
				aid: aid
			};
		},
		componentDidMount: function componentDidMount() {
			this.props.loadendChange();
			document.title = 'av' + this.state.aid;
		},

		// 传递给partlist的方法，点击后改成对应的分p数
		changeVideoPage: function changeVideoPage(page) {
			this.setState({ videoPage: page });
		},
		render: function render() {

			console.log(this.state.aid, 'aid');
			var aid = this.state.aid;

			if (aid === null) {
				return _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u83B7\u53D6\u4E0D\u5230"aid"\u67E5\u8BE2\u5B57\u7B26'
				);
			}

			if (aid === '' || isNaN(aid)) {
				return _react2.default.createElement(
					'p',
					{ className: 'loading-info' },
					'\u83B7\u53D6\u4E0D\u5230"aid"\u67E5\u8BE2\u5B57\u7B26\u6709\u6548\u7684\u503C'
				);
			}

			return _react2.default.createElement(
				'div',
				{ className: 'video-content' },
				_react2.default.createElement(_VideoContainer2.default, { avNum: aid, videoPage: this.state.videoPage }),
				_react2.default.createElement(_VideoOption2.default, null),
				_react2.default.createElement(_VideoIntro2.default, { avNum: aid }),
				_react2.default.createElement(_VideoPart2.default, { avNum: aid, videoPage: this.state.videoPage, changeVideoPage: this.changeVideoPage }),
				_react2.default.createElement(_RecommendComment2.default, { avNum: aid }),
				_react2.default.createElement(_VideoTag2.default, { avNum: aid })
			);
		}
	}); // 视频分p
	// 视频信息
	// 播放器
	exports.default = VideoContent;

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _createScriptJsonp = __webpack_require__(201);

	var _createScriptJsonp2 = _interopRequireDefault(_createScriptJsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoContainer = _react2.default.createClass({
		displayName: 'VideoContainer',

		getInitialState: function getInitialState() {
			return {
				// 视频数据 Object
				playerData: null,
				// 播放器是否加载 首次点击封面后才会显示播放器内容
				playerLoad: false,
				// 播放器是否暂停
				paused: true,
				// 播放器控制面板是否显示
				controlShow: false,
				// 储存控制播放器隐藏的定时器ID
				controlShowTimeout: null,
				// 进度条是否在拖动中
				isProgressTouchMove: false,
				// 视频播放出错的错误代码
				errorCode: null,
				// 弹幕数据 Array
				barrageData: null
			};
		},
		componentDidMount: function componentDidMount() {
			var _this = this;

			// 本来在思考全局函数getPlayerData怎么改变react组件内部的数据
			// 然后直接写在window上也可以...
			// 但是还不知道外部如何改变内部的数据
			// 如vue的话可以 component.data = data; 修改数据
			// 回调函数名有'.'出现的话，首次获取会出错
			// 本来打算将jsonp的回调函数全部写在一个对象里
			window.getPlayerData = function (data) {
				console.log(data, 'playerData');
				if (data.message) {
					_this.setState({ playerData: data.message });
				} else {
					_this.setState({ playerData: data });
				}
			};
			this.getPlayerDataHandler(this.props.videoPage);
		},

		// 在接受到的videoPage改变时重新请求视频数据(更换part时)
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			if (this.state.playerData === null) {
				return;
			}
			console.log('componentWillReceiveProps');

			// 视频暂停
			this.refs.player.pause();
			// 清除执行控制面板显示隐藏的定时器
			clearTimeout(this.state.controlShowTimeout);
			// 数据初始化
			this.setState({
				playerData: null,
				playerLoad: false,
				paused: true,
				controlShow: false,
				controlShowTimeout: null,
				isProgressTouchMove: false,
				errorCode: null
			});
			// 根据新的分p数执行jsonp请求
			this.getPlayerDataHandler(nextProps.videoPage);
		},

		// jsonp请求方法
		// page：分p数
		getPlayerDataHandler: function getPlayerDataHandler(page) {
			var avNum = this.props.avNum;
			var getPlayerDataSrc = 'http://api.bilibili.com/playurl?callback=getPlayerData&aid=' + avNum + '&page=' + page + '&platform=html5&quality=1&vtype=mp4&type=jsonp&token=fb4ddc7a1b10ee45bd962f2833c453c2&_=' + Date.now();
			// 如何处理返回错误的数据报错
			try {
				var getPlayerDataScriptEle = (0, _createScriptJsonp2.default)(getPlayerDataSrc);
				document.body.removeChild(getPlayerDataScriptEle);
			} catch (error) {
				console.log('error', error);
			}
		},

		// 首次点击封面后视频加载
		playerLoadHandler: function playerLoadHandler() {
			var _this2 = this;

			this.setState({ playerLoad: true });

			// xhr请求弹幕数据
			var xhr = new XMLHttpRequest();
			var barrageURL = this.state.playerData.cid;
			var barrageList = [];
			xhr.open('GET', barrageURL);
			xhr.addEventListener('readystatechange', function (event) {
				var xhrTarget = event.target;
				if (xhrTarget.readyState === 4 && xhrTarget.status === 200) {
					console.log(xhrTarget.responseXML, 'xhr');
					// 因为是xml文档所以使用responseXML，获取到的是整个xml文档
					var xmlRoot = xhrTarget.responseXML;
					// 获取所有d标签，d标签为弹幕内容
					var barrageNode = xmlRoot.querySelectorAll('d');
					// 遍历拿到想要的数据，弹幕内容及弹幕发送时间
					Array.from(barrageNode).forEach(function (barrageItem) {
						var content = barrageItem.innerHTML;
						var info = barrageItem.getAttribute('p').split(',');
						barrageList.push({
							content: content,
							playTime: info[0],
							color: info[3]
						});
					});
					// 设置弹幕数据
					_this2.setState({ barrageData: barrageList });
				}
			});
			xhr.addEventListener('error', function (event) {
				console.log('请求弹幕数据出错');
			});
			xhr.send(null);
		},

		// 视频播放
		// canplay事件 当浏览器可以播放音频/视频时触发
		canplayHandler: function canplayHandler(event) {
			event.target.play();
			this.setState({ paused: false });
			// 视频播放后隐藏缓冲图标
			this.refs.stateIcon.classList.add('hide');
			this.refs.loadingIcon.classList.remove('active');
			console.log('canplay');
		},

		// 控制面板 显示隐藏切换
		controlToggle: function controlToggle() {
			clearTimeout(this.state.controlShowTimeout);
			if (this.state.controlShow) {
				this.setState({ controlShow: false });
			} else {
				this.setState({ controlShow: true });
				// 控制面板显示时，如果正在播放则3秒后隐藏控制面板
				if (!this.state.paused) {
					this.setState({ controlShowTimeout: setTimeout(this.controlToggle, 3000) });
				}
			}
		},

		// 播放暂停切换
		playToggle: function playToggle() {
			if (this.state.paused) {
				this.refs.player.play();
				// 开始播放后开启隐藏控制面板定时器
				this.setState({
					paused: false,
					controlShowTimeout: setTimeout(this.controlToggle, 3000)
				});
			} else {
				this.refs.player.pause();
				this.setState({ paused: true });
				// 暂停后停止隐藏控制面板的定时器
				clearTimeout(this.state.controlShowTimeout);
			}
		},

		// 将毫秒转换成 分 秒的方法
		timeFrom: function timeFrom(ms) {
			var min = Math.floor(ms / 60);
			var second = Math.floor(ms % 60);
			return { min: min, second: second };
		},

		// 修改视频总时长显示
		// durationchange事件 当音频/视频的时长已更改时触发
		changeTotalTime: function changeTotalTime(event) {
			var totalTime = this.timeFrom(event.target.duration);
			var totalTimeStr = (totalTime.min < 10 ? '0' + totalTime.min : totalTime.min) + ':' + (totalTime.second < 10 ? '0' + totalTime.second : totalTime.second);
			this.refs.totalTime.innerHTML = totalTimeStr;
		},

		// 弹幕轨道索引
		trackIndex: 0,
		// 是否显示弹幕
		barrageDisplay: true,
		// 切换弹幕显示隐藏
		toggleBarrageDisplay: function toggleBarrageDisplay(event) {
			if (this.barrageDisplay) {
				this.refs.barrage.classList.add('hide');
				event.currentTarget.firstElementChild.className = 'danmu-show-icon';
			} else {
				this.refs.barrage.classList.remove('hide');
				event.currentTarget.firstElementChild.className = 'danmu-hide-icon';
			}
			this.barrageDisplay = !this.barrageDisplay;
		},
		// 修改视频当前播放时间及进度条长度
		// timeupdate事件 当目前的播放位置已更改时触发
		changeCurrentTime: function changeCurrentTime(event) {
			var _this3 = this;

			var currentTime = this.timeFrom(event.target.currentTime);
			var currentTimeStr = (currentTime.min < 10 ? '0' + currentTime.min : currentTime.min) + ':' + (currentTime.second < 10 ? '0' + currentTime.second : currentTime.second);

			// 当前播放时间 / 总时间 得到比率
			var currentProgress = event.target.currentTime / event.target.duration;

			// 设置时间
			this.refs.currentTime.innerHTML = currentTimeStr;

			// 进度条当前不在拖动中则设置进度条长度
			if (this.state.isProgressTouchMove) {
				return;
			}
			this.refs.currentProgress.style.width = currentProgress * 100 + "%";

			if (this.barrageDisplay === false) {
				return;
			}
			/* 初步实现播放弹幕 */
			// 获取弹幕轨道
			var barrageTrack = document.querySelectorAll('.barrage-track');
			// var trackIndex = 0;
			this.state.barrageData.forEach(function (barrageItem, barrageIndex) {
				// 判断当前播放时间与弹幕播放时发送时间是否一致
				if (Math.round(event.target.currentTime) === Math.round(barrageItem.playTime)) {
					// 创建弹幕内容插入轨道
					var barrageContent = document.createElement('p');
					barrageContent.innerHTML = barrageItem.content;
					// 颜色数据是10进制数字字符串 例'16777215'先用parseInt转成数字，再用toString(16)转成16进制数字字符串，得'16777215'->'ffffff'
					barrageContent.style.color = '#' + parseInt(barrageItem.color).toString(16);
					barrageTrack[_this3.trackIndex].appendChild(barrageContent);
					// barrageContent.style.transform = 'translateX(-3.75rem)';

					// 用定时器延迟执行是为了不同步执行
					// 在弹幕插入之后同步添加transform会导致没有transition过渡效果
					// 按理说延迟0秒就可以达到异步效果
					// 但是延迟越小就会有越多的弹幕元素没有transition的过渡效果，原因未知
					// 效果为直接出现在屏幕左边而不是从右边移动到左边
					setTimeout(function () {
						barrageContent.style.transform = 'translateX(-3.75rem)';
					}, 30);

					// 用个自执行函数保存当前trackIndex
					(function (index) {
						// 5s后删除弹幕
						setTimeout(function () {
							barrageTrack[index].removeChild(barrageContent);
						}, 5000);
					})(_this3.trackIndex);

					// 轨道索引+1
					_this3.trackIndex++;
					// 等于轨道数量则归0
					if (_this3.trackIndex === barrageTrack.length) {
						_this3.trackIndex = 0;
					}
					_this3.state.barrageData.splice(barrageIndex, 1);
				}
			});
		},

		// 改变缓冲条长度
		//　progress事件当浏览器正在下载音频/视频时触发
		progressHandler: function progressHandler(event) {
			// buffered返回表示音频/视频已缓冲部分的 TimeRanges 对象
			// TimeRanges 对象属性：
			// length - 获得音视频中已缓冲范围的数量
			// start(index) - 获得某个已缓冲范围的开始位置
			// end(index) - 获得某个已缓冲范围的结束位置
			var buffered = event.target.buffered;
			// 没有缓冲数据则退出
			if (buffered.length <= 0) {
				return;
			}
			// 当前以缓冲时间 /  总时间 得到比率
			var maxBuffered = buffered.end(buffered.length - 1) / event.target.duration;
			console.log(buffered.start(buffered.length - 1), buffered.end(buffered.length - 1), '缓冲进度');
			this.refs.bufferedProgress.style.width = maxBuffered * 100 + '%';
		},

		// 设置当前播放时间
		setCurrentTime: function setCurrentTime(event) {
			// touchend事件 touches数组为空, 触摸事件信息在changedTouches
			console.log(event.touches, event.changedTouches);
			// ( 当前点击的X位置 - 进度条的offLeft 得到X位置相对于进度条的offLeft ) / 进度条的宽度 得到比率
			var touchLeftRatio = (event.changedTouches[0].pageX - event.currentTarget.offsetLeft) / event.currentTarget.offsetWidth;

			// 处理当拖动超出范围时数据也超出范围
			if (touchLeftRatio >= 1) {
				touchLeftRatio = 0.99;
			}
			if (touchLeftRatio <= 0) {
				touchLeftRatio = 0.01;
			}
			console.log(touchLeftRatio);
			// 总时间 * 比率 得到实际时间
			this.refs.player.currentTime = this.refs.player.duration * touchLeftRatio;
			console.log(this.refs.player.duration * touchLeftRatio);
			this.setState({ controlShowTimeout: setTimeout(this.controlToggle, 3000) });
			this.setState({ isProgressTouchMove: false });
		},

		// 拖动进度条
		progressTouchMove: function progressTouchMove(event) {
			var currentProgressWidth = (event.touches[0].pageX - event.currentTarget.offsetLeft) / event.currentTarget.offsetWidth;
			// 限制最大为1最小为0
			if (currentProgressWidth >= 1) {
				currentProgressWidth = 1;
			}
			if (currentProgressWidth <= 0) {
				currentProgressWidth = 0;
			}

			this.refs.currentProgress.style.width = currentProgressWidth * 100 + '%';
		},

		// 点击进度条
		progressTouchStart: function progressTouchStart() {
			clearTimeout(this.state.controlShowTimeout);
			this.setState({ isProgressTouchMove: true });
		},

		// waiting事件当视频由于需要缓冲下一帧而停止时触发
		waiting: function waiting(event) {
			// 显示缓冲图标
			this.refs.stateIcon.classList.remove('hide');
			this.refs.loadingIcon.classList.add('active');
			this.setState({ paused: 'buffered' });
		},

		// playing事件当音频/视频在已因缓冲而暂停或停止后已就绪时触发
		playing: function playing() {
			// 隐藏缓冲图标
			this.refs.loadingIcon.classList.remove('active');
			this.setState({ paused: false });
		},

		// 视频播放出错事件error
		// 设置错误代码
		error: function error(event) {
			console.log(event.target.error.code);
			this.setState({ errorCode: event.target.error.code });
		},

		// 重新加载视频方法
		videoReload: function videoReload() {
			this.refs.player.load();
			this.setState({ errorCode: null });
		},

		// 全屏方法 
		playerFullScreen: function playerFullScreen() {
			// 直接调用的是控制全屏的api
			// 方法名与标准有差异
			if (this.refs.player.requestFullScreen) {
				this.refs.player.requestFullScreen();
			} else if (this.refs.player.webkitRequestFullScreen) {
				this.refs.player.webkitRequestFullScreen();
			} else if (this.refs.player.mozRequestFullScreen) {
				this.refs.player.mozRequestFullScreen();
			}
		},

		render: function render() {

			// 处理播放器数据还未加载时
			if (this.state.playerData === null) {
				return _react2.default.createElement(
					'div',
					{ className: 'video-container' },
					_react2.default.createElement(
						'div',
						{ className: 'video-loading' },
						_react2.default.createElement(
							'p',
							null,
							'(\xB4\u30FB\u03C9\u30FB\uFF40)\u6B63\u5728\u52A0\u8F7D...'
						)
					)
				);
			}

			// 处理查询不到此aid对应的数据
			if (Object.prototype.toString.call(this.state.playerData) === '[object String]') {
				return _react2.default.createElement(
					'div',
					{ className: 'video-container' },
					_react2.default.createElement(
						'div',
						{ className: 'video-loading' },
						_react2.default.createElement(
							'p',
							null,
							'\u67E5\u8BE2\u9519\u8BEF\uFF0C\u53EF\u80FD\u627E\u4E0D\u5230\u6B64aid\u7684\u6570\u636E'
						)
					)
				);
			}

			var playerData = this.state.playerData;

			// 视频时间长度 单位毫秒
			var videoLength = this.timeFrom(Math.floor(playerData.timelength / 1000));
			// 时间显示格式 00:00
			var videoLengthStr = (videoLength.min < 10 ? '0' + videoLength.min : videoLength.min) + ':' + (videoLength.second < 10 ? '0' + videoLength.second : videoLength.second);

			return _react2.default.createElement(
				'div',
				{ className: 'video-container' },
				_react2.default.createElement(
					'div',
					{ className: 'barrage', ref: 'barrage' },
					_react2.default.createElement('div', { className: 'barrage-track' }),
					_react2.default.createElement('div', { className: 'barrage-track' }),
					_react2.default.createElement('div', { className: 'barrage-track' }),
					_react2.default.createElement('div', { className: 'barrage-track' }),
					_react2.default.createElement('div', { className: 'barrage-track' }),
					_react2.default.createElement('div', { className: 'barrage-track' }),
					_react2.default.createElement('div', { className: 'barrage-track' }),
					_react2.default.createElement('div', { className: 'barrage-track' }),
					_react2.default.createElement('div', { className: 'barrage-track' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'player-container', onTouchStart: this.controlToggle },
					_react2.default.createElement(
						'video',
						{ className: 'player', 'data-webkit-playsinline': true, preload: 'auto', onDurationChange: this.changeTotalTime, onLoadStart: this.waiting, onCanPlay: this.canplayHandler, onTimeUpdate: this.changeCurrentTime, onProgress: this.progressHandler, onWaiting: this.waiting, onPlaying: this.playing, onError: this.error, ref: 'player' },
						this.state.playerLoad ? _react2.default.createElement('source', { src: playerData.durl[0].url, type: 'video/mp4' }) : ''
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'load-layer' + (this.state.playerLoad ? ' hide' : ''), onTouchStart: this.playerLoadHandler },
					_react2.default.createElement('img', { className: 'video-cover', src: playerData.img }),
					_react2.default.createElement(
						'h2',
						{ className: 'video-load-title' },
						'av',
						this.props.avNum
					),
					_react2.default.createElement(
						'a',
						{ className: 'app-down' },
						'\u7C89\u8272\u6709\u89D2\u4E09\u500D\u901F\u7F13\u51B2\uFF0C\u5C31\u7528bilibili\u5BA2\u6237\u7AEF >>'
					),
					_react2.default.createElement(
						'div',
						{ className: 'video-length' },
						videoLengthStr
					),
					_react2.default.createElement('i', { className: 'load-player player-icon' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'player-control' + (this.state.controlShow ? '' : ' hide') },
					_react2.default.createElement(
						'div',
						{ className: 'time-container' },
						_react2.default.createElement(
							'span',
							{ className: 'current-time', ref: 'currentTime' },
							'00:00'
						),
						_react2.default.createElement(
							'span',
							null,
							'/'
						),
						_react2.default.createElement(
							'span',
							{ className: 'total-time', ref: 'totalTime' },
							'00:00'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'progress', onTouchEnd: this.setCurrentTime, onTouchMove: this.progressTouchMove, onTouchStart: this.progressTouchStart },
						_react2.default.createElement('div', { className: 'total-progress' }),
						_react2.default.createElement('div', { className: 'buffered-progress', ref: 'bufferedProgress' }),
						_react2.default.createElement('div', { className: 'current-progress', ref: 'currentProgress' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'more-control' },
						_react2.default.createElement(
							'div',
							{ className: 'danmu-toggle', onClick: this.toggleBarrageDisplay },
							_react2.default.createElement('i', { className: 'danmu-hide-icon' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'full-screen', onClick: this.playerFullScreen },
							_react2.default.createElement('i', { className: 'full-screen-icon' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'state-icon' + (this.state.controlShow ? '' : ' hide'), ref: 'stateIcon' },
					_react2.default.createElement('i', { className: 'loading-icon', ref: 'loadingIcon' }),
					_react2.default.createElement('i', { className: 'play-icon' + (this.state.paused === true ? ' active' : ''), onTouchStart: this.playToggle }),
					_react2.default.createElement('i', { className: 'pause-icon' + (this.state.paused === false ? ' active' : ''), onTouchStart: this.playToggle })
				),
				this.state.errorCode !== null ? _react2.default.createElement(
					'div',
					{ className: 'error-info' },
					_react2.default.createElement(
						'p',
						{ className: 'error-msg' },
						'\u9519\u8BEF\u4EE3\u7801\uFF1A',
						this.state.errorCode,
						'\uFF0C\u89C6\u9891\u52A0\u8F7D\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6216\u91CD\u65B0\u52A0\u8F7D\u89C6\u9891'
					),
					_react2.default.createElement(
						'span',
						{ className: 'video-reload', onTouchStart: this.videoReload },
						'\u91CD\u65B0\u52A0\u8F7D'
					)
				) : ''
			);
		}
	});

	exports.default = VideoContainer;

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _Recommend = __webpack_require__(223);

	var _Recommend2 = _interopRequireDefault(_Recommend);

	var _Comment = __webpack_require__(224);

	var _Comment2 = _interopRequireDefault(_Comment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RecommendComment = _react2.default.createClass({
		displayName: 'RecommendComment',

		getInitialState: function getInitialState() {
			return {
				toggleCont: 'recommend',
				commentCount: null
			};
		},
		toggleChange: function toggleChange(toggleTarget) {
			var _this = this;

			return function () {
				_this.setState({ toggleCont: toggleTarget });
			};
		},
		getCommentCount: function getCommentCount() {
			var _this2 = this;

			return function (count) {
				_this2.setState({ commentCount: count });
			};
		},
		render: function render() {

			var toggleCont = this.state.toggleCont;
			var commentCount = this.state.commentCount === null ? '正在加载' : this.state.commentCount;

			return _react2.default.createElement(
				'div',
				{ className: 'recommend-comment' },
				_react2.default.createElement(
					'ul',
					{ className: 'cont-toggle' },
					_react2.default.createElement(
						'li',
						{ onClick: this.toggleChange('recommend') },
						_react2.default.createElement(
							'p',
							{ className: toggleCont === 'recommend' ? 'on' : '' },
							'\u76F8\u5173\u63A8\u8350'
						)
					),
					_react2.default.createElement(
						'li',
						{ onClick: this.toggleChange('comment') },
						_react2.default.createElement(
							'p',
							{ className: toggleCont === 'comment' ? 'on' : '' },
							'\u8BC4\u8BBA',
							_react2.default.createElement(
								'em',
								{ className: 'comment-num' },
								commentCount
							)
						)
					)
				),
				_react2.default.createElement(_Recommend2.default, { toggleCont: toggleCont, avNum: this.props.avNum }),
				_react2.default.createElement(_Comment2.default, { toggleCont: toggleCont, avNum: this.props.avNum, getCommentCount: this.getCommentCount() })
			);
		}
	});

	exports.default = RecommendComment;

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _ajaxRequest = __webpack_require__(202);

	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);

	var _imgLazyLoad = __webpack_require__(208);

	var _imgLazyLoad2 = _interopRequireDefault(_imgLazyLoad);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var Recommend = _react2.default.createClass({
		displayName: 'Recommend',

		getInitialState: function getInitialState() {
			return {
				recommendData: [],
				displayData: []
			};
		},
		componentDidMount: function componentDidMount() {
			var _this = this;

			var successFun = function successFun(data) {
				console.log(data, 'recommend');

				// 将第8项之后的数据保存起来
				// 前8项放到当前显示的数据
				_this.setState({
					recommendData: data.data.slice(8),
					displayData: data.data.slice(0, 8)
				});
				(0, _imgLazyLoad2.default)('.content-item div.video-cover');
			};
			var errorFun = function errorFun(error) {
				console.log(error);
			};
			var avNum = this.props.avNum;
			var requestURL = 'http://comment.bilibili.com/recommendnew,' + avNum;
			(0, _ajaxRequest2.default)(requestURL, 'GET', successFun, errorFun);
		},
		displayMoreData: function displayMoreData() {
			var _this2 = this;

			if (this.state.recommendData.length === 0) {
				return;
			}
			// 才想起能用...操作符
			// 本来想着一个一个数据shift取出再push，突然想到有...操作符，主要也不够了解...操作符
			// 例[1,2,3].push([3,2,1]) = [1,2,3,[3,2,1]] || [1,2,3].push(...[3,2,1]) = [1,2,3,3,2,1]
			// 删除总数据中的前八项并插入到显示数据的末尾
			this.setState(function () {
				var _state$displayData;

				var moreData = _this2.state.recommendData.splice(0, 8);
				(_state$displayData = _this2.state.displayData).push.apply(_state$displayData, _toConsumableArray(moreData));
			});
			// 立刻执行是无效的，想不到原因，猜测是触发render渲染后节点还没渲染到页面上
			setTimeout(function () {
				(0, _imgLazyLoad2.default)('.content-item div.video-cover');
				if (_this2.state.recommendData.length === 0) {
					_this2.refs.loadMore.classList.add('load-disabled');
					_this2.refs.loadMore.innerHTML = '没有更多信息了';
				}
			}, 10);
		},
		render: function render() {

			if (this.state.displayData.length === 0) {
				return _react2.default.createElement(
					'div',
					{ className: 'recommend main-container' + (this.props.toggleCont !== 'recommend' ? ' hide' : '') },
					_react2.default.createElement(
						'p',
						{ className: 'loading-info' },
						'(\xB4\u30FB\u03C9\u30FB\uFF40)\u6B63\u5728\u52A0\u8F7D...'
					)
				);
			}

			var recommendDisplayData = this.state.displayData;

			return _react2.default.createElement(
				'div',
				{ className: 'recommend main-container' + (this.props.toggleCont !== 'recommend' ? ' hide' : '') },
				_react2.default.createElement(
					'ul',
					{ className: 'content-list' },
					recommendDisplayData.map(function (recommendDataItem, index) {
						// av号
						var aid = recommendDataItem.aid;
						// 视频封面url
						var pic = recommendDataItem.pic;
						// 标题
						var title = recommendDataItem.title;
						// 播放数
						var view = recommendDataItem.stat.view;
						// 弹幕数
						var danmaku = recommendDataItem.stat.danmaku;

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
											view >= 10000 ? (view / 10000).toFixed(1) + '万' : view
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'barrage-num' },
										_react2.default.createElement('span', { className: 'index-sprite index-sprite-barrage' }),
										_react2.default.createElement(
											'p',
											null,
											danmaku >= 10000 ? (danmaku / 10000).toFixed(1) + '万' : danmaku
										)
									)
								)
							)
						);
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'load-more', onClick: this.displayMoreData, ref: 'loadMore' },
					'\u8BF7\u7ED9\u6211\u66F4\u591A!'
				)
			);
		}
	});

	exports.default = Recommend;

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _createScriptJsonp = __webpack_require__(201);

	var _createScriptJsonp2 = _interopRequireDefault(_createScriptJsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comment = _react2.default.createClass({
		displayName: 'Comment',

		getInitialState: function getInitialState() {
			return { commentData: null };
		},
		componentDidMount: function componentDidMount() {
			var _this = this;

			window.jsonpCallBack.getCommentData = function (data) {
				console.log(data, 'comment');

				// if(data.message !== ''){
				// 	this.setState({ commentData: data.message });
				// 	return;
				// }

				_this.setState({ commentData: data.data.replies.slice(0, 5) });
				_this.props.getCommentCount(data.data.page.count);
			};

			var currentDate = Date.now();
			var avNum = this.props.avNum;
			var getCommentDataSrc = 'http://api.bilibili.com/x/v2/reply?callback=jsonpCallBack.getCommentData&jsonp=jsonp&type=1&sort=2&oid=' + avNum + '&pn=1&nohot=1&_=' + currentDate;
			var getCommentDataScript = (0, _createScriptJsonp2.default)(getCommentDataSrc);
			document.body.removeChild(getCommentDataScript);
		},
		formatDate: function formatDate(date) {
			var date = new Date(date);
			return {
				year: date.getFullYear(),
				month: date.getMonth() + 1,
				day: date.getDate(),
				hours: date.getHours(),
				minutes: date.getMinutes()
			};
		},
		render: function render() {
			var _this2 = this;

			if (this.state.commentData === null) {
				return _react2.default.createElement(
					'div',
					{ className: 'comment' + (this.props.toggleCont !== 'comment' ? ' hide' : '') },
					_react2.default.createElement(
						'p',
						{ className: 'loading-info' },
						'(\xB4\u30FB\u03C9\u30FB\uFF40)\u6B63\u5728\u52A0\u8F7D...'
					)
				);
			}

			// if(Object.prototype.toString.call(this.state.commentData) === '[object String]'){
			// 	return	<div className={'comment' + (this.props.toggleCont !== 'comment' ? ' hide' : '')}>
			// 				<p className='loading-info'>{this.state.commentData}</p>
			// 			</div>
			// }

			if (this.state.commentData.length === 0) {
				return _react2.default.createElement(
					'div',
					{ className: 'comment' + (this.props.toggleCont !== 'comment' ? ' hide' : '') },
					_react2.default.createElement(
						'p',
						{ className: 'loading-info' },
						'\u6CA1\u6709\u8BC4\u8BBA'
					)
				);
			}

			var commentData = this.state.commentData;

			return _react2.default.createElement(
				'div',
				{ className: 'comment' + (this.props.toggleCont !== 'comment' ? ' hide' : '') },
				_react2.default.createElement(
					'ul',
					{ className: 'comment-list' },
					commentData.map(function (commentDataItem, index) {
						// 头像URL
						var face = commentDataItem.member.avatar;
						// 用户名
						var username = commentDataItem.member.uname;
						// 评论信息
						var message = commentDataItem.content.message;
						// 评论时间
						var createTime = _this2.formatDate(commentDataItem.ctime * 1000);
						var createTimeStrYMD = createTime.year + '-' + createTime.month + '-' + createTime.day;
						var createTimeStrHM = (createTime.hours >= 10 ? createTime.hours : '0' + createTime.hours) + ':' + (createTime.minutes >= 10 ? createTime.minutes : '0' + createTime.minutes);
						return _react2.default.createElement(
							'li',
							{ key: index },
							_react2.default.createElement(
								'div',
								{ className: 'comment-face' },
								_react2.default.createElement(
									'a',
									{ href: '###' },
									_react2.default.createElement('img', { src: face, alt: 'face' })
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'comment-main' },
								_react2.default.createElement(
									'div',
									{ className: 'comment-info' },
									_react2.default.createElement(
										'a',
										{ href: '###', className: 'comment-name' },
										username
									),
									_react2.default.createElement(
										'span',
										{ className: 'comment-date' },
										createTimeStrYMD + ' ' + createTimeStrHM
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'comment-cont' },
									message
								)
							)
						);
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'download-link' },
					_react2.default.createElement(
						'a',
						{ href: '###' },
						'\u4E0B\u8F7Dbilibili\u5BA2\u6237\u7AEF\uFF0C\u67E5\u770B\u5168\u90E8\u8BC4\u8BBA'
					)
				)
			);
		}
	});

	exports.default = Comment;

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _createScriptJsonp = __webpack_require__(201);

	var _createScriptJsonp2 = _interopRequireDefault(_createScriptJsonp);

	var _ajaxRequest = __webpack_require__(202);

	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoIntro = _react2.default.createClass({
		displayName: 'VideoIntro',

		getInitialState: function getInitialState() {
			return {
				// 播放、弹幕、收藏数 Object
				detaiedData: null,
				// 其余大部分信息 Object
				videoInfo: null,
				// 控制标题及描述元素的显示隐藏
				isOpen: false,
				// 标题及描述元素的高度
				titleDescHeight: null
			};
		},
		componentDidMount: function componentDidMount() {
			var _this = this;

			var avNum = this.props.avNum;

			// jsonp 获取播放、弹幕、收藏数 start
			window.getdetaiedData = function (data) {
				console.log(data, 'videoIntro-detaiedData');
				_this.setState({ detaiedData: data });
				document.body.removeChild(getdetaiedDataScriptEle);
			};

			var currentDate = Date.now();

			// 回调函数字符串有'.'的话不能正确返回，如jsonp.callback，只能写全局变量了。
			var getdetaiedDataSrc = 'http://api.bilibili.com/archive_stat/stat?callback=getdetaiedData&aid=' + avNum + '&type=jsonp&_=' + currentDate;
			var getdetaiedDataScriptEle = (0, _createScriptJsonp2.default)(getdetaiedDataSrc);
			// jsonp 获取播放、弹幕、收藏数 end

			// ajax 获取视频信息 start
			var successFun = function successFun(data) {
				console.log(data, 'videoIntro-videoInfo');
				if (data.code === 404) {
					_this.setState({ videoInfo: data.code });
					return;
				}

				_this.setState({ videoInfo: data.data });
				document.title = data.data.title || 'av' + _this.props.avNum;

				setTimeout(function () {
					// 拿到标题描述信息元素高度后再设置为0
					_this.setState({ titleDescHeight: _this.refs.titleDesc.offsetHeight });
					_this.refs.titleDesc.style.height = '0';
				}, 10);
			};
			var errorFun = function errorFun(error) {
				console.log(error);
			};

			var requestURL = 'http://weizijie.cc:3000/videoInfo/' + avNum;
			(0, _ajaxRequest2.default)(requestURL, 'GET', successFun, errorFun);
			// ajax 获取视频信息 end
		},

		// 切换标题及描述元素的显示隐藏
		changeDisplayEle: function changeDisplayEle() {
			// 详情信息切换显示		
			var titleDesc = this.refs.titleDesc;
			var arrowDownIcon = this.refs.arrowDownIcon;
			var dateInfo = this.refs.dateInfo;
			var titleDescHeight = this.state.titleDescHeight;

			if (this.state.isOpen) {
				titleDesc.style.height = '0px';
				arrowDownIcon.classList.remove('icon-arrow-up');
				dateInfo.classList.add('hide');
				this.setState({ isOpen: false });
			} else {
				titleDesc.style.height = titleDescHeight + 'px';
				arrowDownIcon.classList.add('icon-arrow-up');
				dateInfo.classList.remove('hide');
				this.setState({ isOpen: true });
			}
		},

		render: function render() {
			// 处理查询不到此aid的数据
			if (this.state.videoInfo === 404) {
				return _react2.default.createElement(
					'div',
					{ className: 'video-intro' },
					_react2.default.createElement(
						'p',
						{ className: 'loading-info' },
						'\u67E5\u8BE2\u9519\u8BEF\uFF0C\u53EF\u80FD\u627E\u4E0D\u5230\u6B64aid\u7684\u6570\u636E'
					)
				);
			}

			var detaiedData = this.state.detaiedData;
			// 播放数
			var view = detaiedData !== null ? detaiedData.data.view : '正在加载';
			// 弹幕数
			var danmaku = detaiedData !== null ? detaiedData.data.danmaku : '正在加载';
			// 收藏数
			var favorite = detaiedData !== null ? detaiedData.data.favorite : '正在加载';

			var videoInfo = this.state.videoInfo;
			// 用户名
			var username = videoInfo !== null ? videoInfo.username : '正在加载';
			// 头像URL
			var face = videoInfo !== null ? videoInfo.face : './src/image/img_loading.png';
			// 视频标题
			var title = videoInfo !== null ? videoInfo.title : '正在加载';
			// 视频描述
			var descript = videoInfo !== null ? videoInfo.descript : '正在加载';
			// 视频创建时间
			var createTime = videoInfo !== null ? videoInfo.createTime : '正在加载';
			// 导航信息 
			var navInfo = videoInfo !== null ? videoInfo.navInfo : [];

			return _react2.default.createElement(
				'div',
				{ className: 'video-intro' },
				_react2.default.createElement(
					'div',
					{ className: 'up-info' },
					_react2.default.createElement(
						'div',
						{ className: 'up-face' },
						_react2.default.createElement(
							'a',
							null,
							_react2.default.createElement('img', { src: face })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'up-name' },
						_react2.default.createElement(
							'a',
							null,
							'UP\u4E3B\uFF1A',
							username
						),
						_react2.default.createElement(
							'a',
							null,
							'\u56F4\u89C2UP\u4E3B\u7684\u5168\u90E8\u6295\u7A3F\u554A'
						)
					),
					_react2.default.createElement(
						'a',
						{ href: '', className: 'up-follow' },
						'\u5173\u6CE8'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'title-desc', ref: 'titleDesc' },
					_react2.default.createElement(
						'h1',
						{ className: 'video-title' },
						title
					),
					_react2.default.createElement(
						'div',
						{ className: 'video-desc' },
						_react2.default.createElement(
							'p',
							null,
							descript
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'nav-info' },
					navInfo.map(function (navInfoItem, index) {
						return _react2.default.createElement(
							'a',
							{ key: index },
							navInfoItem,
							_react2.default.createElement(
								'span',
								null,
								' > '
							)
						);
					}),
					_react2.default.createElement(
						'span',
						null,
						'av',
						this.props.avNum
					)
				),
				_react2.default.createElement(
					'ul',
					{ className: 'detaied-info' },
					_react2.default.createElement(
						'li',
						null,
						'\u64AD\u653E\uFF1A',
						view >= 10000 ? (view / 10000).toFixed(1) + '万' : view
					),
					_react2.default.createElement(
						'li',
						null,
						'\u5F39\u5E55\uFF1A',
						danmaku >= 10000 ? (danmaku / 10000).toFixed(1) + '万' : danmaku
					),
					_react2.default.createElement(
						'li',
						null,
						'\u6536\u85CF\uFF1A',
						favorite >= 10000 ? (favorite / 10000).toFixed(1) + '万' : favorite
					),
					_react2.default.createElement(
						'li',
						{ className: 'hide', ref: 'dateInfo' },
						'\u65F6\u95F4\uFF1A',
						createTime
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'more-info-toggle', onClick: this.changeDisplayEle },
					_react2.default.createElement('i', { className: 'icon icon-arrow-down', ref: 'arrowDownIcon' })
				)
			);
		}
	});

	exports.default = VideoIntro;

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoOption = _react2.default.createClass({
		displayName: 'VideoOption',

		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'video-option' },
				_react2.default.createElement(
					'div',
					{ className: 'control-btn' },
					_react2.default.createElement('i', { className: 'icon icon-share' }),
					_react2.default.createElement(
						'p',
						null,
						'\u5206\u4EAB'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'control-btn' },
					_react2.default.createElement('i', { className: 'icon icon-collect' }),
					_react2.default.createElement(
						'p',
						null,
						'\u6536\u85CF'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'control-btn' },
					_react2.default.createElement('i', { className: 'icon icon-down' }),
					_react2.default.createElement(
						'p',
						null,
						'\u4E0B\u8F7D'
					)
				),
				_react2.default.createElement(
					'a',
					{ className: 'open-app' },
					'\u7528\u5BA2\u6237\u7AEF\u6253\u5F00'
				)
			);
		}
	});

	exports.default = VideoOption;

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _ajaxRequest = __webpack_require__(202);

	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var VideoPart = _react2.default.createClass({
		displayName: 'VideoPart',

		getInitialState: function getInitialState() {
			return {
				// 全部分p的数据 Object
				partData: null,
				// 当前显示的分p 3个
				partDisplay: null,
				// 是否显示全部分p
				isAllDisplay: false
			};
		},
		componentDidMount: function componentDidMount() {
			var _this = this;

			var successFun = function successFun(data) {
				console.log(data, 'videoPart');
				if (data.code === 404) {
					_this.setState({ partData: data.code });
					return;
				}

				_this.setState({
					partData: data.data,
					partDisplay: data.data.partName.slice(0, 3)
				});
			};
			var errorFun = function errorFun(error) {
				console.log(error);
			};

			var avNum = this.props.avNum;
			var requestURL = 'http://weizijie.cc:3000/partList/' + avNum;
			(0, _ajaxRequest2.default)(requestURL, 'GET', successFun, errorFun);
		},

		// 改变videoPage并且滚动到顶部
		changeVideoPageHandler: function changeVideoPageHandler(page) {
			var _this2 = this;

			return function () {
				_this2.props.changeVideoPage(page);

				var intervalTime = setInterval(function () {
					var rootNode = document.body.scrollTop === 0 ? document.documentElement : document.body;
					rootNode.scrollTop = rootNode.scrollTop - rootNode.scrollTop * 0.1;
					if (rootNode.scrollTop <= 0) {
						clearInterval(intervalTime);
					}
				}, 10);
			};
		},

		// 切换是否显示全部分p
		toggleDisplayAll: function toggleDisplayAll() {
			var partDisplay = this.state.partDisplay;

			if (this.state.isAllDisplay) {
				// 后来再看不明白只有一个参数的splice方法，记忆中第一个参数是要添加/删除的起始位置，第二个参数是要删除多少项
				// 百度后发现如果不设置第二个参数，则从起始位置到数组末尾的元素全部删除
				// 删除前三项后的所有元素
				partDisplay.splice(3);

				this.setState({
					partDisplay: partDisplay,
					isAllDisplay: false
				});
				this.refs.displayMoreText.innerHTML = '查看全部（共' + this.state.partData.totalPage + 'P）';
			} else {
				// 将所有part数据中除前三项数据添加进显示数据
				partDisplay.push.apply(partDisplay, _toConsumableArray(this.state.partData.partName.slice(3)));
				this.setState({
					partDisplay: partDisplay,
					isAllDisplay: true
				});
				this.refs.displayMoreText.innerHTML = '收起列表';
			}
		},

		render: function render() {
			var _this3 = this;

			if (this.state.partData === null) {
				return _react2.default.createElement(
					'div',
					{ className: 'video-part' },
					_react2.default.createElement(
						'p',
						{ className: 'loading-info' },
						'\u6B63\u5728\u52A0\u8F7D...'
					)
				);
			}

			if (this.state.partData === 404) {
				return _react2.default.createElement(
					'div',
					{ className: 'video-part' },
					_react2.default.createElement(
						'p',
						{ className: 'loading-info' },
						'\u67E5\u8BE2\u9519\u8BEF\uFF0C\u53EF\u80FD\u627E\u4E0D\u5230\u6B64aid\u7684\u6570\u636E'
					)
				);
			}

			var partData = this.state.partData;

			// 当前分p
			var videoPage = this.props.videoPage;

			// 分p名
			var partName = partData.partName;
			// 分p数
			var totalPage = partData.totalPage;

			// 当前显示分p的数据
			var partDisplay = this.state.partDisplay;
			console.log(partDisplay, 'partDisplay');

			return _react2.default.createElement(
				'div',
				{ className: 'video-part' },
				_react2.default.createElement(
					'ul',
					{ className: 'part-list' },
					partDisplay.map(function (name, index) {
						return _react2.default.createElement(
							'li',
							{ key: index, className: videoPage === index + 1 ? 'on' : '', onClick: _this3.changeVideoPageHandler(index + 1) },
							_react2.default.createElement(
								'a',
								null,
								name
							)
						);
					}),
					partName.length === 0 ? _react2.default.createElement(
						'li',
						{ className: 'on' },
						_react2.default.createElement(
							'a',
							null,
							'1'
						)
					) : '',
					partName.length > 3 ? _react2.default.createElement(
						'li',
						{ className: 'display-more-part', onClick: this.toggleDisplayAll },
						_react2.default.createElement(
							'a',
							{ ref: 'displayMoreText' },
							'\u67E5\u770B\u5168\u90E8\uFF08\u5171',
							partName.length,
							'P\uFF09'
						)
					) : ''
				)
			);
		}
	});

	exports.default = VideoPart;

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _createScriptJsonp = __webpack_require__(201);

	var _createScriptJsonp2 = _interopRequireDefault(_createScriptJsonp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoTag = _react2.default.createClass({
		displayName: 'VideoTag',

		getInitialState: function getInitialState() {
			// 标签数据 Array
			return { tagData: null };
		},
		componentDidMount: function componentDidMount() {
			var _this = this;

			// 标签数据请求
			window.jsonpCallBack.getTagData = function (data) {
				console.log(data, 'tagdata');
				if (data.data) {
					_this.setState({ tagData: data.data });
				} else {
					_this.setState({ tagData: data.message });
				}
			};

			var avNum = this.props.avNum;
			var getTagDataSrc = 'http://api.bilibili.com/x/tag/archive/tags?callback=jsonpCallBack.getTagData&aid=' + avNum + '&jsonp=jsonp&_=' + Date.now();
			var getTagDataScript = (0, _createScriptJsonp2.default)(getTagDataSrc);
			document.body.removeChild(getTagDataScript);
		},

		render: function render() {
			// 没有请求数据时tagData为null
			if (this.state.tagData === null) {
				return _react2.default.createElement(
					'div',
					{ className: 'video-tag' },
					_react2.default.createElement(
						'p',
						{ className: 'loading-info' },
						'\u6B63\u5728\u52A0\u8F7D...'
					)
				);
			}
			// 请求了数据但没有标签数据时tagData为字符串
			// 新发现： !this.state.tagData instanceof Array | !操作符优先于instanceof操作符
			if (!(this.state.tagData instanceof Array)) {
				return _react2.default.createElement(
					'div',
					{ className: 'video-tag' },
					_react2.default.createElement(
						'p',
						{ className: 'loading-info' },
						'\u627E\u4E0D\u5230\u8FD9\u4E2A\u89C6\u9891\u7684\u6807\u7B7E\u4E86'
					)
				);
			}
			// 请求了数据但标签数为0
			if (this.state.tagData.length === 0) {
				return _react2.default.createElement(
					'div',
					{ className: 'video-tag' },
					_react2.default.createElement(
						'p',
						{ className: 'loading-info' },
						'\u6CA1\u6709\u6807\u7B7E'
					)
				);
			}

			var tagData = this.state.tagData;

			return _react2.default.createElement(
				'div',
				{ className: 'video-tag' },
				_react2.default.createElement(
					'h2',
					{ className: 'tag-desc' },
					'\u6807\u7B7E'
				),
				_react2.default.createElement(
					'ul',
					{ className: 'tag-list' },
					tagData.map(function (tagDataItem, index) {
						var tagName = tagDataItem.tag_name;
						return _react2.default.createElement(
							'li',
							{ key: index },
							_react2.default.createElement(
								'a',
								null,
								tagName
							)
						);
					})
				)
			);
		}
	});

	exports.default = VideoTag;

/***/ }

});