Model = require 'class/model'

class Portfolio extends Model

  fields: [
    'title',
    'description',
    'category_id',
  ]

  actions: {
    update: @update
  }

  update: (e)=>
    do e.preventDefault

module.exports = Portfolio