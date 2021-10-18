import { combineReducers } from 'redux';
import {
  authReducer, bankReducer, companyReducer, flightReducer, galleryReducer, locationReducer, userReducer, 
} from './reducers';

const rootReducer = combineReducers({
  ath: authReducer,
  cpy: companyReducer,
  flt: flightReducer,
  loc: locationReducer,
  usr: userReducer,
  gly: galleryReducer,
  bnk: bankReducer,
});

export default rootReducer;