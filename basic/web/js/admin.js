/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	ReactDOM.render(React.createElement(_App2.default, null), document.getElementById('hhh'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ColorLine = __webpack_require__(2);

	var _ColorLine2 = _interopRequireDefault(_ColorLine);

	var _SideBar = __webpack_require__(3);

	var _SideBar2 = _interopRequireDefault(_SideBar);

	var _PortfolioPage = __webpack_require__(7);

	var _PortfolioPage2 = _interopRequireDefault(_PortfolioPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_ColorLine2.default, null),
	                React.createElement(_SideBar2.default, null),
	                React.createElement(_PortfolioPage2.default, null)
	            );
	        }
	    }]);

	    return App;
	}(React.Component);

	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColorLine = function (_React$Component) {
	    _inherits(ColorLine, _React$Component);

	    function ColorLine() {
	        _classCallCheck(this, ColorLine);

	        return _possibleConstructorReturn(this, (ColorLine.__proto__ || Object.getPrototypeOf(ColorLine)).apply(this, arguments));
	    }

	    _createClass(ColorLine, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return false;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            //console.log('FlatIcon render! ' + this.props.iconName);
	            return React.createElement(
	                "div",
	                { className: "wrap-color-line" },
	                React.createElement("div", { className: "wcl-item-1" }),
	                React.createElement("div", { className: "wcl-item-2" }),
	                React.createElement("div", { className: "wcl-item-3" }),
	                React.createElement("div", { className: "wcl-item-4" }),
	                React.createElement("div", { className: "wcl-item-5" }),
	                React.createElement("div", { className: "wcl-item-6" }),
	                React.createElement("div", { className: "wcl-item-7" })
	            );
	        }
	    }]);

	    return ColorLine;
	}(React.Component);

	exports.default = ColorLine;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Separator = __webpack_require__(4);

	var _Separator2 = _interopRequireDefault(_Separator);

	var _ButtonWithIcon = __webpack_require__(5);

	var _ButtonWithIcon2 = _interopRequireDefault(_ButtonWithIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SideBar = function (_React$Component) {
	    _inherits(SideBar, _React$Component);

	    function SideBar() {
	        _classCallCheck(this, SideBar);

	        return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
	    }

	    _createClass(SideBar, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            //console.log('FlatIcon render! ' + this.props.iconName);
	            return React.createElement(
	                'div',
	                { className: 'wrap-sidebar' },
	                React.createElement(
	                    'div',
	                    { className: 'logo' },
	                    React.createElement(
	                        'span',
	                        { className: 'logo-header' },
	                        'Админка'
	                    ),
	                    React.createElement(_ButtonWithIcon2.default, { iconName: 'export', title: 'Просмотреть сайт', href: '/', className: 'go-home', target: '_blank' })
	                ),
	                React.createElement(
	                    'ul',
	                    { className: 'nav' },
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/admin.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-dashboard nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Консоль'
	                        )
	                    ),
	                    React.createElement(_Separator2.default, null),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/admin/pages.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-duplicate nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Страницы'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/admin/portfolio.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-briefcase nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Выполненные работы'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/admin/articles.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-align-left nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Статьи'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/admin/contacts.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-phone nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Контакты'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/admin/feedback.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-headphones nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Обратная связь'
	                        )
	                    ),
	                    React.createElement(_Separator2.default, null),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/admin/feedback.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-user nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Модераторы'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/admin/feedback.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-cog nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Настройки'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return SideBar;
	}(React.Component);

	exports.default = SideBar;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Separator = function (_React$Component) {
	    _inherits(Separator, _React$Component);

	    function Separator() {
	        _classCallCheck(this, Separator);

	        return _possibleConstructorReturn(this, (Separator.__proto__ || Object.getPrototypeOf(Separator)).apply(this, arguments));
	    }

	    _createClass(Separator, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return false;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            //console.log('FlatIcon render! ' + this.props.iconName);
	            return React.createElement("li", { className: "separator" });
	        }
	    }]);

	    return Separator;
	}(React.Component);

	exports.default = Separator;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _FlatIcon = __webpack_require__(6);

	var _FlatIcon2 = _interopRequireDefault(_FlatIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonWithIcon = function (_React$Component) {
	    _inherits(ButtonWithIcon, _React$Component);

	    function ButtonWithIcon() {
	        _classCallCheck(this, ButtonWithIcon);

	        return _possibleConstructorReturn(this, (ButtonWithIcon.__proto__ || Object.getPrototypeOf(ButtonWithIcon)).apply(this, arguments));
	    }

	    _createClass(ButtonWithIcon, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return nextProps.iconName !== this.props.iconName;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            //console.log('Button render! ' + this.props.title);
	            return React.createElement(
	                "a",
	                {
	                    className: "button-with-icon" + (this.props.className ? " " + this.props.className : ''),
	                    onClick: this.props.onClick || null,
	                    "data-toggle": this.props['data-toggle'] || null,
	                    "data-placement": this.props['data-placement'] || null,
	                    title: this.props['title'] || null,
	                    href: this.props['href'] || null,
	                    target: this.props['target'] || null
	                },
	                React.createElement(_FlatIcon2.default, { iconName: this.props.iconName })
	            );
	        }
	    }], [{
	        key: "defaultProps",
	        get: function get() {
	            return {
	                "data-toggle": "tooltip",
	                "data-placement": "bottom"
	            };
	        }
	    }, {
	        key: "propTypes",
	        get: function get() {
	            return {
	                iconName: React.PropTypes.string.isRequired,
	                'data-toggle': React.PropTypes.string,
	                'data-placement': React.PropTypes.string,
	                title: React.PropTypes.string,
	                href: React.PropTypes.string,
	                target: React.PropTypes.string
	            };
	        }
	    }]);

	    return ButtonWithIcon;
	}(React.Component);

	exports.default = ButtonWithIcon;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FlatIcon = function (_React$Component) {
	    _inherits(FlatIcon, _React$Component);

	    function FlatIcon() {
	        _classCallCheck(this, FlatIcon);

	        return _possibleConstructorReturn(this, (FlatIcon.__proto__ || Object.getPrototypeOf(FlatIcon)).apply(this, arguments));
	    }

	    _createClass(FlatIcon, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return nextProps.iconName !== this.props.iconName;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            //console.log('FlatIcon render! ' + this.props.iconName);
	            return React.createElement("i", { className: "flaticon-" + this.props.iconName });
	        }
	    }], [{
	        key: "propTypes",
	        get: function get() {
	            return {
	                iconName: React.PropTypes.string.isRequired
	            };
	        }
	    }]);

	    return FlatIcon;
	}(React.Component);

	exports.default = FlatIcon;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Header = __webpack_require__(8);

	var _Header2 = _interopRequireDefault(_Header);

	var _Portfolio = __webpack_require__(9);

	var _Portfolio2 = _interopRequireDefault(_Portfolio);

	var _FlatIcon = __webpack_require__(6);

	var _FlatIcon2 = _interopRequireDefault(_FlatIcon);

	var _PortfolioStore = __webpack_require__(11);

	var _PortfolioStore2 = _interopRequireDefault(_PortfolioStore);

	var _AppActions = __webpack_require__(20);

	var _AppActions2 = _interopRequireDefault(_AppActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var iconNames = ['align7', 'arrow63', 'arrow64', 'arrow73', 'arrows4', 'ascendant', 'attachment3', 'checkmark2', 'chevron8', 'circle9', 'clockwise', 'cloud14', 'code3', 'conversation1', 'cross5', 'days', 'direction1', 'down5', 'down6', 'download12', 'edit4', 'export', 'eye8', 'feed', 'folder24', 'forward1', 'frontal', 'gaming', 'gear', 'graph3', 'graph7', 'graph8', 'headset1', 'heart10', 'help2', 'home11', 'info6', 'justify', 'left11', 'left16', 'left17', 'line4', 'loading', 'location12', 'lock5', 'loop4', 'mail5', 'map4', 'media11', 'media12', 'menu10', 'microphone6', 'mobile5', 'mobile7', 'move5', 'multimedia1', 'new8', 'next5', 'note3', 'open15', 'open16', 'outline3', 'outlined', 'phone14', 'photo7', 'plus13', 'print1', 'question2', 'rectangular1', 'reply2', 'reply4', 'return5', 'retweet1', 'search6', 'star11', 'stop4', 'tablet4', 'tablet5', 'text15', 'text2', 'thin2', 'thin6', 'thumbs9', 'thumbup', 'trash3', 'triangle4', 'upload8', 'user14', 'user15', 'view', 'view2', 'view3', 'volume12', 'volume5', 'indow12'];
	var icons = iconNames.map(function (icon, key) {
	    return React.createElement(_FlatIcon2.default, { key: key, iconName: icon });
	});

	var PortfolioPage = function (_React$Component) {
	    _inherits(PortfolioPage, _React$Component);

	    function PortfolioPage(props) {
	        _classCallCheck(this, PortfolioPage);

	        var _this = _possibleConstructorReturn(this, (PortfolioPage.__proto__ || Object.getPrototypeOf(PortfolioPage)).call(this, props));

	        _this.state = _this.getStateFromStore();
	        _this.handleSearchQuery = _this.handleSearchQuery.bind(_this);
	        _this.handleCloseSearch = _this.handleCloseSearch.bind(_this);
	        _this.onChangeState = _this.onChangeState.bind(_this);
	        return _this;
	    }

	    _createClass(PortfolioPage, [{
	        key: 'getStateFromStore',
	        value: function getStateFromStore() {
	            return {
	                allPortfolio: _PortfolioStore2.default.getAll()
	            };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _PortfolioStore2.default.addChangeListener(this.onChangeState);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _PortfolioStore2.default.removeChangeListener(this.onChangeState);
	        }
	    }, {
	        key: 'onChangeState',
	        value: function onChangeState() {
	            this.setState(this.getStateFromStore());
	        }
	    }, {
	        key: 'handleSearchQuery',
	        value: function handleSearchQuery(event) {
	            _AppActions2.default.search(event.target.value);
	        }
	    }, {
	        key: 'handleCloseSearch',
	        value: function handleCloseSearch(event) {
	            _AppActions2.default.clearSearch();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'container-fluid wrap-container' },
	                React.createElement(_Header2.default, {
	                    titleText: 'Выполненные работы',
	                    titleSearch: 'Поиск по заголовку',
	                    onChangeSearchQuery: this.handleSearchQuery,
	                    onCloseSearch: this.handleCloseSearch
	                }),
	                React.createElement(_Portfolio2.default, { data: this.state.allPortfolio }),
	                React.createElement(
	                    'icons',
	                    { style: { zoom: 2, marginBottom: 50 + 'px', display: 'block' } },
	                    icons
	                )
	            );
	        }
	    }]);

	    return PortfolioPage;
	}(React.Component);

	exports.default = PortfolioPage;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ButtonWithIcon = __webpack_require__(5);

	var _ButtonWithIcon2 = _interopRequireDefault(_ButtonWithIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	        _this.state = {
	            modeSearch: false
	        };
	        _this.toggleModeSearch = _this.toggleModeSearch.bind(_this);
	        return _this;
	    }

	    _createClass(Header, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return nextState.modeSearch !== this.state.modeSearch;
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this.state.modeSearch) {
	                this.refs.searchInput.focus();
	            } else {
	                ReactDOM.findDOMNode(this.refs.searchButton).blur();
	            }
	        }
	    }, {
	        key: 'toggleModeSearch',
	        value: function toggleModeSearch(event) {
	            event.preventDefault();
	            var isExistCloseSearch = this.props.onCloseSearch != null;
	            var isFunctionCloseSearch = typeof this.props.onCloseSearch === 'function';
	            if (this.state.modeSearch && isExistCloseSearch && isFunctionCloseSearch) {
	                this.props.onCloseSearch();
	            }
	            this.setState({
	                modeSearch: !this.state.modeSearch
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.log('Header render!');
	            return React.createElement(
	                'div',
	                { className: 'wrap-header' },
	                React.createElement(_ButtonWithIcon2.default, {
	                    title: 'Меню',
	                    iconName: this.state.modeSearch ? 'thin6' : 'menu10',
	                    href: '/admin/portfolio/create.html',
	                    className: 'left menu'
	                }),
	                React.createElement(_ButtonWithIcon2.default, {
	                    title: 'Добавить работу',
	                    iconName: 'plus13',
	                    href: '/admin/portfolio/create.html'
	                }),
	                React.createElement(_ButtonWithIcon2.default, {
	                    title: 'Поиск',
	                    ref: 'searchButton',
	                    iconName: this.state.modeSearch ? 'cross5' : 'search6',
	                    href: '?search',
	                    onClick: this.toggleModeSearch
	                }),
	                React.createElement(
	                    'span',
	                    { className: 'h2 wrap-header_h2' },
	                    this.state.modeSearch ? React.createElement('input', {
	                        ref: 'searchInput',
	                        className: 'wrap-header_h2_input',
	                        type: 'text',
	                        placeholder: this.props.titleSearch,
	                        onChange: this.props.onChangeSearchQuery
	                    }) : this.props.titleText
	                )
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        get: function get() {
	            return {
	                titleText: React.PropTypes.string.isRequired,
	                titleSearch: React.PropTypes.string.isRequired,
	                onCloseSearch: React.PropTypes.func,
	                onChangeSearchQuery: React.PropTypes.func
	            };
	        }
	    }]);

	    return Header;
	}(React.Component);

	exports.default = Header;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Item = __webpack_require__(10);

	var _Item2 = _interopRequireDefault(_Item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Portfolio = function (_React$Component) {
	    _inherits(Portfolio, _React$Component);

	    function Portfolio(props) {
	        _classCallCheck(this, Portfolio);

	        return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));
	    }

	    _createClass(Portfolio, [{
	        key: 'render',
	        value: function render() {
	            var portfolioItems = this.props.data.map(function (item) {
	                return React.createElement(_Item2.default, { key: item['id'], data: item });
	            });

	            return React.createElement(
	                'div',
	                { className: 'ajs-portfolios' },
	                portfolioItems
	            );
	        }
	    }]);

	    return Portfolio;
	}(React.Component);

	exports.default = Portfolio;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _FlatIcon = __webpack_require__(6);

	var _FlatIcon2 = _interopRequireDefault(_FlatIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_React$Component) {
	    _inherits(Item, _React$Component);

	    function Item(props) {
	        _classCallCheck(this, Item);

	        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props));
	    }

	    _createClass(Item, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "row portfolio-item" },
	                React.createElement(
	                    "div",
	                    { className: "col-xs-12" },
	                    React.createElement(
	                        "a",
	                        { className: "close", href: "/admin/portfolio/delete.html?id=" + this.props.data.id, title: "Удалить", "data-method": "post" },
	                        React.createElement(_FlatIcon2.default, { iconName: "cross5" })
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-xs-12" },
	                    React.createElement(
	                        "div",
	                        { className: "row" },
	                        React.createElement(
	                            "div",
	                            { className: "col-md-2" },
	                            React.createElement("img", { src: "/yii2images/images/image-by-item-and-alias.html?item=" + this.props.data.cover.modelName + this.props.data.cover.itemId + "&dirtyAlias=" + this.props.data.cover.urlAlias + "_200x." + this.props.data.cover.fileExtension,
	                                alt: "",
	                                className: "img-rounded img-responsive center-block mb-20"
	                            })
	                        ),
	                        React.createElement(
	                            "div",
	                            { className: "col-md-10" },
	                            React.createElement(
	                                "form",
	                                { action: "/admin/portfolio/index.html", method: "post", role: "form" },
	                                React.createElement(
	                                    "div",
	                                    { className: "form-group field-portfolio-category_id" },
	                                    React.createElement(
	                                        "label",
	                                        { className: "control-label", htmlFor: "portfolio-category_id" },
	                                        "Категория"
	                                    ),
	                                    React.createElement(
	                                        "select",
	                                        {
	                                            defaultValue: this.props.data.category.id,
	                                            id: "portfolio-category_id",
	                                            className: "form-control",
	                                            name: "Portfolio[category_id]"
	                                        },
	                                        React.createElement(
	                                            "option",
	                                            { value: "2" },
	                                            "Кухни"
	                                        ),
	                                        React.createElement(
	                                            "option",
	                                            { value: "1" },
	                                            "Детские"
	                                        ),
	                                        React.createElement(
	                                            "option",
	                                            { value: "3" },
	                                            "Шкафы-купе"
	                                        )
	                                    ),
	                                    React.createElement("p", { className: "help-block help-block-error" })
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "form-group field-portfolio-title" },
	                                    React.createElement(
	                                        "label",
	                                        { className: "control-label", htmlFor: "portfolio-title" },
	                                        "Заголовок"
	                                    ),
	                                    React.createElement("input", {
	                                        type: "text",
	                                        id: "portfolio-title",
	                                        className: "form-control",
	                                        name: "Portfolio[title]",
	                                        defaultValue: this.props.data.title
	                                    }),
	                                    React.createElement("p", { className: "help-block help-block-error" })
	                                ),
	                                React.createElement(
	                                    "div",
	                                    { className: "form-group field-portfolio-description" },
	                                    React.createElement(
	                                        "label",
	                                        { className: "control-label", htmlFor: "portfolio-description" },
	                                        "Описание"
	                                    ),
	                                    React.createElement("textarea", {
	                                        id: "portfolio-description",
	                                        className: "form-control",
	                                        name: "Portfolio[description]",
	                                        defaultValue: this.props.data.description
	                                    }),
	                                    React.createElement("p", { className: "help-block help-block-error" })
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }], [{
	        key: "propTypes",
	        get: function get() {
	            return {

	                //"id": React.PropTypes.number.isRequired,
	                //"category_id": React.PropTypes.number.isRequired,
	                //"title": React.PropTypes.string.isRequired,
	                //"description": React.PropTypes.string.isRequired,
	                //"is_active": React.PropTypes.number.isRequired,
	                //"date_create": React.PropTypes.string.isRequired,
	                //"date_update": React.PropTypes.string.isRequired
	            };
	        }
	    }]);

	    return Item;
	}(React.Component);

	exports.default = Item;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AppDispatcher = __webpack_require__(12);

	var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

	var _events = __webpack_require__(17);

	var _AppConstants = __webpack_require__(18);

	var _AppConstants2 = _interopRequireDefault(_AppConstants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var data = [{
	    "id": 1,
	    "category_id": 1,
	    "title": "Первая работа",
	    "description": "Очень хороша",
	    "is_active": 1,
	    "date_create": "2016-02-07 11:03:57",
	    "date_update": "2016-02-07 11:03:57",
	    "category": {
	        "id": 1,
	        "link": "children",
	        "name": "Детские",
	        "description": "Детские комнаты на любой вкус",
	        "position": 2,
	        "date_create": "2016-01-26 04:36:14",
	        "date_update": "2016-01-26 04:36:14"
	    },
	    "cover": null
	}, {
	    "id": 2,
	    "category_id": 2,
	    "title": "Вторая чудная работа",
	    "description": "Просто прелесть",
	    "is_active": 0,
	    "date_create": "2016-08-26 19:31:48",
	    "date_update": "2016-08-26 19:31:48",
	    "category": {
	        "id": 2,
	        "link": "kjdfs",
	        "name": "Кухни",
	        "description": "Отличные кухни",
	        "position": 1,
	        "date_create": "2016-01-26 05:44:33",
	        "date_update": "2016-01-26 05:44:33"
	    },
	    "cover": null
	}, {
	    "id": 17,
	    "category_id": 1,
	    "title": "Archie",
	    "description": "С изображением",
	    "is_active": 1,
	    "date_create": "2016-02-05 20:23:56",
	    "date_update": "2016-02-05 20:23:56",
	    "category": {
	        "id": 1,
	        "link": "children",
	        "name": "Детские",
	        "description": "Детские комнаты на любой вкус",
	        "position": 2,
	        "date_create": "2016-01-26 04:36:14",
	        "date_update": "2016-01-26 04:36:14"
	    },
	    "cover": {
	        "id": 4,
	        "filePath": "Portfolios/Portfolio17/10e0a9.jpg",
	        "itemId": 17,
	        "isMain": 1,
	        "modelName": "Portfolio",
	        "urlAlias": "5b1990114e-1",
	        "name": ""
	    }
	}, {
	    "id": 18,
	    "category_id": 1,
	    "title": "asdfsadf",
	    "description": "yyyyyy yy yy y h",
	    "is_active": 1,
	    "date_create": "2016-02-07 11:04:01",
	    "date_update": "2016-02-07 11:04:01",
	    "category": {
	        "id": 1,
	        "link": "children",
	        "name": "Детские",
	        "description": "Детские комнаты на любой вкус",
	        "position": 2,
	        "date_create": "2016-01-26 04:36:14",
	        "date_update": "2016-01-26 04:36:14"
	    },
	    "cover": null
	}, {
	    "id": 19,
	    "category_id": 1,
	    "title": "sdfgdsf",
	    "description": "yyyy y y y yyyy",
	    "is_active": 1,
	    "date_create": "2016-02-05 20:24:18",
	    "date_update": "2016-02-05 20:24:18",
	    "category": {
	        "id": 1,
	        "link": "children",
	        "name": "Детские",
	        "description": "Детские комнаты на любой вкус",
	        "position": 2,
	        "date_create": "2016-01-26 04:36:14",
	        "date_update": "2016-01-26 04:36:14"
	    },
	    "cover": {
	        "id": 5,
	        "filePath": "Portfolios/Portfolio19/cd7828.jpg",
	        "itemId": 19,
	        "isMain": 1,
	        "modelName": "Portfolio",
	        "urlAlias": "e61de5cc0e-1",
	        "name": ""
	    }
	}, {
	    "id": 20,
	    "category_id": 1,
	    "title": "archie",
	    "description": "fghfgh",
	    "is_active": 1,
	    "date_create": "2016-02-05 20:25:18",
	    "date_update": "2016-02-05 20:25:18",
	    "category": {
	        "id": 1,
	        "link": "children",
	        "name": "Детские",
	        "description": "Детские комнаты на любой вкус",
	        "position": 2,
	        "date_create": "2016-01-26 04:36:14",
	        "date_update": "2016-01-26 04:36:14"
	    },
	    "cover": {
	        "id": 6,
	        "filePath": "Portfolios/Portfolio20/7db645.jpg",
	        "itemId": 20,
	        "isMain": 1,
	        "modelName": "Portfolio",
	        "urlAlias": "0e18f9a52d-1",
	        "name": ""
	    }
	}, {
	    "id": 21,
	    "category_id": 1,
	    "title": "new window",
	    "description": "new window for callback",
	    "is_active": 1,
	    "date_create": "2016-02-07 11:04:29",
	    "date_update": "2016-02-07 11:04:29",
	    "category": {
	        "id": 1,
	        "link": "children",
	        "name": "Детские",
	        "description": "Детские комнаты на любой вкус",
	        "position": 2,
	        "date_create": "2016-01-26 04:36:14",
	        "date_update": "2016-01-26 04:36:14"
	    },
	    "cover": {
	        "id": 7,
	        "filePath": "Portfolios/Portfolio21/d71fbd.png",
	        "itemId": 21,
	        "isMain": 1,
	        "modelName": "Portfolio",
	        "urlAlias": "b0c7aa0402-1",
	        "name": ""
	    }
	}, {
	    "id": 22,
	    "category_id": 3,
	    "title": "ывапыва",
	    "description": "выапвыа",
	    "is_active": 1,
	    "date_create": "2016-02-07 11:04:02",
	    "date_update": "2016-02-07 11:04:02",
	    "category": {
	        "id": 3,
	        "link": "lol",
	        "name": "Шкафы-купе",
	        "description": "Большие шкафы",
	        "position": 3,
	        "date_create": null,
	        "date_update": null
	    },
	    "cover": {
	        "id": 8,
	        "filePath": "Portfolios/Portfolio22/d0c9d3.png",
	        "itemId": 22,
	        "isMain": 1,
	        "modelName": "Portfolio",
	        "urlAlias": "abf7e2a7f4-1",
	        "name": ""
	    }
	}, {
	    "id": 23,
	    "category_id": 1,
	    "title": "sdfsd",
	    "description": "sdfsdf sdf sd",
	    "is_active": 0,
	    "date_create": "2016-06-30 19:27:56",
	    "date_update": "2016-06-30 19:27:56",
	    "category": {
	        "id": 1,
	        "link": "children",
	        "name": "Детские",
	        "description": "Детские комнаты на любой вкус",
	        "position": 2,
	        "date_create": "2016-01-26 04:36:14",
	        "date_update": "2016-01-26 04:36:14"
	    },
	    "cover": {
	        "id": 9,
	        "filePath": "Portfolios/Portfolio23/3860d2.jpg",
	        "itemId": 23,
	        "isMain": 1,
	        "modelName": "Portfolio",
	        "urlAlias": "ff4b3ffb64-1",
	        "name": ""
	    }
	}];

	var portfolioItems = data.map(function (item) {
	    if (item['cover'] == null) {
	        item['cover'] = {
	            modelName: '',
	            itemId: '',
	            fileExtension: 'png',
	            urlAlias: "placeHolder"
	        };
	    } else {
	        var re = /(?:\.([^.]+))?$/;
	        item['cover']['fileExtension'] = re.exec(item['cover']['filePath'])[1];
	    }
	    return item;
	});

	function search(query) {
	    var searchQuery = query.toLowerCase();
	    portfolioItems = data.filter(function (item) {
	        var searchValue = item.title.toLowerCase();
	        return searchValue.indexOf(searchQuery) !== -1;
	    });
	}

	function closeSearch() {
	    portfolioItems = data;
	}

	var CHANGE_EVENT = 'change';

	var PortfolioStore = function (_EventEmitter) {
	    _inherits(PortfolioStore, _EventEmitter);

	    function PortfolioStore() {
	        _classCallCheck(this, PortfolioStore);

	        return _possibleConstructorReturn(this, (PortfolioStore.__proto__ || Object.getPrototypeOf(PortfolioStore)).apply(this, arguments));
	    }

	    _createClass(PortfolioStore, [{
	        key: 'getAll',
	        value: function getAll() {
	            return portfolioItems;
	        }
	    }, {
	        key: 'emitChange',
	        value: function emitChange() {
	            this.emit(CHANGE_EVENT);
	        }

	        /**
	         * @param {function} callback
	         */

	    }, {
	        key: 'addChangeListener',
	        value: function addChangeListener(callback) {
	            this.on(CHANGE_EVENT, callback);
	        }

	        /**
	         * @param {function} callback
	         */

	    }, {
	        key: 'removeChangeListener',
	        value: function removeChangeListener(callback) {
	            this.removeListener(CHANGE_EVENT, callback);
	        }
	    }]);

	    return PortfolioStore;
	}(_events.EventEmitter);

	var portfolioStore = new PortfolioStore();

	_AppDispatcher2.default.register(function (action) {
	    switch (action.actionType) {
	        case _AppConstants2.default.PORTFOLIO_SEARCH:
	            search(action.query);
	            portfolioStore.emitChange();
	            break;
	        case _AppConstants2.default.PORTFOLIO_CLEAR_SEARCH:
	            closeSearch();
	            portfolioStore.emitChange();
	            break;
	    }
	});

	exports.default = portfolioStore;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _flux = __webpack_require__(13);

	exports.default = new _flux.Dispatcher();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(14);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	var invariant = __webpack_require__(16);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	}();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events) this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler)) return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) {
	      listeners[i].apply(this, args);
	    }
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events) this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type]) return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0) return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;

	  if (!this._events) return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length) {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    }
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function (type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function (emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keymirror = __webpack_require__(19);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _keymirror2.default)({
	    PORTFOLIO_SEARCH: null,
	    PORTFOLIO_CLEAR_SEARCH: null
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */

	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _AppDispatcher = __webpack_require__(12);

	var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

	var _AppConstants = __webpack_require__(18);

	var _AppConstants2 = _interopRequireDefault(_AppConstants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppActions = {
	    search: function search(query) {
	        _AppDispatcher2.default.dispatch({
	            actionType: _AppConstants2.default.PORTFOLIO_SEARCH,
	            query: query
	        });
	    },
	    clearSearch: function clearSearch() {
	        _AppDispatcher2.default.dispatch({
	            actionType: _AppConstants2.default.PORTFOLIO_CLEAR_SEARCH
	        });
	    }
	};

	exports.default = AppActions;

/***/ }
/******/ ]);