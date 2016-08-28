FlatIconView = require 'view/widget/flatIcon'

class Button extends Backbone.View

  tagName: 'a'

  className: 'lll'

  attributesDefault: {
    "data-toggle": "tooltip"
    "data-placement": "bottom"
    "title": ""
    "href": "#"
  }

  initialize: (options)->
    @attributes = _.extend(@attributesDefault, @attributes)
    @$el.attr(@attributes)
    if options['flatIcon']?
      flatIcon = new FlatIconView(options['flatIcon'])
      @$el.html(flatIcon.el)

  render: ->
    @

module.exports = Button
