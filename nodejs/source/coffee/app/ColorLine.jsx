class ColorLine extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        //console.log('FlatIcon render! ' + this.props.iconName);
        return (
            <div className="wrap-color-line">
                <div className="wcl-item-1"></div>
                <div className="wcl-item-2"></div>
                <div className="wcl-item-3"></div>
                <div className="wcl-item-4"></div>
                <div className="wcl-item-5"></div>
                <div className="wcl-item-6"></div>
                <div className="wcl-item-7"></div>
            </div>
        );
    };
}

export default ColorLine;
