import axios from '../../axios-config';
import { header } from '../../utility/header';
import { SET_COMPANY, COMPANY_SUCCESS } from '../action-types';

export const fetchCompanies = (token) => {
    return async dispatch => {
        try {
            const response = await axios.get('company', header(token));
            const { companies } = response.data;
            dispatch(setCompanies(companies));
        } catch (err) {
            throw err;
        }
    }
}

const setCompanies = (companies) => {
    return {
        type: SET_COMPANY,
        companies,
    }
}

export const addCompany = (token, companyData) => {
    return async dispatch => {
        try {
            const response = await axios.post('company', companyData, header(token));
            dispatch(companySuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const updateCompany = (token, id, companyData) => {
    return async dispatch => {
        try {
            const response = await axios.put('company/' + id, companyData, header(token));
            dispatch(companySuccess());
        } catch (err) {
            throw err;
        }
    }
}

export const removeCompany = (token, id) => {
    return async dispatch => {
        try {
            const response = await axios.delete('company/' + id, header(token));
            dispatch(companySuccess());
        } catch (err) {
            throw err;
        }
    }
}

const companySuccess = () => {
    return {
        type: COMPANY_SUCCESS,
    }
}