import AppDispatcher from 'app/dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AppConstants from 'app/constants/AppConstants';

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

function search(query) {
    let searchQuery = query.toLowerCase();
    portfolioItems = data.filter((item) => {
        let searchValue = item.title.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });
}

let CHANGE_EVENT = 'change';

class PortfolioStore extends EventEmitter {
    getAll() {
        return portfolioItems;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    /**
     * @param {function} callback
     */
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

let portfolioStore = new PortfolioStore();

AppDispatcher.register((action) => {
    switch (action.actionType) {
        case AppConstants.PORTFOLIO_SEARCH:
            search(action.query);
            portfolioStore.emitChange();
        break;
    }
});

export default portfolioStore;