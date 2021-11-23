import http from './http-common';
import authHeader from "./auth-header";

class ConsultancyService {
    getAllConsultancies() {
        return http.get('/consultancies', {headers: authHeader()});
    }
    getConsultancyByAppointmentId(id){
        return http.get(`/appointments/${id}/consultancies`, {headers: authHeader()});
    }
    createConsultancy(id,data) {
        return http.post(`/appointments/${id}/consultancies`, data, {headers: authHeader()});
    }
    updateConsultancy(id, data) {
        return http.put(`/consultancies/${id}`, data, {headers: authHeader()});
    }
    deleteConsultancy(id) {
        return http.delete(`/consultancies/${id}`, {headers: authHeader()});
    }
}

export default new ConsultancyService();