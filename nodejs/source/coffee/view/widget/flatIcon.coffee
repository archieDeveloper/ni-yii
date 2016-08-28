class FlatIcon extends Backbone.View

  tagName: 'i'

  initialize: (name)->
    @className = 'flaticon-' + name
    @$el.addClass @className

  render: ->
    @

module.exports = FlatIcon
