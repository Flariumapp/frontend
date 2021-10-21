import { SET_BOOKINGS, BOOKING_SUCCESS, ADD_PASSENGER, REMOVE_PASSENGER, RESET_PASSENGERS, SET_BOOKING_FLIGHT } from '../action-types';

const initialState = {
    bookings: [],
    flight: null,
    passengers: [],
    ids: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKINGS:
            return {
                ...state,
                bookings: action.bookings
            }
        case SET_BOOKING_FLIGHT:
            return {
                ...state,
                flight: action.flight,
            }
        case BOOKING_SUCCESS:
            return state;
        case ADD_PASSENGER:
            return {
                ...state,
                passengers: [...state.passengers, action.passenger],
                ids: [...state.ids, action.passenger.id],
            }
        case REMOVE_PASSENGER:
            const updatedPassengers = state.passengers.filter(passenger => passenger.id !== action.id);
            const updatedIds = state.ids.filter(id => id !== action.id);
            return {
                ...state,
                passengers: updatedPassengers,
                ids: updatedIds,
            }
        case RESET_PASSENGERS:
            return {
                ...state,
                passengers: [],
                ids: [],
            }
        default:
            return state;
    }
}

export default reducer;