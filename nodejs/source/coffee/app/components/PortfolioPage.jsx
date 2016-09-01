import Header from 'app/components/Header';
import Portfolio from 'app/components/Portfolio';
import FlatIcon from 'app/components/FlatIcon';

import PortfolioStore from 'app/stores/PortfolioStore';
import AppActions from 'app/actions/AppActions';

let iconNames = [
    'align7',
    'arrow63',
    'arrow64',
    'arrow73',
    'arrows4',
    'ascendant',
    'attachment3',
    'checkmark2',
    'chevron8',
    'circle9',
    'clockwise',
    'cloud14',
    'code3',
    'conversation1',
    'cross5',
    'days',
    'direction1',
    'down5',
    'down6',
    'download12',
    'edit4',
    'export',
    'eye8',
    'feed',
    'folder24',
    'forward1',
    'frontal',
    'gaming',
    'gear',
    'graph3',
    'graph7',
    'graph8',
    'headset1',
    'heart10',
    'help2',
    'home11',
    'info6',
    'justify',
    'left11',
    'left16',
    'left17',
    'line4',
    'loading',
    'location12',
    'lock5',
    'loop4',
    'mail5',
    'map4',
    'media11',
    'media12',
    'menu10',
    'microphone6',
    'mobile5',
    'mobile7',
    'move5',
    'multimedia1',
    'new8',
    'next5',
    'note3',
    'open15',
    'open16',
    'outline3',
    'outlined',
    'phone14',
    'photo7',
    'plus13',
    'print1',
    'question2',
    'rectangular1',
    'reply2',
    'reply4',
    'return5',
    'retweet1',
    'search6',
    'star11',
    'stop4',
    'tablet4',
    'tablet5',
    'text15',
    'text2',
    'thin2',
    'thin6',
    'thumbs9',
    'thumbup',
    'trash3',
    'triangle4',
    'upload8',
    'user14',
    'user15',
    'view',
    'view2',
    'view3',
    'volume12',
    'volume5',
    'indow12'
];
let icons = iconNames.map((icon, key) => {
    return <FlatIcon key={key} iconName={icon}/>
});
class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getStateFromStore();
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.handleCloseSearch = this.handleCloseSearch.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
    }

    getStateFromStore() {
        return {
            allPortfolio: PortfolioStore.getAll()
        }
    }

    componentDidMount() {
        PortfolioStore.addChangeListener(this.onChangeState);
    }

    componentWillUnmount() {
        PortfolioStore.removeChangeListener(this.onChangeState);
    }

    onChangeState() {
        this.setState(this.getStateFromStore());
    }

    handleSearchQuery(event) {
        AppActions.search(event.target.value);
    }

    handleCloseSearch(event) {
        AppActions.clearSearch();
    }

    render() {
        return (
            <div className="container-fluid wrap-container">
                <Header
                    titleText="Выполненные работы"
                    titleSearch="Поиск по заголовку"
                    onChangeSearchQuery={this.handleSearchQuery}
                    onCloseSearch={this.handleCloseSearch}
                />
                <Portfolio data={this.state.allPortfolio}/>

                <icons style={{zoom: 2, marginBottom: 50 + 'px', display: 'block'}}>
                    {icons}
                </icons>
            </div>
        );
    };
}

export default PortfolioPage;
