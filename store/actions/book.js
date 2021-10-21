import axios from '../../axios-config';
import { header } from '../../utility/header';
import { SET_BOOKINGS, BOOKING_SUCCESS, ADD_PASSENGER, REMOVE_PASSENGER, RESET_PASSENGERS, SET_BOOKING_FLIGHT } from '../action-types';

export const fetchBookings = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('book', header(token));
            const { bookings } = response.data;
            dispatch(setBookings(bookings));
        } catch (err) {
            throw err;
        }
    }
}

const setBookings = (bookings) => {
    return {
        type: SET_BOOKINGS,
        bookings,
    }
}

export const addBooking = (token, bookingData) => {
    return async dispatch => {
        try {
            await axios.post('book', bookingData, header(token));
            dispatch(bookingSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const cancelBooking = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('book/' + id, header(token));
            dispatch(bookingSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const setBookingFlight = (flight) => {
    return dispatch => dispatch({
        type: SET_BOOKING_FLIGHT,
        flight,
    });
}

export const addPassenger = (token, passengerData) => {
    return async dispatch => {
        try {
            const response = await axios.post('passenger', passengerData, header(token));
            const { passenger } = response.data;
            dispatch(addPassengerToList(passenger))
        } catch (err) {
            throw err;
        }
    }
}

const addPassengerToList = (passenger) => {
    return {
        type: ADD_PASSENGER,
        passenger,
    }
}

export const removePassenger = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('passenger/' + id, header(token));
            dispatch(removePassengerFromList(id));
        } catch (err) {
            throw err;
        }
    }
}

const removePassengerFromList = (passengerId) => {
    return {
        type: REMOVE_PASSENGER,
        id: passengerId,
    }
}

export const resetPassengers = () => {
    return dispatch => dispatch({
        type: RESET_PASSENGERS,
    });
}

const bookingSuccess = () => {
    return {
        type: BOOKING_SUCCESS,
    }
}