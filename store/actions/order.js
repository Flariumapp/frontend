import axios from '../../axios-config';
import { header } from '../../utility/header';
import { ORDER_SUCCESS, SET_ORDERS } from '../action-types';

export const fetchOrders = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('order', header(token));
            const { orders } = response.data;
            dispatch(setOrders(orders));
        } catch (err) {
            throw err;
        }
    }
}

const setOrders = (orders) => {
    return {
        type: SET_ORDERS,
        orders,
    }
}

export const addOrder = (token, orderData) => {
    return async dispatch => {
        try {
            await axios.post('order', orderData, header(token));
            dispatch(orderSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const updateOrder = (token, id, orderData) => {
    return async dispatch => {
        try {
            await axios.put('order/' + id, orderData, header(token));
            dispatch(orderSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const deleteOrder = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('order/' + id, header(token));
            dispatch(orderSuccess());
        } catch (err) {
            throw err;
        }
    }
}

const orderSuccess = () => {
    return {
        type: ORDER_SUCCESS,
    }
}