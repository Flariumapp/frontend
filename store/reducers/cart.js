import { SET_CART, CART_SUCCESS, ADD_TO_CART, UPDATE_CART_ITEM, DELETE_CART_ITEM, RESET_CART  } from '../action-types';

const initialState = {
    ids: [],
    carts: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                carts: action.carts,
            };
        case ADD_TO_CART:
            return {
                ...state,
                carts: [...state.carts, action.cart],
                ids: [...state.ids, action.cart.id],
            };
        case UPDATE_CART_ITEM:
            const updatedCarts = state.carts;
            const cartIndex = updatedCarts.findIndex(cart => cart.id === action.id);
            updatedCarts[cartIndex] = action.cart;
            return {
                ...state,
                carts: updatedCarts,
            };
        case DELETE_CART_ITEM:
            const cartAfterDeletion = state.carts.filter(cart => cart.id !== action.id);
            const updatedIds = state.carts.filter(id => id !== action.id);
            return {
                ...state,
                carts: cartAfterDeletion,
                ids: updatedIds,
            }
        case RESET_CART:
            return {
                ...state,
                carts: [],
                ids: [],
            }
        case CART_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;