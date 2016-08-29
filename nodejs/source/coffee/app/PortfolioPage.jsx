import Header from 'app/Header';
import Portfolio from 'app/Portfolio';
import FlatIcon from 'app/FlatIcon';

let data = [
    {
        "id": 1,
        "category_id": 1,
        "title": "Первая работа",
        "description": "Очень хороша",
        "is_active": 1,
        "date_create": "2016-02-07 11:03:57",
        "date_update": "2016-02-07 11:03:57",
        "category": {
            "id": 1,
            "link": "children",
            "name": "Детские",
            "description": "Детские комнаты на любой вкус",
            "position": 2,
            "date_create": "2016-01-26 04:36:14",
            "date_update": "2016-01-26 04:36:14"
        },
        "cover": null
    },
    {
        "id": 2,
        "category_id": 2,
        "title": "Вторая чудная работа",
        "description": "Просто прелесть",
        "is_active": 0,
        "date_create": "2016-08-26 19:31:48",
        "date_update": "2016-08-26 19:31:48",
        "category": {
            "id": 2,
            "link": "kjdfs",
            "name": "Кухни",
            "description": "Отличные кухни",
            "position": 1,
            "date_create": "2016-01-26 05:44:33",
            "date_update": "2016-01-26 05:44:33"
        },
        "cover": null
    },
    {
        "id": 17,
        "category_id": 1,
        "title": "Archie",
        "description": "С изображением",
        "is_active": 1,
        "date_create": "2016-02-05 20:23:56",
        "date_update": "2016-02-05 20:23:56",
        "category": {
            "id": 1,
            "link": "children",
            "name": "Детские",
            "description": "Детские комнаты на любой вкус",
            "position": 2,
            "date_create": "2016-01-26 04:36:14",
            "date_update": "2016-01-26 04:36:14"
        },
        "cover": {
            "id": 4,
            "filePath": "Portfolios/Portfolio17/10e0a9.jpg",
            "itemId": 17,
            "isMain": 1,
            "modelName": "Portfolio",
            "urlAlias": "5b1990114e-1",
            "name": ""
        }
    },
    {
        "id": 18,
        "category_id": 1,
        "title": "asdfsadf",
        "description": "yyyyyy yy yy y h",
        "is_active": 1,
        "date_create": "2016-02-07 11:04:01",
        "date_update": "2016-02-07 11:04:01",
        "category": {
            "id": 1,
            "link": "children",
            "name": "Детские",
            "description": "Детские комнаты на любой вкус",
            "position": 2,
            "date_create": "2016-01-26 04:36:14",
            "date_update": "2016-01-26 04:36:14"
        },
        "cover": null
    },
    {
        "id": 19,
        "category_id": 1,
        "title": "sdfgdsf",
        "description": "yyyy y y y yyyy",
        "is_active": 1,
        "date_create": "2016-02-05 20:24:18",
        "date_update": "2016-02-05 20:24:18",
        "category": {
            "id": 1,
            "link": "children",
            "name": "Детские",
            "description": "Детские комнаты на любой вкус",
            "position": 2,
            "date_create": "2016-01-26 04:36:14",
            "date_update": "2016-01-26 04:36:14"
        },
        "cover": {
            "id": 5,
            "filePath": "Portfolios/Portfolio19/cd7828.jpg",
            "itemId": 19,
            "isMain": 1,
            "modelName": "Portfolio",
            "urlAlias": "e61de5cc0e-1",
            "name": ""
        }
    },
    {
        "id": 20,
        "category_id": 1,
        "title": "archie",
        "description": "fghfgh",
        "is_active": 1,
        "date_create": "2016-02-05 20:25:18",
        "date_update": "2016-02-05 20:25:18",
        "category": {
            "id": 1,
            "link": "children",
            "name": "Детские",
            "description": "Детские комнаты на любой вкус",
            "position": 2,
            "date_create": "2016-01-26 04:36:14",
            "date_update": "2016-01-26 04:36:14"
        },
        "cover": {
            "id": 6,
            "filePath": "Portfolios/Portfolio20/7db645.jpg",
            "itemId": 20,
            "isMain": 1,
            "modelName": "Portfolio",
            "urlAlias": "0e18f9a52d-1",
            "name": ""
        }
    },
    {
        "id": 21,
        "category_id": 1,
        "title": "new window",
        "description": "new window for callback",
        "is_active": 1,
        "date_create": "2016-02-07 11:04:29",
        "date_update": "2016-02-07 11:04:29",
        "category": {
            "id": 1,
            "link": "children",
            "name": "Детские",
            "description": "Детские комнаты на любой вкус",
            "position": 2,
            "date_create": "2016-01-26 04:36:14",
            "date_update": "2016-01-26 04:36:14"
        },
        "cover": {
            "id": 7,
            "filePath": "Portfolios/Portfolio21/d71fbd.png",
            "itemId": 21,
            "isMain": 1,
            "modelName": "Portfolio",
            "urlAlias": "b0c7aa0402-1",
            "name": ""
        }
    },
    {
        "id": 22,
        "category_id": 3,
        "title": "ывапыва",
        "description": "выапвыа",
        "is_active": 1,
        "date_create": "2016-02-07 11:04:02",
        "date_update": "2016-02-07 11:04:02",
        "category": {
            "id": 3,
            "link": "lol",
            "name": "Шкафы-купе",
            "description": "Большие шкафы",
            "position": 3,
            "date_create": null,
            "date_update": null
        },
        "cover": {
            "id": 8,
            "filePath": "Portfolios/Portfolio22/d0c9d3.png",
            "itemId": 22,
            "isMain": 1,
            "modelName": "Portfolio",
            "urlAlias": "abf7e2a7f4-1",
            "name": ""
        }
    },
    {
        "id": 23,
        "category_id": 1,
        "title": "sdfsd",
        "description": "sdfsdf sdf sd",
        "is_active": 0,
        "date_create": "2016-06-30 19:27:56",
        "date_update": "2016-06-30 19:27:56",
        "category": {
            "id": 1,
            "link": "children",
            "name": "Детские",
            "description": "Детские комнаты на любой вкус",
            "position": 2,
            "date_create": "2016-01-26 04:36:14",
            "date_update": "2016-01-26 04:36:14"
        },
        "cover": {
            "id": 9,
            "filePath": "Portfolios/Portfolio23/3860d2.jpg",
            "itemId": 23,
            "isMain": 1,
            "modelName": "Portfolio",
            "urlAlias": "ff4b3ffb64-1",
            "name": ""
        }
    }
];
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
let portfolioItems = data.map((item) => {
    if (item['cover'] == null) {
        item['cover'] = {
            modelName:'',
            itemId:'',
            fileExtension: 'png',
            urlAlias:"placeHolder"
        };
    } else {
        let re = /(?:\.([^.]+))?$/;
        item['cover']['fileExtension'] = re.exec(item['cover']['filePath'])[1];
    }
    return item;
});
class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayPortfolio: portfolioItems
        };
        this.handleSearchQuery = this.handleSearchQuery.bind(this);
        this.handleCloseSearch = this.handleCloseSearch.bind(this);
    }

    handleSearchQuery(event) {
        let searchQuery = event.target.value.toLowerCase();
        let displayedPortfolio = portfolioItems.filter((item) => {
            let searchValue = item.title.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayPortfolio: displayedPortfolio
        });
    }

    handleCloseSearch(event) {
        this.setState({
            displayPortfolio: portfolioItems
        })
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
                <Portfolio data={this.state.displayPortfolio}/>

                <icons style={{zoom: 2, marginBottom: 50 + 'px', display: 'block'}}>
                    {icons}
                </icons>
            </div>
        );
    };
}

export default PortfolioPage;
