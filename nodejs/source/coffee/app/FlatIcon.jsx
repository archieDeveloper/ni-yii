class FlatIcon extends React.Component {
    static get propTypes() {
        return {
            iconName: React.PropTypes.string.isRequired
        };
    }
    render() {
        return <i className={`flaticon-${this.props.iconName}`}/>;
    };
}

module.exports = FlatIcon;
