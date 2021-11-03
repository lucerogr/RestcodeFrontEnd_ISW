import http from './http-common';
import authHeader from "./auth-header";

class AppointmentsService {
    getAll() {
        return http.get('/appointments', {headers: authHeader()});
    }
    get(id) {
        return http.get(`/appointments/${id}`, {headers: authHeader()});
    }
    add(owner, consultant, data) {
        return http.post(`/appointments?owner=${owner}&consultant=${consultant}`, data, {headers: authHeader()});
    }
    update(id, data) {
        return http.put(`/appointments/${id}`, data, {headers: authHeader()});
    }
    delete(id) {
        return http.delete(`/appointments/${id}`, {headers: authHeader()});
    }
    deleteAll() {
        return http.delete('/appointments', {headers: authHeader()});
    }
    findByTitle(scheduledDate) {
        return http.get(`/appointments?scheduledDate=${scheduledDate}`, {headers: authHeader()});
    }
}
export default new AppointmentsService();