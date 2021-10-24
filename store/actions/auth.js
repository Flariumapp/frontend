import axios from '../../axios-config';
import * as actionTypes from '../action-types';

let timer = null;

export const autoLogin = (token, id, expiryDate) => {
    return dispatch => {
        if (token) {
            dispatch(authSuccess(token, id, expiryDate));
        } else {
            dispatch(authLogout());
        }
    }
}

export const login = (loginData) => {
    return async dispatch => {
        try {
            const response = await axios.post('auth/login', loginData);

            const { token, id, expiryDate } = response.data;

            const expiryDateModified = new Date(expiryDate).getTime() - new Date().getTime();

            dispatch(authSuccess(token));
        } catch (err) {
            throw err;
        }
    }
}

export const signup = (signupData) => {
    return async dispatch => {
        try {
            const response = await axios.post('auth/signup', signupData);

            console.log('signup response data', response.data);

            const { token } = response.data;

            // const expiryDateModified = new Date(expiryDate).getTime() - new Date().getTime();

            // dispatch(setLocalVariables(token));
            dispatch(authSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const logout = () => {
    return async dispatch => {
        localStorage.removeItem('authData');
        if (timer) {
            clearTimeout(timer);
        }
        dispatch(authLogout());
    }
}

const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}


const setLocalVariables = (token) => {
    return dispatch => {
        console.log('setting local variables', token);
        localStorage.setItem('authData', JSON.stringify({
            token,
        }));

        // timer = setTimeout(() => {
        //     dispatch(logout());
        // }, 24 * 60 * 60 * 1000);

        dispatch(authSuccess(token));
    }
}

const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        // id,
        // expiryDate,
    }
}