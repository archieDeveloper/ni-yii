PageView = require 'view/widget/pagination/page'

class Pagination extends Backbone.View

  tagName: 'ul'

  className: 'pagination'

  initialize: (options)->
    @currentPage = options.currentPage if options?
    @totalCount = options.totalCount if options?
    @perPage = options.perPage if options?
    @pageCount = options.pageCount if options?

  render: ->
    @$el.html('')

    @renderOne(@currentPage - 1)
    for pageNumber in [1..@pageCount]
      @renderOne(pageNumber)
    @renderOne(@currentPage + 1)

  renderOne: (pageNumber)=>
    pageView = new PageView {
      pageNumber: pageNumber
      active: pageNumber == @currentPage
    }
    pageView.render()
    @$el.append(pageView.el)

module.exports = Pagination