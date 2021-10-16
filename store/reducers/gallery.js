import { GALLERY_SUCCESS } from '../action-types';

const initialState = {
    galleryItem: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GALLERY_SUCCESS:
            return {
                ...state,
                galleryItem: action.gallery,
            }
        default:
            return state;
    }
}

export default reducer;