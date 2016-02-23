class Portfolio extends Backbone.Model

  defaults: ->
    {
      id: 0,
      category_id: 0,
      title: '',
      description: ''
    }

module.exports = Portfolio