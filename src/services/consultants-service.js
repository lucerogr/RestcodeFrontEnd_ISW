import http from './http-common';

class ConsultantsService {
    getAllConsultants() {
        return http.get('/consultants');
    }
    getConsultantById(id) {
        return http.get(`/consultants/${id}`);
    }

    createConsultant(data) {
        return http.post("/consultants", data);
    }

    updateConsultant(id, data) {
        return http.put(`/consultants/${id}`, data);
    }

    deleteConsultant(id) {
        return http.delete(`/consultants/${id}`);
    }

}

export default new ConsultantsService();
