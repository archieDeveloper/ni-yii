let ColorLine = require('app/ColorLine');
let SideBar = require('app/SideBar');
let PortfolioPage = require('app/PortfolioPage');

class App extends React.Component {
    render() {
        return (
            <div>
                <ColorLine/>
                <SideBar/>
                <PortfolioPage/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('hhh'));
