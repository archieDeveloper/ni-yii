class List

  rootElement: null

  items: null

  constructor: ->
    @rootElement = $('.js-portfolios')
    @items = @rootElement.find("[data-model=portfolio]")
    console.log(@items)

module.exports = List