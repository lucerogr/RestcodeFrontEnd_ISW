import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:9090/restcode-backend/api',
    headers: {
        'Content-type': 'application/json'
    }
});
