import ButtonWithIcon from 'app/ButtonWithIcon';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modeSearch: false
        };
        this.toggleModeSearch = this.toggleModeSearch.bind(this);
    }

    static get propTypes() {
        return {
            titleText: React.PropTypes.string.isRequired,
            titleSearch: React.PropTypes.string.isRequired,
            onCloseSearch: React.PropTypes.func,
            onChangeSearchQuery: React.PropTypes.func
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.modeSearch !== this.state.modeSearch;
    }

    componentDidUpdate() {
        if (this.state.modeSearch) {
            this.refs.searchInput.focus();
        } else {
            ReactDOM.findDOMNode(this.refs.searchButton).blur();
        }
    }

    toggleModeSearch(event) {
        event.preventDefault();
        this.setState({
            modeSearch: !this.state.modeSearch
        });
        let isExistCloseSearch = this.props.onCloseSearch != null;
        let isFunctionCloseSearch = typeof this.props.onCloseSearch === 'function';
        if (isExistCloseSearch && isFunctionCloseSearch) {
            this.props.onCloseSearch();
        }
    }

    render() {
        console.log('Header render!');
        return (
            <div className="wrap-header">
                <ButtonWithIcon
                    title="Меню"
                    iconName={this.state.modeSearch ? 'thin6' : 'menu10'}
                    href="/admin/portfolio/create.html"
                    className="left menu"
                />
                <ButtonWithIcon
                    title="Добавить работу"
                    iconName="plus13"
                    href="/admin/portfolio/create.html"
                />
                <ButtonWithIcon
                    title="Поиск"
                    ref="searchButton"
                    iconName={this.state.modeSearch ? 'cross5' : 'search6'}
                    href="?search"
                    onClick={this.toggleModeSearch}
                />
                <span className='h2 wrap-header_h2'>
                    {
                        this.state.modeSearch
                            ? <input
                                  ref="searchInput"
                                  className="wrap-header_h2_input"
                                  type="text"
                                  placeholder={this.props.titleSearch}
                                  onChange={this.props.onChangeSearchQuery}
                              />
                            : this.props.titleText
                    }
                </span>
            </div>
        );
    };
}

export default Header;
