class PortfolioItemView extends Backbone.View

  template: _.template require 'template/admin/portfolio/item.html'

  className: ->
    'row portfolio-item'

  attributes: ->
    {
      'data-key': @model.get('id')
    }

  render: ->
    @$el.html @template @model.toJSON()
    @

module.exports = PortfolioItemView