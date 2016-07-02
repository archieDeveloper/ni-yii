Portfolio = require 'model/Portfolio'

class Portfolios extends Backbone.Collection

  model: Portfolio

  byCategory: (category)->
    filtered = @filter (box) ->
      box.get("category_id") == category
    new Portfolios filtered

  url: '/api/portfolio-news?expand=cover'

module.exports = new Portfolios