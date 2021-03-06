import axios from '../../axios-config';
import { header } from '../../utility/header';
import { SET_FLIGHTS, FLIGHT_SUCCESS } from '../action-types';

export const fetchFlights = (token, query = '') => {
    return async dispatch => {
        try {
            console.log('fetchFlights Route', 'flight' + query);
            const response = await axios.get('flight' + query, header(token));
            const { flights } = response.data;
            dispatch(setFlights(flights));
        } catch (err) {
            throw err;  
        }
    }
}

const setFlights = (flights) => {
    return {
        type: SET_FLIGHTS,
        flights,
    }
}

export const addFlight = (token, flightData) => {
    return async dispatch => {
        try {
            await axios.post('flight', flightData, header(token));
            dispatch(flightSuccess());
        } catch (err) {
            throw err;  
        }
    }
}

export const updateFlight = (token, id, flightData) => {
    return async dispatch => {
        try {
            await axios.put('flight/' + id, flightData, header(token));
            dispatch(flightSuccess());
        } catch (err) {
            throw err;  
        }
    }
}

export const removeFlight = (token, id) => {
return async dispatch => {
        try {
            await axios.delete('flight/' + id, header(token));
            dispatch(flightSuccess());
        } catch (err) {
            throw err;  
        }
    }
}

const flightSuccess = () => {
    return {
        type: FLIGHT_SUCCESS,
    }
}