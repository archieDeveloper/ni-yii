portfolios = require 'collection/Portfolios'
PortfolioItemView = require 'view/PortfolioItem'

class PortfolioListView extends Backbone.View

  el: '.js-portfolios'

  initialize: ->
    @listenTo portfolios, 'reset', @addAll
    portfolios.fetch {reset: true}

  addAll: ->
    @$el.html('')
    portfolios.each @addOne, @

  addOne: (portfolio)->
    view = new PortfolioItemView { model: portfolio }
    view.render()
    @$el.append(view.el)

module.exports = PortfolioListView