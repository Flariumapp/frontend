import axios from '../../axios-config';
import { header } from '../../utility/header';
import { WALLET_SUCCESS, SET_WALLET } from '../action-types';

export const fetchWallet = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('my-wallet', header(token));
            const { wallet } = response.data;
            dispatch(setWallet(wallet));
        } catch (err) {
            throw err;
        }
    }
}

const setWallet = (wallet) => {
    return {
        type: SET_WALLET,
        wallet,
    }
}

export const addWallet = (token, walletData) => {
    return async dispatch => {
        try {
            await axios.post('wallet', walletData, header(token));
            dispatch(walletSuccess());
        } catch (err) {
            throw err;
        }
    }
}


export const updateWallet = (token, walletData) => {
    return async dispatch => {
        try {
            await axios.put('wallet', walletData, header(token));
            dispatch(walletSuccess());
        } catch (err) {
            throw err;
        }
    }
} 

export const deleteWallet = (token) => {
    return async dispatch => {
        try {
            await axios.delete('wallet', header(token));
            dispatch(walletSuccess());
        } catch (err) {
            throw err;
        }
    }
}

const walletSuccess = () => {
    return {
        type: WALLET_SUCCESS,
    }
}