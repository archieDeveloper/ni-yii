import AppDispatcher from 'app/dispatcher/AppDispatcher';
import AppConstants from 'app/constants/AppConstants';

let AppActions = {
    // Example action
    //updateText: function(id, text) {
    //    AppDispatcher.dispatch({
    //        actionType: TodoConstants.TODO_UPDATE_TEXT,
    //        id: id,
    //        text: text
    //    });
    //},

    search(query) {
        AppDispatcher.dispatch({
            actionType: AppConstants.PORTFOLIO_SEARCH,
            query: query
        })
    }
};

export default AppActions;