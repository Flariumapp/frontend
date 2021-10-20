import axios from '../../axios-config';
import { header } from '../../utility/header';
import * as actionTypes from '../action-types';
import { getSession } from 'next-auth/client';

export const fetchUsers = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('users', header(token));
            const { users } = response.data;
            dispatch(setUsers(users));
        } catch (err) {
            throw err;
        }
    }
}

const setUsers = (users) => {
    const loadedUsers = [];

    for (let key in users) {
        loadedUsers.push(users[key]);
    }

    return {
        type: actionTypes.SET_USERS,
        users: loadedUsers,
    }
}

export const fetchCurrentUser = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('current-user', header(token));
            const { currentUser } = response.data;
            dispatch(setCurrentUser(currentUser));
        } catch (err) {
            throw err;
        }
    }
}

const setCurrentUser = (currentUser) => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        currentUser,
    }
}


export const updateUser = (token, id, userData) => {
    return async dispatch => {
        try {
            await axios.put('user/' + id, userData, header(token));
            dispatch(userSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const updateUserProfile = (token, imageIndex) => {
    return async dispatch => {
        try {
            const response = await axios.put('update-profile', { imageIndex }, header(token));
            dispatch(userSuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const deleteUser = (token, id) => {
    return async dispatch => {
        try {
            await axios.delete('user/' + id, header(token));
            dispatch(userSuccess());
        } catch (err) {
            throw err;
        }
    }
}

const userSuccess = () => {
    return {
        type: actionTypes.USER_SUCCESS,
    }
}
