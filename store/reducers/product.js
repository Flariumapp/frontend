import {
    SET_PRODUCT, PRODUCT_SUCCESS, SET_PRODUCT_GALLERY, RESET_PRODUCT_GALLERY, UPDATE_PRODUCT_GALLERY
} from '../action-types';

const initialState = {
    locations: [],
    gallery: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                locations: action.locations,
            }
        case PRODUCT_SUCCESS:
            return state;
        case SET_PRODUCT_GALLERY:
            return {
                ...state,
                gallery: [...state.gallery, action.galleryItem],
            }
        case UPDATE_PRODUCT_GALLERY:
            const updatedGallery = state.gallery.filter(g => g.id !== action.galleryItem.id);
            return {
                ...state,
                gallery: updatedGallery,
            }
        case RESET_PRODUCT_GALLERY:
            return {
                ...state,
                gallery: [],
            }
        default:
            return state;
    }
}

export default reducer;