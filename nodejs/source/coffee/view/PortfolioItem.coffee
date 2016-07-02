SelectView = require 'view/widget/select'

class PortfolioItemView extends Backbone.View

  template: _.template require 'template/admin/portfolio/item.html'

  initialize: (options)->
    @categories = options.categories if options?

  className: ->
    'row portfolio-item'

  attributes: ->
    {
      'data-key': @model.get('id')
    }

  render: ->
    selectView = new SelectView {
      selectedId: @model.get('category_id')
      collection: @categories
      id: 'portfolio-category_id'
      className: 'form-control'
      attributes: {
        name: 'Portfolio[category_id]'
      }
    }
    selectView.render()
    data = @model.toJSON()
    data["categoriesHTML"] = selectView.el.outerHTML
    @$el.html @template data
    @$el.find('[title]').tooltip();
    @

module.exports = PortfolioItemView