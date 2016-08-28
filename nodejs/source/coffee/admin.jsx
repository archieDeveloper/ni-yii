var Header = require('app/Header');
var Portfolio = require('app/Portfolio');

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header titleText="Выполненные работы" titleSearch="Поиск по заголовку"/>
                <Portfolio/>
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.getElementById('hhh'));
