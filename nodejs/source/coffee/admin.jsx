import ColorLine from 'app/ColorLine';
import SideBar from 'app/SideBar';
import PortfolioPage from 'app/PortfolioPage';

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
