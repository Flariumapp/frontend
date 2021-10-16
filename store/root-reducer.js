import { combineReducers } from 'redux';
import {
  authReducer, companyReducer, flightReducer, galleryReducer, locationReducer, userReducer
} from './reducers';

const rootReducer = combineReducers({
  ath: authReducer,
  cpy: companyReducer,
  flt: flightReducer,
  loc: locationReducer,
  usr: userReducer,
  gly: galleryReducer,
});

export default rootReducer;