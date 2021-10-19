import { combineReducers } from 'redux';
import {
  authReducer,
  bankReducer,
  companyReducer,
  flightReducer,
  galleryReducer,
  locationReducer,
  userReducer,
  productReducer,
  cartReducer,
} from './reducers';

const rootReducer = combineReducers({
  ath: authReducer,
  cpy: companyReducer,
  flt: flightReducer,
  loc: locationReducer,
  usr: userReducer,
  gly: galleryReducer,
  bnk: bankReducer,
  prd: productReducer,
  crt: cartReducer,
});

export default rootReducer;