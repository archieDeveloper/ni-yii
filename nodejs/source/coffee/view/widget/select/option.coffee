class Option extends Backbone.View

  tagName: 'option'

  render: ->
    @$el.html @model.get('name')
    @

module.exports = Option