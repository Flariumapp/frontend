import * as actionTypes from '../action-types';

const initialState = {
    users: [],
    currentUser: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser,
            }
        case actionTypes.USER_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;