import { BANK_SUCCESS, RESET_BANK_GALLERY, SET_BANK, SET_BANK_GALLERY } from '../action-types';

const initialState = {
    banks: [],
    gallery: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BANK:
            return {
                ...state,
                banks: action.banks,
            }
        case BANK_SUCCESS:
            return state;
        case SET_BANK_GALLERY:
            return {
                ...state,
                gallery: action.galleryItem,
            }
        case RESET_BANK_GALLERY:
            return {
                ...state,
                gallery: null,
            }
        default:
            return state;
    }
}

export default reducer;