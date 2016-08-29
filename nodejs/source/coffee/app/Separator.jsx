class Separator extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        //console.log('FlatIcon render! ' + this.props.iconName);
        return <li className="separator"/>;
    };
}

export default Separator;
