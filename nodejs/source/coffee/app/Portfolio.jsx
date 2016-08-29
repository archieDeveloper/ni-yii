var Item = require('app/Portfolio/Item');

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let portfolioItems = this.props.data.map((item) => {
            return (
                <Item key={item['id']} data={item}/>
            );
        });

        return (
            <div className="ajs-portfolios">
                {portfolioItems}
            </div>
        );
    };
}

module.exports = Portfolio;
