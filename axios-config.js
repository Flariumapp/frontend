import axios from 'axios';
import { baseUrl } from './utility/base-url';

const instance = axios.create({
    baseURL: baseUrl
});

export const buildClient = ({ req }) => {
    if(typeof window === 'undefined') {
        return axios.create({
            baseURL: baseUrl,
            headers: req.headers,
        });
    } else {
        return axios.create({
            baseURL: '/',
        });
    }
}

export default instance;