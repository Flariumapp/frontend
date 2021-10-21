import axios from '../../axios-config';
import { header } from '../../utility/header';
import { HISTORY_SUCCESS, SET_HISTORY } from '../action-types';

export const fetchHistory = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('history');
            const { history } = response.data;
            dispatch(setHistory(history));
        } catch (err) {
            throw err;
        }
    }
}

const setHistory = (history) => {
    return {
        type: SET_HISTORY,
        history,
    }
}

export const deleteHistory = (token, id) => {
    return async dispatch => {
        try {
            await axios.get('history/' + id, header(token));
            dispatch(historySuccess());
        } catch (err) {
            throw err;
        }
    }
}

const historySuccess = () => {
    return {
        type: HISTORY_SUCCESS,
    }
}