import axios from '../../axios-config';
import { header } from '../../utility/header';
import { BANK_SUCCESS, RESET_BANK_GALLERY, SET_BANK, SET_BANK_GALLERY } from '../action-types';

export const fetchBanks = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('bank', header(token));
            const { banks } = response.data;
            dispatch(setBanks(banks));
        } catch (err) {
            throw err;
        }
    }
}

const setBanks = (banks) => {
    return {
        type: SET_BANK,
        banks,
    }
}

export const addBank = (token, bankData) => {
    return async dispatch => {
        try {
            await axios.post('bank', bankData, header(token));
            dispatch(bankSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const addBankGallery = (token, galleryData) => {
    return async dispatch => {
        try {
            const response = await axios.post('gallery', galleryData, header(token, true));
            const { gallery } = response.data;
            dispatch(setBankGallery(gallery));
        } catch (err) {
            throw err;
        }
    }
}

const setBankGallery = (gallery) => {
    return {
        type: SET_BANK_GALLERY,
        galleryItem: gallery,
    }
}

export const resetBankGallery = () => {
    return {
        type: RESET_BANK_GALLERY,
    }
}

export const updateBank = (token, id, bankData) => {
    return async dispatch => {
        try {
            const response = await axios.put('bank/' + id, bankData, header(token));
            dispatch(bankSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const removeBank = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('bank/' + id, header(token));
            dispatch(bankSuccess());
        } catch (err) {
            throw err;
        }
    }
}

const bankSuccess = () => {
    return {
        type: BANK_SUCCESS,
    }
}