import { SET_COMPANY, COMPANY_SUCCESS, SET_COMPANY_GALLERY, RESET_COMPANY_GALLERY } from '../action-types';

const initialState = {
    companies: [],
    gallery: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COMPANY:
            return {
                ...state,
                companies: action.companies,
            }
        case COMPANY_SUCCESS:
            return state;
        case SET_COMPANY_GALLERY:
            return {
                ...state,
                gallery: action.galleryItem,
            }
        case RESET_COMPANY_GALLERY:
            return {
                ...state,
                gallery: null,
            }
        default:
            return state;
    }
}

export default reducer;