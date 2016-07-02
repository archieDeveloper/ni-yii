UrlManager = require 'helpers/urlManager'

class Page extends Backbone.View

  tagName: 'li'

  urlManager: new UrlManager

  initialize: (options)->
    @pageNumber = options.pageNumber if options?
    @active = options.active if options?

  render: ->
    @urlManager.parseSearch().setSearchParam('page', @pageNumber)
    @$el.html('<a href="' + @urlManager.getPathName() + @urlManager.getSearch() + '">' + @pageNumber + '</a>')
    @$el.addClass('active') if @active
    @

module.exports = Page