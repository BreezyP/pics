import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e75595035ef9a6b81dfeeebf25f4f7e9279c693cdb77280c1d9a211ee70643c7'
    }
});