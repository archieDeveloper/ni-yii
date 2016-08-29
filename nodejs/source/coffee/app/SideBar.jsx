let Separator = require('app/Separator');
let ButtonWithIcon = require('app/ButtonWithIcon');

class SideBar extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        //console.log('FlatIcon render! ' + this.props.iconName);
        return (
            <div className="wrap-sidebar">
                <div className="logo">
                    <span className="logo-header">Админка</span>
                    <ButtonWithIcon iconName="export" title="Просмотреть сайт" href="/" className="go-home" target="_blank"/>
                </div>
                <ul className="nav">
                    <li><a href="/{$this-&gt;context-&gt;module-&gt;id}.html"><span className="glyphicon glyphicon-dashboard nav-glyphicon" aria-hidden="true"></span>Консоль</a></li>
                    <Separator/>
                    <li><a href="/{$this-&gt;context-&gt;module-&gt;id}/pages.html"><span className="glyphicon glyphicon-duplicate nav-glyphicon" aria-hidden="true"></span>Страницы</a></li>
                    <li>
                        <a href="/{$this-&gt;context-&gt;module-&gt;id}/portfolio.html"><span className="glyphicon glyphicon-briefcase nav-glyphicon" aria-hidden="true"></span>Выполненные работы</a>
                    </li>
                    <li>
                        <a href="/{$this-&gt;context-&gt;module-&gt;id}/articles.html"><span className="glyphicon glyphicon-align-left nav-glyphicon" aria-hidden="true"></span>Статьи</a>
                    </li>
                    <li><a href="/{$this-&gt;context-&gt;module-&gt;id}/contacts.html"><span className="glyphicon glyphicon-phone nav-glyphicon" aria-hidden="true"></span>Контакты</a></li>
                    <li><a href="/{$this-&gt;context-&gt;module-&gt;id}/feedback.html"><span className="glyphicon glyphicon-headphones nav-glyphicon" aria-hidden="true"></span>Обратная связь</a></li>
                    <Separator/>
                    <li><a href="/{$this-&gt;context-&gt;module-&gt;id}/feedback.html"><span className="glyphicon glyphicon-user nav-glyphicon" aria-hidden="true"></span>Модераторы</a></li>
                    <li><a href="/{$this-&gt;context-&gt;module-&gt;id}/feedback.html"><span className="glyphicon glyphicon-cog nav-glyphicon" aria-hidden="true"></span>Настройки</a></li>
                </ul>
            </div>
        );
    };
}

module.exports = SideBar;
