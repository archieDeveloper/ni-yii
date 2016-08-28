class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {
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
                "fileExtension": "jpg",
                "itemId": 23,
                "isMain": 1,
                "modelName": "Portfolio",
                "urlAlias": "ff4b3ffb64-1",
                "name": ""
            }
        };
    }

    static get propTypes() {
        return {
            "id": React.PropTypes.number.isRequired,
            "category_id": React.PropTypes.number.isRequired,
            "title": React.PropTypes.string.isRequired,
            "description": React.PropTypes.string.isRequired,
            "is_active": React.PropTypes.number.isRequired,
            "date_create": React.PropTypes.string.isRequired,
            "date_update": React.PropTypes.string.isRequired
        };
    }

    render() {
        return (
            <div className="row portfolio-item">
                <div className="col-xs-12">
                    <a className="close" href={`/admin/portfolio/delete.html?id=${this.props.id}`} title="Удалить" data-method="post"><span
                        aria-hidden="true">×</span></a></div>
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={`/yii2images/images/image-by-item-and-alias.html?item=${this.props.cover.modelName}${this.props.cover.itemId}&dirtyAlias=${this.props.cover.urlAlias}_200x.${this.props.cover.fileExtension}`}
                                 alt="" className="img-rounded img-responsive center-block mb-20"/>
                        </div>
                        <div className="col-md-10">
                            <form action="/admin/portfolio/index.html" method="post" role="form">
                                <div className="form-group field-portfolio-category_id">
                                    <label className="control-label" htmlFor="portfolio-category_id">Категория</label>
                                    <select defaultValue={this.props.category.id} id="portfolio-category_id" className="form-control" name="Portfolio[category_id]">
                                        <option value="2">Кухни</option>
                                        <option value="1">Детские</option>
                                        <option value="3">Шкафы-купе</option>
                                    </select>
                                    <p className="help-block help-block-error"/>
                                </div>
                                <div className="form-group field-portfolio-title">
                                    <label className="control-label" htmlFor="portfolio-title">Заголовок</label>
                                    <input type="text" id="portfolio-title" className="form-control" name="Portfolio[title]"
                                           defaultValue={this.props.title}/>
                                    <p className="help-block help-block-error"/>
                                </div>
                                <div className="form-group field-portfolio-description">
                                    <label className="control-label" htmlFor="portfolio-description">Описание</label>
                                    <textarea id="portfolio-description" className="form-control" name="Portfolio[description]" defaultValue={this.props.description}/>
                                    <p className="help-block help-block-error"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

module.exports = Item;

var lal = {
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
        "fileExtension": "jpg",
        "itemId": 23,
        "isMain": 1,
        "modelName": "Portfolio",
        "urlAlias": "ff4b3ffb64-1",
        "name": ""
    }
};
//var re = /(?:\.([^.]+))?$/;
//var ext = re.exec(cover.filePath)[1];


