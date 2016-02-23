Portfolio = require 'model/Portfolio'

class Portfolios extends Backbone.Collection

  model: Portfolio

  url: '/api/portfolios'

module.exports = new Portfolios