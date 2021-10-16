import { SET_LOCATION, LOCATION_SUCCESS } from '../action-types';

const initialState = {
    locations: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                locations: action.locations,
            }
        case LOCATION_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default reducer;