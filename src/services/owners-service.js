import authHeader from "./auth-header";
import axios from "axios";

let http;
http = axios.create({
    baseURL: 'http://localhost:9090/restcode-backend/',
    headers: {
        'Content-type': 'application/json'
    }
});

class OwnersService {
    getAllOwners() {
        return http.get('api/owners', {headers: authHeader()});
    }
    getOwnerById(id) {
        return http.get(`api/owners/${id}`, {headers: authHeader()});
    }

    createOwner(data) {
        return http.post("users/owners", data);
    }

    updateOwner(id, data) {
        return http.put(`api/owners/${id}`, data, {headers: authHeader()});
    }

    deleteOwner(id) {
        return http.delete(`api/owners/${id}`, {headers: authHeader()});
    }

}

export default new OwnersService();