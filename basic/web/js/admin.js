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

	var SelectView, portfolioCategories;

	portfolioCategories = __webpack_require__(1);

	SelectView = __webpack_require__(3);

	portfolioCategories.fetch().then(function() {
	  var selectView;
	  selectView = new SelectView({
	    selectedId: 2,
	    collection: portfolioCategories,
	    id: 'portfolio-category_id',
	    className: 'form-control',
	    attributes: {
	      name: 'Portfolio[category_id]'
	    }
	  });
	  selectView.render();
	  return $('body').html(selectView.el);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var PortfolioCategories, PortfolioCategory,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	PortfolioCategory = __webpack_require__(2);

	PortfolioCategories = (function(superClass) {
	  extend(PortfolioCategories, superClass);

	  function PortfolioCategories() {
	    return PortfolioCategories.__super__.constructor.apply(this, arguments);
	  }

	  PortfolioCategories.prototype.model = PortfolioCategory;

	  PortfolioCategories.prototype.url = '/api/portfolio-categories';

	  return PortfolioCategories;

	})(Backbone.Collection);

	module.exports = new PortfolioCategories;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var PortfolioCategory,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	PortfolioCategory = (function(superClass) {
	  extend(PortfolioCategory, superClass);

	  function PortfolioCategory() {
	    return PortfolioCategory.__super__.constructor.apply(this, arguments);
	  }

	  PortfolioCategory.prototype.defaults = function() {
	    return {
	      id: 0,
	      link: '',
	      name: '',
	      description: '',
	      position: 0
	    };
	  };

	  return PortfolioCategory;

	})(Backbone.Model);

	module.exports = PortfolioCategory;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var OptionView, Select,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	OptionView = __webpack_require__(4);

	Select = (function(superClass) {
	  extend(Select, superClass);

	  function Select() {
	    this.renderOne = bind(this.renderOne, this);
	    return Select.__super__.constructor.apply(this, arguments);
	  }

	  Select.prototype.tagName = 'select';

	  Select.prototype.initialize = function(options) {
	    if (options != null) {
	      return this.selectedId = options.selectedId;
	    }
	  };

	  Select.prototype.render = function() {
	    this.$el.html('');
	    return this.collection.each(this.renderOne);
	  };

	  Select.prototype.renderOne = function(option) {
	    var optionId, optionView;
	    optionId = option.get('id');
	    optionView = new OptionView({
	      model: option,
	      attributes: {
	        selected: optionId === this.selectedId,
	        value: optionId
	      }
	    });
	    optionView.render();
	    return this.$el.append(optionView.el);
	  };

	  return Select;

	})(Backbone.View);

	module.exports = Select;


/***/ },
/* 4 */
/***/ function(module, exports) {

	var Option,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	Option = (function(superClass) {
	  extend(Option, superClass);

	  function Option() {
	    return Option.__super__.constructor.apply(this, arguments);
	  }

	  Option.prototype.tagName = 'option';

	  Option.prototype.render = function() {
	    this.$el.html(this.model.get('name'));
	    return this;
	  };

	  return Option;

	})(Backbone.View);

	module.exports = Option;


/***/ }
/******/ ]);