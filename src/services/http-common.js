import axios from 'axios'

export default axios.create({
    baseURL: 'https://restcodewebapplication.azurewebsites.net/api',
    headers: {
        'Content-type': 'application/json'
    }
});
