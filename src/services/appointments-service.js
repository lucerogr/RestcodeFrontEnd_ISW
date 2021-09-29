import http from './http-common';

class AppointmentsService {
    getAll() {
        return http.get('/appointments');
    }
    get(id) {
        return http.get(`/appointments/${id}`);
    }
    add(data) {
        return http.post('/appointments', data);
    }
    update(id, data) {
        return http.put(`/appointments/${id}`, data);
    }
    delete(id) {
        return http.delete(`/appointments/${id}`);
    }
    deleteAll() {
        return http.delete('/appointments');
    }
    findByTitle(scheduledDate) {
        return http.get(`/appointments?scheduledDate=${scheduledDate}`);
    }
}
export default new AppointmentsService();