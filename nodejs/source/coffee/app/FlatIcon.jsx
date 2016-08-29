class FlatIcon extends React.Component {
    static get propTypes() {
        return {
            iconName: React.PropTypes.string.isRequired
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.iconName !== this.props.iconName;
    }

    render() {
        //console.log('FlatIcon render! ' + this.props.iconName);
        return <i className={`flaticon-${this.props.iconName}`}/>;
    };
}

export default FlatIcon;
