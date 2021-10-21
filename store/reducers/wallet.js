import { SET_WALLET, WALLET_SUCCESS } from '../action-types';

const initialState = {
    wallet: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WALLET:
            return {
                ...state,
                wallet: action.wallet,
            }
        case WALLET_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;