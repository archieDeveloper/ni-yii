import AppDispatcher from 'app/dispatcher/AppDispatcher';
import AppConstants from 'app/constants/AppConstants';

let AppActions = {
    search(query) {
        AppDispatcher.dispatch({
            actionType: AppConstants.PORTFOLIO_SEARCH,
            query: query
        })
    },

    clearSearch() {
        AppDispatcher.dispatch({
            actionType: AppConstants.PORTFOLIO_CLEAR_SEARCH
        })
    }
};

export default AppActions;