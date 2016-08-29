import Separator from 'app/Separator';
import ButtonWithIcon from 'app/ButtonWithIcon';

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
                    <li><a href="/admin.html"><span className="glyphicon glyphicon-dashboard nav-glyphicon" aria-hidden="true"/>Консоль</a></li>
                    <Separator/>
                    <li><a href="/admin/pages.html"><span className="glyphicon glyphicon-duplicate nav-glyphicon" aria-hidden="true"/>Страницы</a></li>
                    <li>
                        <a href="/admin/portfolio.html"><span className="glyphicon glyphicon-briefcase nav-glyphicon" aria-hidden="true"/>Выполненные работы</a>
                    </li>
                    <li>
                        <a href="/admin/articles.html"><span className="glyphicon glyphicon-align-left nav-glyphicon" aria-hidden="true"/>Статьи</a>
                    </li>
                    <li><a href="/admin/contacts.html"><span className="glyphicon glyphicon-phone nav-glyphicon" aria-hidden="true"/>Контакты</a></li>
                    <li><a href="/admin/feedback.html"><span className="glyphicon glyphicon-headphones nav-glyphicon" aria-hidden="true"/>Обратная связь</a></li>
                    <Separator/>
                    <li><a href="/admin/feedback.html"><span className="glyphicon glyphicon-user nav-glyphicon" aria-hidden="true"/>Модераторы</a></li>
                    <li><a href="/admin/feedback.html"><span className="glyphicon glyphicon-cog nav-glyphicon" aria-hidden="true"/>Настройки</a></li>
                </ul>
            </div>
        );
    };
}

export default SideBar;
