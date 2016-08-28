InputView = require 'view/widget/input'

class Title extends Backbone.View

  tagName: 'span'

  className: 'h2 wrap-header_h2'

  initialize: ()->
    inputView = new InputView {
      className: 'wrap-header_h2_input'
      attributes: {
        placeholder: 'Поиск по заголовку'
        type: 'text'
      }
    }

    @$el.html(inputView.el)

  render: ->
    @

module.exports = Title
