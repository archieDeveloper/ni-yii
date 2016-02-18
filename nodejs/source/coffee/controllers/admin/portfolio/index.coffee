controller = require 'helpers/controller'
portfolioModel = require 'models/portfolio'

class Index

  constructor: ->
    m = new portfolioModel({
      model: $('#w0 [data-model=portfolio]')
    })
    console.log(m.raw())

module.exports = new Index