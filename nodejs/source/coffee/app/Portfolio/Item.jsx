let FlatIcon = require('app/FlatIcon');

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    static get propTypes() {
        return {
            //"id": React.PropTypes.number.isRequired,
            //"category_id": React.PropTypes.number.isRequired,
            //"title": React.PropTypes.string.isRequired,
            //"description": React.PropTypes.string.isRequired,
            //"is_active": React.PropTypes.number.isRequired,
            //"date_create": React.PropTypes.string.isRequired,
            //"date_update": React.PropTypes.string.isRequired
        };
    }

    render() {
        return (
            <div className="row portfolio-item">
                <div className="col-xs-12">
                    <a className="close" href={`/admin/portfolio/delete.html?id=${this.props.data.id}`} title="Удалить" data-method="post">
                        <FlatIcon iconName="cross5"/>
                    </a>
                </div>
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={`/yii2images/images/image-by-item-and-alias.html?item=${this.props.data.cover.modelName}${this.props.data.cover.itemId}&dirtyAlias=${this.props.data.cover.urlAlias}_200x.${this.props.data.cover.fileExtension}`}
                                 alt=""
                                 className="img-rounded img-responsive center-block mb-20"
                            />
                        </div>
                        <div className="col-md-10">
                            <form action="/admin/portfolio/index.html" method="post" role="form">
                                <div className="form-group field-portfolio-category_id">
                                    <label className="control-label" htmlFor="portfolio-category_id">Категория</label>
                                    <select
                                        defaultValue={this.props.data.category.id}
                                        id="portfolio-category_id"
                                        className="form-control"
                                        name="Portfolio[category_id]"
                                    >
                                        <option value="2">Кухни</option>
                                        <option value="1">Детские</option>
                                        <option value="3">Шкафы-купе</option>
                                    </select>
                                    <p className="help-block help-block-error"/>
                                </div>
                                <div className="form-group field-portfolio-title">
                                    <label className="control-label" htmlFor="portfolio-title">Заголовок</label>
                                    <input
                                        type="text"
                                        id="portfolio-title"
                                        className="form-control"
                                        name="Portfolio[title]"
                                        defaultValue={this.props.data.title}
                                    />
                                    <p className="help-block help-block-error"/>
                                </div>
                                <div className="form-group field-portfolio-description">
                                    <label className="control-label" htmlFor="portfolio-description">Описание</label>
                                    <textarea
                                        id="portfolio-description"
                                        className="form-control"
                                        name="Portfolio[description]"
                                        defaultValue={this.props.data.description}
                                    />
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
