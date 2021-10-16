import axios from '../../axios-config';
import { header } from '../../utility/header';
import { GALLERY_SUCCESS } from '../action-types';

export const addGallery = (token, galleryData) => {
    return async dispatch => {
        try {
            const response = await axios.post('gallery', galleryData, header(token, true));

            const { gallery } = response.data;
            dispatch(gallerySuccess(gallery));
        } catch (err) {
            throw err;
        }
    }
}

export const removeGallery = (token, id) => {
    return async dispatch => {
        try {
            const response = await axios.delete('gallery/' + id, header(token));
            dispatch(gallerySuccess());
        } catch (err) {
            throw err;
        }
    }
}

const gallerySuccess = (gallery) => {
    return {
        type: GALLERY_SUCCESS,
        gallery,
    }
}