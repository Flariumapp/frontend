import {
    SET_LOCATION, LOCATION_SUCCESS, SET_LOCATION_GALLERY, UPDATE_LOCATION_GALLERY, RESET_LOCATION_GALLERY
} from '../action-types';

const initialState = {
    locations: [],
    gallery: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                locations: action.locations,
            }
        case LOCATION_SUCCESS:
            return state;
        case SET_LOCATION_GALLERY:
            return {
                ...state,
                gallery: [...state.gallery, action.galleryItem],
            }
        case UPDATE_LOCATION_GALLERY:
            const updatedGallery = state.gallery.filter(g => g.id !== action.galleryItem.id);
            return {
                ...state,
                gallery: updatedGallery,
            }
        case RESET_LOCATION_GALLERY:
            return {
                ...state,
                gallery: [],
            }
        default:
            return state;
    }
}

export default reducer;