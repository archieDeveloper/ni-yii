var Item = require('app/Portfolio/Item');

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ajs-portfolios">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        );
    };
}

module.exports = Portfolio;
