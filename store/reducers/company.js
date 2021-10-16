import { SET_COMPANY, COMPANY_SUCCESS } from '../action-types';

const initialState = {
    companies: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COMPANY:
            return {
                ...state,
                companies: action.companies,
            }
        case COMPANY_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;