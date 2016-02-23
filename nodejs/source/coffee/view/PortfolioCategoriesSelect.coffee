class PortfolioCategoriesSelectView extends Backbone.View

  initialize: ->
    @html = ''
    @render()

  tagName: 'option'

  render: ->
    @collection.each @renderOne, @
    @$el.html(@html)
    @

  renderOne: (portfolioCategory)->
    @$el.html portfolioCategory.get('name')
    @html += @$el.wrap('div').parent().html()

module.exports = PortfolioCategoriesSelectView