var FlatIcon = require('app/FlatIcon');

class ButtonWithIcon extends React.Component {

    static get defaultProps() {
        return {
            "data-toggle": "tooltip",
            "data-placement": "bottom"
        };
    }

    static get propTypes() {
        return {
            iconName: React.PropTypes.string.isRequired,
            'data-toggle': React.PropTypes.string,
            'data-placement': React.PropTypes.string,
            title: React.PropTypes.string,
            href: React.PropTypes.string
        };
    }

    render() {
        return (
            <a
                className={`button-with-icon${this.props.className ? ` ${this.props.className}` : ''}`}
                onClick={this.props.onClick || null}
                data-toggle={this.props['data-toggle'] || null}
                data-placement={this.props['data-placement'] || null}
                title={this.props['title'] || null}
                href={this.props['href'] || null}
            >
                <FlatIcon iconName={this.props.iconName}/>
            </a>
        );
    };
}

module.exports = ButtonWithIcon;
