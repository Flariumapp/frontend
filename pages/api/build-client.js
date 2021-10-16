import axios from 'axios';

const buildClient = ({ req }) => {
    if(typeof window === 'undefined') {
        return axios.create({
            baseURL: 'http://localhost:2000/api/',
            headers: req.headers,
        });
    } else {
        return axios.create({
            baseURL: 'http://localhost:2000/api/',
            headers: req.headers,
        });
    }
}

export default buildClient;