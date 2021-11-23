// auth-service.js

import axios from 'axios';

const API_URL = 'http://localhost:9090/restcode-backend/users/authentication';

class AuthService{
    login(user){
        return axios.post(API_URL, {
            email: user.email,
            password: user.password
        })
            .then(response =>{
                if(response.data.token){
                    localStorage.setItem('user', JSON.stringify(response));
                }
                return response.data;
            })
    }
    logout(){
        localStorage.removeItem('user');
    }
}

export default new AuthService();
