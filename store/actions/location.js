import axios from '../../axios-config';
import { header } from '../../utility/header';
import { SET_LOCATION, LOCATION_SUCCESS, SET_LOCATION_GALLERY, UPDATE_LOCATION_GALLERY, RESET_LOCATION_GALLERY } from '../action-types';

export const fetchLocations = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('location', header(token));
            const { locations } = response.data;
            dispatch(setLocations(locations));
        } catch (err) {
            throw err;
        }    
    }
}

const setLocations = (locations) => {
    return {
        type: SET_LOCATION,
        locations,
    }
}

export const addLocation = (token, locationData) => {
    return async dispatch => {
        try {
            await axios.post('location', locationData, header(token));
            dispatch(locationSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const updateLocation = (token, id, locationData) => {
    return async dispatch => {
        try {
            await axios.put('location/' + id, locationData, header(token));
            dispatch(locationSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const removeLocation = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('location/' + id, header(token));
            dispatch(locationSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const addLocationGallery = (token, galleryData) => {
    return async dispatch => {
        try {
            const response = await axios.post('gallery', galleryData, header(token, true));

            const { gallery } = response.data;
            dispatch(setLocationGallery(gallery));
        } catch (err) {
            throw err;
        }
    }
}

const setLocationGallery = (gallery) => {
    return {
        type: SET_LOCATION_GALLERY,
        galleryItem: gallery,
    }
}

export const removeLocationGallery = (token, id) => {
    return async dispatch => {
        try {
            const response = await axios.delete('gallery/' + id, header(token));
            const { gallery } = response.data;
            dispatch(updateLocationGallery(gallery));
        } catch (err) {
            throw err;
        }
    }
}

const updateLocationGallery = (gallery) => {
    return {
        type: UPDATE_LOCATION_GALLERY,
        galleryItem: gallery,
    }
}

export const resetLocationGallery = () => {
    return dispatch => dispatch({
        type: RESET_LOCATION_GALLERY,
    });
}



const locationSuccess = () => {
    return {
        type: LOCATION_SUCCESS,
    }
}