import * as actionTypes from '../actions/type'

export const tabReducer = (state = actionTypes.ALL_TODO, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_TAB:
            return action.filter; // Correctly return the value from action.filter
        default:
            return state;
    }
}
