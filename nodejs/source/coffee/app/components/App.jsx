import ColorLine from 'app/components/ColorLine';
import SideBar from 'app/components/SideBar';
import PortfolioPage from 'app/components/PortfolioPage';

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

export default App;
