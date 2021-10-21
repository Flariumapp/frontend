import { SET_HISTORY, HISTORY_SUCCESS } from '../action-types';

const initialState = {
    history: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORY:
            return {
                ...state,
                history: action.history,
            }
        case HISTORY_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;