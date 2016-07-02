#$(document).ready ->
#  requireControllerIndex = {}
#  $('[data-controller]').each (index, elem)->
#    requireControllerIndex[$(elem).attr('data-controller')] = true
#  requireControllers = Object.keys requireControllerIndex
#
#  requireControllers.forEach (controllerPath, index, thisList)->
#    require 'controllers/'+controllerPath

#  require 'controllers/admin/portfolio/index'
#  require 'controllers/admin/portfolio/category'
#  require 'controllers/admin/portfolio/articles'


#pCollection = require 'collection/PortfolioCategories'
#PView = require 'view/PortfolioCategoriesSelect'
#
#pCollection.fetch().then ->
#  view = new PView {collection: pCollection}
#  console.dir(view.el)



#
#PortfolioListView = require 'view/PortfolioList'
#
#new PortfolioListView

#portfolioCategories = require 'collection/PortfolioCategories'
#SelectView = require 'view/widget/select'
#
#portfolioCategories.fetch().then ->
#  selectView = new SelectView {
#    selectedId: 2
#
#    collection: portfolioCategories
#    id: 'portfolio-category_id'
#    className: 'form-control'
#    attributes: {
#      name: 'Portfolio[category_id]'
#    }
#  }
#  selectView.render()


PortfolioListView = require 'view/PortfolioList'
#portfolioListView = new PortfolioListView
portfolios = require 'collection/Portfolios'
page = 1
$('.js-show-previous').on 'click', ->
  page += 1
  portfolios.fetch {reset: true, data: $.param({page: page})}






  #portfolioListView.render()
PaginationView = require 'view/widget/pagination'
paginationView = new PaginationView {
  pageCount: 2
  perPage: 5
  totalCount: 8
  currentPage: 1
}
paginationView.render()
#$('body').html(paginationView.el)
