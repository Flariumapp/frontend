import { ORDER_SUCCESS, SET_ORDERS } from '../action-types';

const initialState = {
    orders: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.orders,
            }
        case ORDER_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;