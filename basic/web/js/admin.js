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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColorLine = __webpack_require__(1);
	var SideBar = __webpack_require__(2);
	var PortfolioPage = __webpack_require__(6);

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
	                React.createElement(ColorLine, null),
	                React.createElement(SideBar, null),
	                React.createElement(PortfolioPage, null)
	            );
	        }
	    }]);

	    return App;
	}(React.Component);

	ReactDOM.render(React.createElement(App, null), document.getElementById('hhh'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

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

	module.exports = ColorLine;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Separator = __webpack_require__(3);
	var ButtonWithIcon = __webpack_require__(4);

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
	                    React.createElement(ButtonWithIcon, { iconName: 'export', title: 'Просмотреть сайт', href: '/', className: 'go-home', target: '_blank' })
	                ),
	                React.createElement(
	                    'ul',
	                    { className: 'nav' },
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/{$this->context->module->id}.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-dashboard nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Консоль'
	                        )
	                    ),
	                    React.createElement(Separator, null),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/{$this->context->module->id}/pages.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-duplicate nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Страницы'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/{$this->context->module->id}/portfolio.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-briefcase nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Выполненные работы'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/{$this->context->module->id}/articles.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-align-left nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Статьи'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/{$this->context->module->id}/contacts.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-phone nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Контакты'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/{$this->context->module->id}/feedback.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-headphones nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Обратная связь'
	                        )
	                    ),
	                    React.createElement(Separator, null),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/{$this->context->module->id}/feedback.html' },
	                            React.createElement('span', { className: 'glyphicon glyphicon-user nav-glyphicon', 'aria-hidden': 'true' }),
	                            'Модераторы'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '/{$this->context->module->id}/feedback.html' },
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

	module.exports = SideBar;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

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

	module.exports = Separator;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FlatIcon = __webpack_require__(5);

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
	                React.createElement(FlatIcon, { iconName: this.props.iconName })
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

	module.exports = ButtonWithIcon;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

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

	module.exports = FlatIcon;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = __webpack_require__(7);
	var Portfolio = __webpack_require__(8);
	var FlatIcon = __webpack_require__(5);

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
	var iconNames = ['align7', 'arrow63', 'arrow64', 'arrow73', 'arrows4', 'ascendant', 'attachment3', 'checkmark2', 'chevron8', 'circle9', 'clockwise', 'cloud14', 'code3', 'conversation1', 'cross5', 'days', 'direction1', 'down5', 'down6', 'download12', 'edit4', 'export', 'eye8', 'feed', 'folder24', 'forward1', 'frontal', 'gaming', 'gear', 'graph3', 'graph7', 'graph8', 'headset1', 'heart10', 'help2', 'home11', 'info6', 'justify', 'left11', 'left16', 'left17', 'line4', 'loading', 'location12', 'lock5', 'loop4', 'mail5', 'map4', 'media11', 'media12', 'menu10', 'microphone6', 'mobile5', 'mobile7', 'move5', 'multimedia1', 'new8', 'next5', 'note3', 'open15', 'open16', 'outline3', 'outlined', 'phone14', 'photo7', 'plus13', 'print1', 'question2', 'rectangular1', 'reply2', 'reply4', 'return5', 'retweet1', 'search6', 'star11', 'stop4', 'tablet4', 'tablet5', 'text15', 'text2', 'thin2', 'thin6', 'thumbs9', 'thumbup', 'trash3', 'triangle4', 'upload8', 'user14', 'user15', 'view', 'view2', 'view3', 'volume12', 'volume5', 'indow12'];
	var icons = iconNames.map(function (icon, key) {
	    return React.createElement(FlatIcon, { key: key, iconName: icon });
	});
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

	var PortfolioPage = function (_React$Component) {
	    _inherits(PortfolioPage, _React$Component);

	    function PortfolioPage(props) {
	        _classCallCheck(this, PortfolioPage);

	        var _this = _possibleConstructorReturn(this, (PortfolioPage.__proto__ || Object.getPrototypeOf(PortfolioPage)).call(this, props));

	        _this.state = {
	            displayPortfolio: portfolioItems
	        };
	        _this.handleSearchQuery = _this.handleSearchQuery.bind(_this);
	        _this.handleCloseSearch = _this.handleCloseSearch.bind(_this);
	        return _this;
	    }

	    _createClass(PortfolioPage, [{
	        key: 'handleSearchQuery',
	        value: function handleSearchQuery(event) {
	            var searchQuery = event.target.value.toLowerCase();
	            var displayedPortfolio = portfolioItems.filter(function (item) {
	                var searchValue = item.title.toLowerCase();
	                return searchValue.indexOf(searchQuery) !== -1;
	            });
	            this.setState({
	                displayPortfolio: displayedPortfolio
	            });
	        }
	    }, {
	        key: 'handleCloseSearch',
	        value: function handleCloseSearch(event) {
	            this.setState({
	                displayPortfolio: portfolioItems
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'container-fluid wrap-container' },
	                React.createElement(Header, {
	                    titleText: 'Выполненные работы',
	                    titleSearch: 'Поиск по заголовку',
	                    onChangeSearchQuery: this.handleSearchQuery,
	                    onCloseSearch: this.handleCloseSearch
	                }),
	                React.createElement(Portfolio, { data: this.state.displayPortfolio }),
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

	module.exports = PortfolioPage;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonWithIcon = __webpack_require__(4);

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
	            this.setState({
	                modeSearch: !this.state.modeSearch
	            });
	            var isExistCloseSearch = this.props.onCloseSearch != null;
	            var isFunctionCloseSearch = typeof this.props.onCloseSearch === 'function';
	            if (isExistCloseSearch && isFunctionCloseSearch) {
	                this.props.onCloseSearch();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.log('Header render!');
	            return React.createElement(
	                'div',
	                { className: 'wrap-header' },
	                React.createElement(ButtonWithIcon, {
	                    title: 'Меню',
	                    iconName: this.state.modeSearch ? 'thin6' : 'menu10',
	                    href: '/admin/portfolio/create.html',
	                    className: 'left menu'
	                }),
	                React.createElement(ButtonWithIcon, {
	                    title: 'Добавить работу',
	                    iconName: 'plus13',
	                    href: '/admin/portfolio/create.html'
	                }),
	                React.createElement(ButtonWithIcon, {
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

	module.exports = Header;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = __webpack_require__(9);

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
	                return React.createElement(Item, { key: item['id'], data: item });
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

	module.exports = Portfolio;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FlatIcon = __webpack_require__(5);

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
	                        React.createElement(FlatIcon, { iconName: "cross5" })
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

	module.exports = Item;

/***/ }
/******/ ]);