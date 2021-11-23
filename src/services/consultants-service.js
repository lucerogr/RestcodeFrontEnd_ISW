import authHeader from "./auth-header";
import axios from "axios";

let http;
http = axios.create({
    baseURL: 'http://localhost:9090/restcode-backend/',
    headers: {
        'Content-type': 'application/json'
    }
});

class ConsultantsService {
    getAllConsultants() {
        return http.get('api/consultants', {headers: authHeader()});
    }
    getConsultantById(id) {
        return http.get(`api/consultants/${id}`, {headers: authHeader()});
    }

    createConsultant(data) {
        return http.post("users/consultants", data);
    }

    updateConsultant(id, data) {
        return http.put(`api/consultants/${id}`, data, {headers: authHeader()});
    }

    deleteConsultant(id) {
        return http.delete(`api/consultants/${id}`, {headers: authHeader()});
    }

}

export default new ConsultantsService();
