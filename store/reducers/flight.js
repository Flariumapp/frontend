import { SET_FLIGHTS, FLIGHT_SUCCESS } from '../action-types';

const initialState = {
    flights: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLIGHTS:
            return {
                ...state,
                flights: action.flights,
            }
        case FLIGHT_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;