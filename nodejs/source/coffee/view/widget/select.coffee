OptionView = require 'view/widget/select/option'

class Select extends Backbone.View

  tagName: 'select'

  initialize: (options)->
    @selectedId = options.selectedId if options?

  render: ->
    @$el.html('')
    @collection.each @renderOne

  renderOne: (option)=>
    optionId = option.get('id')
    optionView = new OptionView {
      model: option
      attributes: {
        selected: optionId == @selectedId
        value: optionId
      }
    }
    optionView.render()
    @$el.append(optionView.el)

module.exports = Select