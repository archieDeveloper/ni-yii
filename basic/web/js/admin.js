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

	$(document).ready(function() {
	  var requireControllerIndex, requireControllers;
	  requireControllerIndex = {};
	  $('[data-controller]').each(function(index, elem) {
	    return requireControllerIndex[$(elem).attr('data-controller')] = true;
	  });
	  requireControllers = Object.keys(requireControllerIndex);
	  return requireControllers.forEach(function(controllerPath, index, thisList) {
	    return __webpack_require__(1)("./" + controllerPath);
	  });
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./admin/portfolio/articles": 2,
		"./admin/portfolio/articles.coffee": 2,
		"./admin/portfolio/categories/add": 4,
		"./admin/portfolio/categories/add.coffee": 4,
		"./admin/portfolio/category": 6,
		"./admin/portfolio/category.coffee": 6,
		"./admin/portfolio/list": 8,
		"./admin/portfolio/list.coffee": 8
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Articles, controller;

	controller = __webpack_require__(3);

	Articles = (function() {
	  var $document;

	  $document = $(document);

	  function Articles() {
	    this.edit();
	    this.cancelEdit();
	    this.save();
	    this.toggleText();
	    this.remove();
	    this.create();
	    this.restore();
	  }

	  Articles.prototype.edit = function() {
	    return $document.on('click', '.edit-art', function(e) {
	      var $parent, date, text, title;
	      e.preventDefault();
	      $parent = $(this).parent().parent();
	      $parent.find('.art-nav-1').hide();
	      $parent.find('.art-nav-2').show();
	      title = $parent.find('.title-art').hide().html();
	      date = $parent.find('.date-art').hide().attr('data-date');
	      $parent.find('.text-art').hide();
	      if ($parent.find('.text-art .fulltext-art').html() != null) {
	        text = $parent.find('.text-art .desc-art').html() + '<!--more-->' + $parent.find('.text-art .fulltext-art').html();
	      } else {
	        text = $parent.find('.text-art .desc-art').html();
	      }
	      $parent.find('.edit-title-art').show().find('.input-edit').val(title);
	      $parent.find('.edit-date-art').show().find('.input-edit').val(date);
	      return $parent.find('.edit-text-art').show().find('.input-edit').val(text);
	    });
	  };

	  Articles.prototype.cancelEdit = function() {
	    return $document.on('click', '.no-edit-art', function(e) {
	      var $parent;
	      e.preventDefault();
	      $parent = $(this).parent().parent();
	      $parent.find('.art-nav-1').show();
	      $parent.find('.art-nav-2').hide();
	      $parent.find('.title-art').show();
	      $parent.find('.date-art').show();
	      $parent.find('.text-art').show();
	      $parent.find('.edit-title-art').hide().val('');
	      $parent.find('.edit-date-art').hide().val('');
	      return $parent.find('.edit-text-art').hide().val('');
	    });
	  };

	  Articles.prototype.save = function() {
	    return $document.on('click', '.save-edit-art', function(e) {
	      var $parent, callback, data;
	      e.preventDefault();
	      $parent = $(this).parent().parent();
	      data = {
	        id: $(this).attr('data-id', {
	          title: $parent.find('.edit-title-art .input-edit').val(),
	          date: $parent.find('.edit-date-art .input-edit').val(),
	          text: $parent.find('.edit-text-art .input-edit').val()
	        })
	      };
	      callback = function(result) {
	        $parent.find('.art-nav-1').show();
	        $parent.find('.art-nav-2').hide();
	        $parent.find('.title-art').show().html(result.title);
	        $parent.find('.date-art').show().html(result.date_rus).attr('data-date', result.date);
	        $parent.find('.text-art').show().find('.desc-art').html(result.text);
	        $parent.find('.edit-title-art').hide().val('');
	        $parent.find('.edit-date-art').hide().val('');
	        return $parent.find('.edit-text-art').hide().val('');
	      };
	      return controller.call('nimyadmin/articles/save', data, callback);
	    });
	  };

	  Articles.prototype.toggleText = function() {
	    $document.on('click', '.show-all-text', function(e) {
	      var $this;
	      e.preventDefault();
	      $this = $(this);
	      $this.hide();
	      return $this.next().show();
	    });
	    return $document.on('click', '.hide-all-text', function(e) {
	      var $parent;
	      e.preventDefault();
	      $parent = $(this).parent();
	      $parent.prev().show();
	      return $parent.hide();
	    });
	  };

	  Articles.prototype.remove = function() {
	    return $document.on('click', '.del-art', function(e) {
	      var $this, callback, data;
	      e.preventDefault();
	      $this = $(this);
	      $this.prop('disabled', true);
	      data = {
	        id: $this.attr('data-id')
	      };
	      callback = function(result) {
	        var $secondParent;
	        $this.prop('disabled', false);
	        $secondParent = $this.parent().parent();
	        $secondParent.before('<li class="news-trash">' + 'Статья удалена.' + '<a href="#" class="no-trash" data-id="' + $id + '">Восстановить</a>' + '<a class="button close-no-trash" href="#"><i class="flaticon-cross5"></i></a>' + '</li>');
	        return $secondParent.slideUp(200);
	      };
	      return controller.call('nimyadmin/articles/remove', data, callback);
	    });
	  };

	  Articles.prototype.restore = function() {
	    $document.on('click', '.no-trash', function(e) {
	      var $this, callback, data;
	      e.preventDefault();
	      $this = $(this);
	      $this.prop('disabled', true);
	      data = {
	        id: $this.attr('data-id')
	      };
	      callback = function() {
	        var $parent;
	        $this.prop('disabled', false);
	        $parent = $this.parent();
	        $parent.next().slideDown(200);
	        return $parent.remove();
	      };
	      return controller.call('nimyadmin/articles/restore', data, callback);
	    });
	    return $document.on('click', '.close-no-trash', function(e) {
	      var $parent;
	      e.preventDefault();
	      $parent = $(this).parent();
	      $parent.next().remove();
	      return $parent.remove();
	    });
	  };

	  Articles.prototype.create = function() {
	    return $document.on('click', '.btn-publised-new', function(e) {
	      var callback, data;
	      e.preventDefault();
	      data = {
	        title: $('#title-new').val(),
	        date: $('#date-new').val(),
	        text: $('#text-new').val()
	      };
	      callback = function(result) {
	        var $elem;
	        $elem = $('.ajax-pre li').last().prependTo('.ajax-pre');
	        $elem.find('.title-art').html(result.title);
	        $elem.find('.date-art').html(result.date);
	        $elem.find('.text-art').html(result.text);
	        $elem.find('.edit-art').attr('data-id', result.id);
	        $elem.find('.del-art').attr('data-id', result.id);
	        $('#title-new').val('');
	        $('#date-new').val('');
	        return $('#text-new').val('');
	      };
	      return controller.call('nimyadmin/articles/create', data, callback);
	    });
	  };

	  return Articles;

	})();

	module.exports = new Articles;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Controller;

	Controller = (function() {
	  function Controller() {}

	  Controller.prototype.call = function(contoller, data, callback) {
	    return $.ajax({
	      dataType: "json",
	      type: "POST",
	      data: data,
	      url: '/' + contoller + '.html',
	      success: callback
	    });
	  };

	  return Controller;

	})();

	module.exports = new Controller;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Add, Model, controller,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	controller = __webpack_require__(3);

	Model = __webpack_require__(5);

	Add = (function() {
	  function Add() {
	    this.addCategory = bind(this.addCategory, this);
	    this.$categoryAddForm = $('.js-category-add-form');
	    this.categoryModel = new Model({
	      model: this.$categoryAddForm,
	      actions: {
	        insert: this.addCategory
	      }
	    });
	  }

	  Add.prototype.addCategory = function(e) {
	    var $buttonAdd, $form, callback, categoryModel, data;
	    e.preventDefault();
	    categoryModel = this.categoryModel;
	    $form = this.$categoryAddForm;
	    $buttonAdd = $(e.currentTarget);
	    $buttonAdd.prop('disabled', true);
	    data = categoryModel.raw();
	    callback = function(result) {
	      var resultData;
	      resultData = result.data;
	      $buttonAdd.prop('disabled', false);
	      switch (resultData.error) {
	        case 0:
	          categoryModel.clear();
	          return $form.trigger('portfolioCategoryAdd', {
	            id: resultData.result,
	            name: data.name,
	            description: data.desc,
	            link: data.slug,
	            amount: 0
	          });
	        case 1:
	          break;
	        case 2:
	          return $form.find('.js-name-error').text('Название «' + data.name + '» уже используется другой категорией');
	        case 3:
	          return $form.find('.js-slug-error').text('Ярлык «' + data.slug + '» уже используется другой категорией');
	      }
	    };
	    return controller.call('nimyadmin/portfolio/add_category', data, callback);
	  };

	  return Add;

	})();

	module.exports = new Add;


/***/ },
/* 5 */
/***/ function(module, exports) {

	var Model;

	Model = (function() {
	  Model.prototype._modelId = 0;

	  Model.prototype._$fields = {};

	  Model.prototype._actions = {};

	  function Model(options) {
	    var $actions, $fields, $model, actions, model, modelId, self;
	    model = options.model, actions = options.actions;
	    $model = $(model);
	    self = this;
	    self._actions = actions;
	    modelId = $model.attr('data-id');
	    if (modelId != null) {
	      self._modelId = modelId;
	    }
	    $fields = $model.find('[data-field]');
	    $fields.each(function(index, field) {
	      var $field, fieldName;
	      $field = $(field);
	      fieldName = $field.attr('data-field');
	      return self._$fields[fieldName] = $field;
	    });
	    $actions = $model.find('[data-action]');
	    $actions.each(function(index, element) {
	      var $element, action, event;
	      $element = $(element);
	      event = $element.attr('data-event') || 'click';
	      action = $element.attr('data-action');
	      return $element.on(event, self._actions[action]);
	    });
	  }

	  Model.prototype.set = function(fieldName, fieldValue) {
	    var $field, self;
	    self = this;
	    $field = self._$fields[fieldName];
	    if ($field != null) {
	      return $field.val(fieldValue);
	    }
	  };

	  Model.prototype.get = function(fieldName) {
	    var $field, self;
	    self = this;
	    $field = self._$fields[fieldName];
	    if ($field != null) {
	      return $field.val();
	    }
	  };

	  Model.prototype.raw = function() {
	    var $field, name, ref, result, self;
	    self = this;
	    result = {
	      id: self._modelId
	    };
	    ref = self._$fields;
	    for (name in ref) {
	      $field = ref[name];
	      result[name] = $field.val();
	    }
	    return result;
	  };

	  Model.prototype.clear = function() {
	    var $field, name, ref, results, self;
	    self = this;
	    ref = self._$fields;
	    results = [];
	    for (name in ref) {
	      $field = ref[name];
	      results.push($field.val(''));
	    }
	    return results;
	  };

	  return Model;

	})();

	module.exports = Model;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Category, Window, controller,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	controller = __webpack_require__(3);

	Window = __webpack_require__(7);

	Category = (function() {
	  function Category() {
	    this.removeCategory = bind(this.removeCategory, this);
	    this.openWindowRemoveCategory = bind(this.openWindowRemoveCategory, this);
	    var templateWindowDeleteCategory;
	    this.$catListTb = $('#cat-list-tb');
	    templateWindowDeleteCategory = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"admin/templates/window/portfolio/category/remove.tpl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    this.$helperWindowDeleteCategory = new Window({
	      template: templateWindowDeleteCategory,
	      buttons: {
	        remove: function() {
	          return console.log('remove category');
	        }
	      },
	      data: {}
	    });
	    this.sortable(this.$catListTb);
	    this.initEvent();
	  }

	  Category.prototype.initEvent = function() {
	    var $form, $windowDeleteCategory;
	    this.$catListTb.on('portfolioCategoryEdit', this.disableSortable);
	    this.$catListTb.on('portfolioCategoryCancelEdit', this.enableSortable);
	    this.$catListTb.on('click', '.js-button-edit', this.editCategory);
	    this.$catListTb.on('click', '.js-button-cancel-edit', this.cancelEditCategory);
	    this.$catListTb.on('click', '.js-button-save', this.saveEditCategory);
	    this.$catListTb.on('click', '.js-button-remove', this.openWindowRemoveCategory);
	    $windowDeleteCategory = this.$helperWindowDeleteCategory.get();
	    $windowDeleteCategory.on('click', '#delete-category-portfolio', this.removeCategory);
	    $form = $('.js-category-add-form');
	    return $form.on('portfolioCategoryAdd', this.addCategory);
	  };

	  Category.prototype.enableSortable = function() {
	    return $(this).sortable('enable');
	  };

	  Category.prototype.disableSortable = function() {
	    var $buttonCancelEdit, $catListTb;
	    $catListTb = $(this);
	    $buttonCancelEdit = $catListTb.find('.js-button-cancel-edit');
	    $buttonCancelEdit.click();
	    return $catListTb.sortable('disable');
	  };

	  Category.prototype.sortable = function(sortableElement) {
	    return sortableElement.sortable({
	      placeholder: "ui-state-highlight",
	      start: function(e, elem) {
	        var $item;
	        $item = $(elem.item);
	        return $item.css({
	          display: 'inline-table'
	        });
	      },
	      stop: function(e, elem) {
	        var $item, $tr, arrayMenu, data, trClass, trKey;
	        $item = $(elem.item);
	        $item.removeAttr('style');
	        $tr = $(this).find('tr');
	        arrayMenu = [];
	        trClass = ['tg-4eph', 'tg-031e'];
	        trKey = false;
	        $tr.each(function() {
	          var $this;
	          $this = $(this);
	          trKey = !trKey;
	          $this.removeClass('tg-4eph');
	          $this.removeClass('tg-031e');
	          $this.addClass(trClass[trKey ? 1 : 0]);
	          return arrayMenu.push($this.attr('data-id'));
	        });
	        data = {
	          data_id: arrayMenu
	        };
	        return controller.call('nimyadmin/portfolio/sortable_category', data, function() {});
	      }
	    });
	  };

	  Category.prototype.editCategory = function(e) {
	    var $buttonCategoryEdit, $categoryItem, data, html, template;
	    e.preventDefault();
	    $buttonCategoryEdit = $(this);
	    $categoryItem = $buttonCategoryEdit.parents('.js-category-item');
	    $categoryItem.trigger('portfolioCategoryEdit');
	    data = {
	      id: $categoryItem.attr('data-id'),
	      name: $categoryItem.find('.js-name').text(),
	      desc: $categoryItem.find('.js-description').text(),
	      slug: $categoryItem.find('.js-slug').text()
	    };
	    template = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"admin/templates/portfolio/category/edit.tpl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    html = template.fetch(data);
	    $categoryItem.hide();
	    return $categoryItem.after(html);
	  };

	  Category.prototype.cancelEditCategory = function(e) {
	    var $buttonCancelEdit, $categoryItem, $editForm;
	    e.preventDefault();
	    $buttonCancelEdit = $(this);
	    $buttonCancelEdit.trigger('portfolioCategoryCancelEdit');
	    $editForm = $buttonCancelEdit.parents('.js-edit-form');
	    $categoryItem = $buttonCancelEdit.parents('#cat-list-tb').find('.js-category-item[data-id=' + $editForm.attr('data-id') + ']');
	    $categoryItem.show();
	    return $editForm.remove();
	  };

	  Category.prototype.saveEditCategory = function(e) {
	    var $buttonSave, $categoryItem, $editForm, $fieldSet, $tools, callback, data;
	    e.preventDefault();
	    $buttonSave = $(this);
	    $tools = $buttonSave.parents('.js-tools');
	    $editForm = $tools.parents('.js-edit-form');
	    $categoryItem = $buttonSave.parents('#cat-list-tb').find('.js-category-item[data-id=' + $editForm.attr('data-id') + ']');
	    $fieldSet = $editForm.find('.js-fieldset');
	    data = {
	      id: $editForm.attr('data-id'),
	      name: $fieldSet.find('.js-name').val(),
	      desc: $fieldSet.find('.js-description').val(),
	      slug: $fieldSet.find('.js-slug').val()
	    };
	    callback = function(result) {
	      var $error, error;
	      error = result.data;
	      $error = $editForm.find('.js-error');
	      switch (error) {
	        case 0:
	          $categoryItem.trigger('portfolioCategoryCancelEdit');
	          $categoryItem.find('.js-name').text(data.name);
	          $categoryItem.find('.js-description').text(data.desc);
	          $categoryItem.find('.js-slug').text(data.slug);
	          $categoryItem.fadeIn(300);
	          return $editForm.remove();
	        case 1:
	          return $error.show().text('Неизвестная ошибка, попробуйте повторить попытку позже!');
	        case 2:
	          return $error.show().text('Название «' + data.name + '» уже используется другой категорией');
	        case 3:
	          return $error.show().text('Ярлык «' + data.slug + '» уже используется другой категорией');
	      }
	    };
	    return controller.call('nimyadmin/portfolio/save_category', data, callback);
	  };

	  Category.prototype.addCategory = function(e, data) {
	    var $catListTb, $tr, dataTemplate, html, template, trClass, trKey;
	    dataTemplate = {
	      current_field: data
	    };
	    template = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"admin/portfolio/categories/table/list/item.tpl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    html = template.fetch(dataTemplate);
	    $catListTb = $('#cat-list-tb');
	    $catListTb.prepend(html);
	    $tr = $catListTb.find('tr');
	    trClass = ['tg-4eph', 'tg-031e'];
	    trKey = false;
	    return $tr.each(function() {
	      var $this;
	      trKey = !trKey;
	      $this = $(this);
	      $this.removeClass('tg-4eph');
	      $this.removeClass('tg-031e');
	      return $this.addClass(trClass[trKey ? 1 : 0]);
	    });
	  };

	  Category.prototype.openWindowRemoveCategory = function(e) {
	    var $categoryItem, $deleteCategoryPortfolio, $input, $inputName, $modelWindowInput, $modelWindowSpan, $windowDeleteCategory, data;
	    e.preventDefault();
	    $deleteCategoryPortfolio = $('#delete-category-portfolio');
	    $deleteCategoryPortfolio.prop('disabled', true);
	    $inputName = $(e.currentTarget);
	    $categoryItem = $inputName.parents('.js-category-item');
	    data = {
	      name: $categoryItem.find('td.tg-name').text(),
	      id: $categoryItem.attr('data-id')
	    };
	    $windowDeleteCategory = this.$helperWindowDeleteCategory.get();
	    $modelWindowSpan = $windowDeleteCategory.find('span.tg-name');
	    $modelWindowInput = $windowDeleteCategory.find('#tag-id');
	    $modelWindowSpan.text(data.name);
	    $modelWindowInput.val(data.id);
	    $modelWindowInput.attr('placeholder', data.name);
	    $input = $windowDeleteCategory.find('#delete-category #tag-name');
	    $input.focus().val('');
	    this.$helperWindowDeleteCategory.open();
	    return $windowDeleteCategory.off('keyup', '#delete-category .input-edit').on('keyup', '#delete-category .input-edit', function() {
	      $inputName = $(this);
	      $deleteCategoryPortfolio.prop('disabled', true);
	      if ($inputName.val() === data.name) {
	        return $deleteCategoryPortfolio.prop('disabled', false);
	      }
	    });
	  };

	  Category.prototype.removeCategory = function(e) {
	    var $form, $inputId, $this, callback, data;
	    e.preventDefault();
	    $this = $(e.currentTarget);
	    $form = $this.parent().parent();
	    $inputId = $form.find('#tag-id');
	    $this.prop('disabled', true);
	    data = {
	      id: $inputId.val()
	    };
	    callback = function() {
	      var $tr, $trDelete, trClass, trKey;
	      $this.prop('disabled', false);
	      $trDelete = this.$catListTb.find('tr[data-id=' + data.id + ']');
	      $trDelete.remove();
	      $tr = this.$catListTb.find('tr');
	      trClass = ['tg-4eph', 'tg-031e'];
	      trKey = false;
	      $tr.each(function() {
	        trKey = !trKey;
	        $this = $(this);
	        $this.removeClass();
	        return $this.addClass(trClass[trKey != null ? trKey : {
	          1: 0
	        }]);
	      });
	      return this.$helperWindowDeleteCategory.close();
	    };
	    return controller.call('nimyadmin/portfolio/remove_category', data, callback);
	  };

	  return Category;

	})();

	module.exports = new Category;


/***/ },
/* 7 */
/***/ function(module, exports) {

	var Window;

	Window = (function() {
	  function Window(template, buttons) {
	    var $window, html;
	    html = template.fetch();
	    this._$window = $window = $(html);
	    $window.dialog({
	      autoOpen: false,
	      draggable: false,
	      resizable: false,
	      modal: true,
	      minWidth: 460,
	      closeText: '<i class="flaticon-cross5"></i>'
	    });
	    $('body').on('click', '.ui-widget-overlay', function(e) {
	      return $window.dialog("close");
	    });
	  }

	  Window.prototype.open = function() {
	    return this._$window.dialog('open');
	  };

	  Window.prototype.close = function() {
	    return this._$window.dialog('close');
	  };

	  Window.prototype.get = function() {
	    return this._$window;
	  };

	  return Window;

	})();

	module.exports = Window;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var List, controller;

	controller = __webpack_require__(3);

	List = (function() {
	  var text;

	  text = '';

	  function List() {
	    this.portfolioList = $('.js-portfolio-list');
	    this.initEvent();
	  }

	  List.prototype.initEvent = function() {
	    this.portfolioList.on('click', '.js-trash', this.trash);
	    this.portfolioList.on('click', '.js-restore', this.restore);
	    this.portfolioList.on('click', '.js-close-restore', this.closeRestore);
	    this.portfolioList.on('keypress', '.js-title', this.titleBlur);
	    this.portfolioList.on('focus', '.js-title', this.titleEdit);
	    this.portfolioList.on('blur', '.js-title', this.titleSave);
	    this.portfolioList.on('click', '.js-select', this.toggleCategoryList);
	    return this.portfolioList.on('click', '.js-select-list li', this.categorySave);
	  };

	  List.prototype.trash = function(e) {
	    var $buttonTrash, $portfolioItem, callback, data;
	    e.preventDefault();
	    $buttonTrash = $(this);
	    $portfolioItem = $buttonTrash.parents('.js-item');
	    $buttonTrash.prop('disabled', true);
	    data = {
	      id: $portfolioItem.attr('data-id')
	    };
	    callback = function(result) {
	      $buttonTrash.prop('disabled', false);
	      $portfolioItem.before(result.html);
	      return $portfolioItem.slideUp(200);
	    };
	    return controller.call('nimyadmin/portfolio/trash', data, callback);
	  };

	  List.prototype.restore = function(e) {
	    var $buttonRestore, $restoreNotification, callback, data;
	    e.preventDefault();
	    $buttonRestore = $(this);
	    $buttonRestore.prop('disabled', true);
	    $restoreNotification = $buttonRestore.parents('.js-restore-notification');
	    data = {
	      id: $restoreNotification.attr('data-id')
	    };
	    callback = function() {
	      var $portfolioItem;
	      $buttonRestore.prop('disabled', false);
	      $restoreNotification.remove();
	      $portfolioItem = $('.js-item[data-id=' + data.id + ']');
	      return $portfolioItem.slideDown(200);
	    };
	    return controller.call('nimyadmin/portfolio/restore', data, callback);
	  };

	  List.prototype.closeRestore = function(e) {
	    var $buttonCloseRestore, $portfolioItem, $restoreNotification;
	    e.preventDefault();
	    $buttonCloseRestore = $(this);
	    $restoreNotification = $buttonCloseRestore.parents('.js-restore-notification');
	    $portfolioItem = $('.js-item[data-id=' + $restoreNotification.attr('data-id') + ']');
	    $portfolioItem.remove();
	    return $restoreNotification.remove();
	  };

	  List.prototype.titleBlur = function(e) {
	    if (e.keyCode === 13) {
	      return $(this).blur();
	    }
	  };

	  List.prototype.titleEdit = function() {
	    var $portfolioItem, $title;
	    $title = $(this);
	    $portfolioItem = $title.parents('.js-item');
	    text = $title.val();
	    return $portfolioItem.find('.js-title-status-edit').show();
	  };

	  List.prototype.titleSave = function() {
	    var $portfolioItem, $title, $titleStatusEdit, $titleStatusSave, callback, data;
	    $title = $(this);
	    if (text === $title.val()) {
	      return;
	    }
	    $portfolioItem = $title.parents('.js-item');
	    $titleStatusEdit = $portfolioItem.find('.js-title-status-edit');
	    $titleStatusSave = $portfolioItem.find('.js-title-status-save');
	    $titleStatusEdit.hide();
	    $titleStatusSave.show();
	    $title.prop('disabled', true);
	    data = {
	      id: $portfolioItem.attr('data-id'),
	      title: $title.val()
	    };
	    callback = function() {
	      $titleStatusSave.hide();
	      return $title.prop('disabled', false);
	    };
	    return controller.call('nimyadmin/portfolio/title', data, callback);
	  };

	  List.prototype.toggleCategoryList = function(e) {
	    var $portfolioItem, $select, $selectList, $selectStatusEdit;
	    e.preventDefault();
	    $select = $(this);
	    $portfolioItem = $select.parents('.js-item');
	    $selectList = $portfolioItem.find('.js-select-list');
	    $selectStatusEdit = $portfolioItem.find('.js-select-status-edit');
	    if ($selectList.is(':hidden')) {
	      $selectList.slideDown(200);
	      $select.addClass('active');
	      return $selectStatusEdit.show();
	    } else {
	      $selectList.slideUp(200);
	      $select.removeClass('active');
	      return $selectStatusEdit.hide();
	    }
	  };

	  List.prototype.categorySave = function() {
	    var $portfolioItem, $select, $selectList, $selectListElement, $selectListElements, $selectStatusEdit, $selectStatusSave, callback, data, selectResult;
	    $selectListElement = $(this);
	    $portfolioItem = $selectListElement.parents('.js-item');
	    $selectList = $portfolioItem.find('.js-select-list');
	    $select = $portfolioItem.find('.js-select');
	    $selectStatusEdit = $portfolioItem.find('.js-select-status-edit');
	    $selectStatusEdit.hide();
	    $selectStatusSave = $portfolioItem.find('.js-select-status-save');
	    $selectStatusSave.show();
	    $selectListElements = $selectList.find('li');
	    $selectListElements.removeClass('active');
	    $selectListElement.addClass('active');
	    selectResult = $selectListElement.html();
	    $select.removeClass('active').html(selectResult + '<i class="flaticon-chevron8"></i>');
	    $selectList.slideUp(200);
	    $selectListElements.prop('disabled', true);
	    data = {
	      id: $portfolioItem.attr('data-id'),
	      category_link: $selectListElement.text()
	    };
	    callback = function() {
	      $selectStatusSave.hide();
	      return $selectListElements.prop('disabled', false);
	    };
	    return controller.call('nimyadmin/portfolio/category', data, callback);
	  };

	  return List;

	})();

	module.exports = new List;


/***/ }
/******/ ]);