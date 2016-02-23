PortfolioCategory = require 'model/PortfolioCategory'

class PortfolioCategories extends Backbone.Collection

  model: PortfolioCategory

  url: '/api/portfolio-categories'

module.exports = new PortfolioCategories