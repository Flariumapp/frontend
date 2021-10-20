import axios from '../../axios-config';
import { ADD_TO_CART, CART_SUCCESS, DELETE_CART_ITEM, RESET_CART, SET_CART, UPDATE_CART_ITEM } from "../action-types";
import { header } from '../../utility/header';

export const fetchCart = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('cart', header(token));
            const { carts } = response.data;
            dispatch(setCart(carts));
        } catch (err) {
            throw err;
        }
    }
}

const setCart = (carts) => {
    return {
        type: SET_CART,
        carts,
    };
}

export const addCart = (token, cartData) => {
    return async dispatch => {
        try {
            const response = await axios.post('cart', cartData, header(token));
            const { cart } = response.data;
            dispatch(addToCart(cart));
        } catch (err) {
            throw err;
        }
    }
}

const addToCart = (cart) => {
    return {
        type: ADD_TO_CART,
        cart,
    };
}

export const updateCart = (token, id, cartData) => {
    return async dispatch => {
        try {
            const response = await axios.put('cart/' + id, cartData, header(token));
            const { cart } = response.data;
            dispatch(updateCartItem(id, cart));
        } catch (err) {
            throw err;
        }
    }
}

const updateCartItem = (id, updatedCart) => {
    return {
        type: UPDATE_CART_ITEM,
        id,
        cart: updatedCart,
    };  
}

export const deleteCart = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('cart/' + id, header(token));
            dispatch(deleteCartItem(id));
        } catch (err) {
            throw err;
        }
    }
}

const deleteCartItem = (id) => {
    return {
        type: DELETE_CART_ITEM,
        id,
    };
}

export const resetCart = () => {
    return dispatch => {
        dispatch(resetCartItem());
    }
}

const resetCartItem = () => {
    return {
        type: RESET_CART,
    }
}

const cartSuccess = () => {
    return {
        type: CART_SUCCESS,
    };
}