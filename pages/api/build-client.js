import axios from 'axios';
import { baseUrl } from '../../utility/base-url';

const buildClient = ({ req }) => {
    if(typeof window === 'undefined') {
        return axios.create({
            baseURL: baseUrl,
            // headers: req.headers,
        });
    } else {
        return axios.create({
            baseURL: baseUrl,
            // headers: req.headers,
        });
    }
}

export default buildClient;