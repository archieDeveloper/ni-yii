portfolios = require 'collection/Portfolios'
portfolioCategories = require 'collection/PortfolioCategories'
PortfolioItemView = require 'view/PortfolioItem'

class PortfolioListView extends Backbone.View

  el: '.js-portfolios'

  page: 1

  initialize: ()->
    @listenTo portfolioCategories, 'reset', @fetchPortfolio
    portfolioCategories.fetch {reset: true}

  fetchPortfolio: ->
    @listenTo portfolios, 'reset', @addAll
    portfolios.fetch {
      reset: true,
      success: (collection, response, options)->
        console.log(response)
        console.log options.xhr.getAllResponseHeaders()
        console.log options.xhr.getResponseHeader('X-Pagination-Current-Page')
    }


  addAll: ->
    console.log(portfolios)
    portfolios.each @addOne, @

  addOne: (portfolio)->
    view = new PortfolioItemView {
      model: portfolio
      categories: portfolioCategories
    }
    view.render()
    @$el.append(view.el)

module.exports = PortfolioListView