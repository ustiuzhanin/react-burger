import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-14203.firebaseio.com/'
});

export default instance;