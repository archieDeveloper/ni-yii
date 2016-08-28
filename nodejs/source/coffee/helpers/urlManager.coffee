class UrlManager

  constructor: ->
    do @parseSearch

  # Private Methods

  search = {}

  # Public Methods

  parseSearch: ->
    $_GET = {}
    __GET = window.location.search.substring(1).split("&")
    for i in [0...__GET.length]
      getVar = __GET[i].split("=")
      continue if !getVar[0]
      $_GET[getVar[0]] = if typeof(getVar[1]) == "undefined" then "" else getVar[1]
    search = $_GET
    @

  setSearchParam: (key, value)->
    search[key] = value
    @

  unsetSearchParam: (key)->
    delete search[key]
    @

  setSearchParams: (params)->
    for key, value of params
      @setSearchParam(key, value)
    @

  unsetSearchParams: (params)->
    for index, key of params
      @unsetSearchParam(value)
    @

  getSearch: ->
    searchStr = ''
    first = true
    for key, value of search
      searchStr += (if first == true then '?' else '&') + key + (if value then '=' + value else '')
      first = false
    searchStr
  getPathName: ->
    window.location.pathname

module.exports = UrlManager