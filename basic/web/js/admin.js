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

	var PaginationView, PortfolioListView, page, paginationView, portfolios;

	PortfolioListView = __webpack_require__(1);

	portfolios = __webpack_require__(2);

	page = 1;

	$('.js-show-previous').on('click', function() {
	  page += 1;
	  return portfolios.fetch({
	    reset: true,
	    data: $.param({
	      page: page
	    })
	  });
	});

	PaginationView = __webpack_require__(10);

	paginationView = new PaginationView({
	  pageCount: 2,
	  perPage: 5,
	  totalCount: 8,
	  currentPage: 1
	});

	paginationView.render();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var PortfolioItemView, PortfolioListView, portfolioCategories, portfolios,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	portfolios = __webpack_require__(2);

	portfolioCategories = __webpack_require__(4);

	PortfolioItemView = __webpack_require__(6);

	PortfolioListView = (function(superClass) {
	  extend(PortfolioListView, superClass);

	  function PortfolioListView() {
	    return PortfolioListView.__super__.constructor.apply(this, arguments);
	  }

	  PortfolioListView.prototype.el = '.js-portfolios';

	  PortfolioListView.prototype.page = 1;

	  PortfolioListView.prototype.initialize = function() {
	    this.listenTo(portfolioCategories, 'reset', this.fetchPortfolio);
	    return portfolioCategories.fetch({
	      reset: true
	    });
	  };

	  PortfolioListView.prototype.fetchPortfolio = function() {
	    this.listenTo(portfolios, 'reset', this.addAll);
	    return portfolios.fetch({
	      reset: true,
	      success: function(collection, response, options) {
	        console.log(response);
	        console.log(options.xhr.getAllResponseHeaders());
	        return console.log(options.xhr.getResponseHeader('X-Pagination-Current-Page'));
	      }
	    });
	  };

	  PortfolioListView.prototype.addAll = function() {
	    console.log(portfolios);
	    return portfolios.each(this.addOne, this);
	  };

	  PortfolioListView.prototype.addOne = function(portfolio) {
	    var view;
	    view = new PortfolioItemView({
	      model: portfolio,
	      categories: portfolioCategories
	    });
	    view.render();
	    return this.$el.append(view.el);
	  };

	  return PortfolioListView;

	})(Backbone.View);

	module.exports = PortfolioListView;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Portfolio, Portfolios,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	Portfolio = __webpack_require__(3);

	Portfolios = (function(superClass) {
	  extend(Portfolios, superClass);

	  function Portfolios() {
	    return Portfolios.__super__.constructor.apply(this, arguments);
	  }

	  Portfolios.prototype.model = Portfolio;

	  Portfolios.prototype.byCategory = function(category) {
	    var filtered;
	    filtered = this.filter(function(box) {
	      return box.get("category_id") === category;
	    });
	    return new Portfolios(filtered);
	  };

	  Portfolios.prototype.url = '/api/portfolio-news?expand=cover';

	  return Portfolios;

	})(Backbone.Collection);

	module.exports = new Portfolios;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Portfolio,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	Portfolio = (function(superClass) {
	  extend(Portfolio, superClass);

	  function Portfolio() {
	    return Portfolio.__super__.constructor.apply(this, arguments);
	  }

	  Portfolio.prototype.defaults = function() {
	    return {
	      id: 0,
	      category_id: 0,
	      title: '',
	      description: ''
	    };
	  };

	  return Portfolio;

	})(Backbone.Model);

	module.exports = Portfolio;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var PortfolioCategories, PortfolioCategory,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	PortfolioCategory = __webpack_require__(5);

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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var PortfolioItemView, SelectView,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	SelectView = __webpack_require__(7);

	PortfolioItemView = (function(superClass) {
	  extend(PortfolioItemView, superClass);

	  function PortfolioItemView() {
	    return PortfolioItemView.__super__.constructor.apply(this, arguments);
	  }

	  PortfolioItemView.prototype.template = _.template(__webpack_require__(9));

	  PortfolioItemView.prototype.initialize = function(options) {
	    if (options != null) {
	      return this.categories = options.categories;
	    }
	  };

	  PortfolioItemView.prototype.className = function() {
	    return 'row portfolio-item';
	  };

	  PortfolioItemView.prototype.attributes = function() {
	    return {
	      'data-key': this.model.get('id')
	    };
	  };

	  PortfolioItemView.prototype.render = function() {
	    var data, selectView;
	    selectView = new SelectView({
	      selectedId: this.model.get('category_id'),
	      collection: this.categories,
	      id: 'portfolio-category_id',
	      className: 'form-control',
	      attributes: {
	        name: 'Portfolio[category_id]'
	      }
	    });
	    selectView.render();
	    data = this.model.toJSON();
	    data["categoriesHTML"] = selectView.el.outerHTML;
	    this.$el.html(this.template(data));
	    this.$el.find('[title]').tooltip();
	    return this;
	  };

	  return PortfolioItemView;

	})(Backbone.View);

	module.exports = PortfolioItemView;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var OptionView, Select,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	OptionView = __webpack_require__(8);

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
/* 8 */
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


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-xs-12\">\n    <a class=\"close\" href=\"/admin/portfolio/delete.html?id=<%= id %>\" title=\"Удалить\" data-method=\"post\"><span aria-hidden=\"true\">&times;</span></a>\n</div>\n<div class=\"col-xs-12\">\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n            <% if (cover != null) { %>\n                <% var re = /(?:\\.([^.]+))?$/; var ext = re.exec(cover.filePath)[1];  %>\n                <img src=\"/yii2images/images/image-by-item-and-alias.html?item=<%= cover.modelName %><%= cover.itemId %>&amp;dirtyAlias=<%= cover.urlAlias %>_200x.<%= ext %>\" alt=\"\" class=\"img-rounded img-responsive center-block mb-20\">\n            <% } else { %>\n                <img src=\"/yii2images/images/image-by-item-and-alias.html?item=&amp;dirtyAlias=placeHolder_200x.png\" alt=\"\" class=\"img-rounded img-responsive center-block mb-20\">\n            <% } %>\n        </div>\n        <div class=\"col-md-10\">\n            <form id=\"w1\" action=\"/admin/portfolio.html\" method=\"post\" role=\"form\">\n                <input type=\"hidden\" name=\"_csrf\" value=\"aVpYbjZ3UVoMHzE/BA0HKSIbPylyRydrIjQVA1kfP2oPaAsZUgEebQ==\">\n                <div class=\"form-group field-portfolio-category_id\">\n                    <label class=\"control-label\" for=\"portfolio-category_id\">Категория</label>\n                    <%= categoriesHTML %>\n                    <p class=\"help-block help-block-error\"></p>\n                </div>\n                <div class=\"form-group field-portfolio-title\">\n                    <label class=\"control-label\" for=\"portfolio-title\">Заголовок</label>\n                    <input type=\"text\" id=\"portfolio-title\" class=\"form-control\" name=\"Portfolio[title]\" value=\"<%= title %>\">\n                    <p class=\"help-block help-block-error\"></p>\n                </div>\n                <div class=\"form-group field-portfolio-description\">\n                    <label class=\"control-label\" for=\"portfolio-description\">Описание</label>\n                    <textarea id=\"portfolio-description\" class=\"form-control\" name=\"Portfolio[description]\"><%= description %></textarea>\n                    <p class=\"help-block help-block-error\"></p>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var PageView, Pagination,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	PageView = __webpack_require__(11);

	Pagination = (function(superClass) {
	  extend(Pagination, superClass);

	  function Pagination() {
	    this.renderOne = bind(this.renderOne, this);
	    return Pagination.__super__.constructor.apply(this, arguments);
	  }

	  Pagination.prototype.tagName = 'ul';

	  Pagination.prototype.className = 'pagination';

	  Pagination.prototype.initialize = function(options) {
	    if (options != null) {
	      this.currentPage = options.currentPage;
	    }
	    if (options != null) {
	      this.totalCount = options.totalCount;
	    }
	    if (options != null) {
	      this.perPage = options.perPage;
	    }
	    if (options != null) {
	      return this.pageCount = options.pageCount;
	    }
	  };

	  Pagination.prototype.render = function() {
	    var i, pageNumber, ref;
	    this.$el.html('');
	    this.renderOne(this.currentPage - 1);
	    for (pageNumber = i = 1, ref = this.pageCount; 1 <= ref ? i <= ref : i >= ref; pageNumber = 1 <= ref ? ++i : --i) {
	      this.renderOne(pageNumber);
	    }
	    return this.renderOne(this.currentPage + 1);
	  };

	  Pagination.prototype.renderOne = function(pageNumber) {
	    var pageView;
	    pageView = new PageView({
	      pageNumber: pageNumber,
	      active: pageNumber === this.currentPage
	    });
	    pageView.render();
	    return this.$el.append(pageView.el);
	  };

	  return Pagination;

	})(Backbone.View);

	module.exports = Pagination;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var Page, UrlManager,
	  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	UrlManager = __webpack_require__(12);

	Page = (function(superClass) {
	  extend(Page, superClass);

	  function Page() {
	    return Page.__super__.constructor.apply(this, arguments);
	  }

	  Page.prototype.tagName = 'li';

	  Page.prototype.urlManager = new UrlManager;

	  Page.prototype.initialize = function(options) {
	    if (options != null) {
	      this.pageNumber = options.pageNumber;
	    }
	    if (options != null) {
	      return this.active = options.active;
	    }
	  };

	  Page.prototype.render = function() {
	    this.urlManager.parseSearch().setSearchParam('page', this.pageNumber);
	    this.$el.html('<a href="' + this.urlManager.getPathName() + this.urlManager.getSearch() + '">' + this.pageNumber + '</a>');
	    if (this.active) {
	      this.$el.addClass('active');
	    }
	    return this;
	  };

	  return Page;

	})(Backbone.View);

	module.exports = Page;


/***/ },
/* 12 */
/***/ function(module, exports) {

	var UrlManager;

	UrlManager = (function() {
	  var search;

	  function UrlManager() {
	    this.parseSearch();
	  }

	  search = {};

	  UrlManager.prototype.parseSearch = function() {
	    var $_GET, __GET, getVar, i, j, ref;
	    $_GET = {};
	    __GET = window.location.search.substring(1).split("&");
	    for (i = j = 0, ref = __GET.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	      getVar = __GET[i].split("=");
	      if (!getVar[0]) {
	        continue;
	      }
	      $_GET[getVar[0]] = typeof getVar[1] === "undefined" ? "" : getVar[1];
	    }
	    search = $_GET;
	    return this;
	  };

	  UrlManager.prototype.setSearchParam = function(key, value) {
	    search[key] = value;
	    return this;
	  };

	  UrlManager.prototype.unsetSearchParam = function(key) {
	    delete search[key];
	    return this;
	  };

	  UrlManager.prototype.setSearchParams = function(params) {
	    var key, value;
	    for (key in params) {
	      value = params[key];
	      this.setSearchParam(key, value);
	    }
	    return this;
	  };

	  UrlManager.prototype.unsetSearchParams = function(params) {
	    var index, key;
	    for (index in params) {
	      key = params[index];
	      this.unsetSearchParam(value);
	    }
	    return this;
	  };

	  UrlManager.prototype.getSearch = function() {
	    var first, key, searchStr, value;
	    searchStr = '';
	    first = true;
	    for (key in search) {
	      value = search[key];
	      searchStr += (first === true ? '?' : '&') + key + (value ? '=' + value : '');
	      first = false;
	    }
	    return searchStr;
	  };

	  UrlManager.prototype.getPathName = function() {
	    return window.location.pathname;
	  };

	  return UrlManager;

	})();

	module.exports = UrlManager;


/***/ }
/******/ ]);