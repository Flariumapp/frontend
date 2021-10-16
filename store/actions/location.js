import axios from '../../axios-config';
import { header } from '../../utility/header';
import { SET_LOCATION, LOCATION_SUCCESS } from '../action-types';

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
            const response = await axios.post('location', locationData, header(token));
            dispatch(locationSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const updateLocation = (token, id, locationData) => {
    return async dispatch => {
        try {
            const response = await axios.put('location/' + id, locationData, header(token));
            dispatch(locationSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const removeLocation = (token, id) => {
    return async dispatch => {
        try {
            const response = await axios.delete('location/' + id, header(token));
            dispatch(locationSuccess());
        } catch (err) {
            throw err;
        }
    }
}

const locationSuccess = () => {
    return {
        type: LOCATION_SUCCESS,
    }
}