import http from './http-common';

import authHeader from "./auth-header";

class ConsultantsService {
    getAllConsultants() {
        return http.get('/consultants', {headers: authHeader()});
    }
    getConsultantById(id) {
        return http.get(`/consultants/${id}`, {headers: authHeader()});
    }

    createConsultant(data) {
        return http.post("/consultants", data);
    }

    updateConsultant(id, data) {
        return http.put(`/consultants/${id}`, data, {headers: authHeader()});
    }

    deleteConsultant(id) {
        return http.delete(`/consultants/${id}`, {headers: authHeader()});
    }

}

export default new ConsultantsService();
