ButtonView = require 'view/widget/header/button'
TitleView = require 'view/widget/header/title'

class Header extends Backbone.View

  tagName: 'div'

  className: 'wrap-header'

  initialize: ()->
    buttonAddView = new ButtonView {
      flatIcon: 'plus13'
      attributes: {
        title: 'Добавить работу'
        href: '/portfolio/create.html'
      }
    }
    buttonSearchView = new ButtonView {
      flatIcon: 'search6'
      attributes: {
        title: 'Поиск'
      }
    }
    titleView = new TitleView
    @$el.append(buttonAddView.el)
    @$el.append(buttonSearchView.el)
    @$el.append(titleView.el)

  render: ->
    @

module.exports = Header