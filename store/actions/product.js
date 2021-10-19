import axios from '../../axios-config';
import { header } from '../../utility/header';
import { SET_PRODUCT, PRODUCT_SUCCESS, SET_PRODUCT_GALLERY, RESET_PRODUCT_GALLERY, UPDATE_PRODUCT_GALLERY } from '../action-types';

export const fetchProducts = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('products', header(token));
            const { products } = response.data;
            dispatch(setProducts(products));
        } catch (err) {
            throw err;
        }    
    }
}

const setProducts = (products) => {
    return {
        type: SET_PRODUCT,
        products,
    }
}

export const addProduct = (token, productData) => {
    return async dispatch => {
        try {
            await axios.post('product', productData, header(token));
            dispatch(productSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const updateProduct = (token, id, productData) => {
    return async dispatch => {
        try {
            await axios.put('product/' + id, productData, header(token));
            dispatch(productSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const removeProduct = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('product/' + id, header(token));
            dispatch(productSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const addProductGallery = (token, galleryData) => {
    return async dispatch => {
        try {
            const response = await axios.post('gallery', galleryData, header(token, true));
            const { gallery } = response.data;
            dispatch(setProductGallery(gallery));
        } catch (err) {
            throw err;
        }
    }
}

const setProductGallery = (gallery) => {
    return {
        type: SET_PRODUCT_GALLERY,
        galleryItem: gallery,
    }
}

export const removeProductGallery = (token, id) => {
    return async dispatch => {
        try {
            const response = await axios.delete('gallery/' + id, header(token));
            const { gallery } = response.data;
            dispatch(updateProductGallery(gallery));
        } catch (err) {
            throw err;
        }
    }
}

const updateProductGallery = (gallery) => {
    return {
        type: UPDATE_PRODUCT_GALLERY,
        galleryItem: gallery,
    }
}

export const resetProductGallery = () => {
    return dispatch => dispatch({
        type: RESET_PRODUCT_GALLERY,
    });
}



const productSuccess = () => {
    return {
        type: PRODUCT_SUCCESS,
    }
}