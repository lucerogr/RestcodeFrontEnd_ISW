import http from './http-common';

class PublicationsService {
    getAllPublications() {
        return http.get('/publications');
    }
    createPublication(data) {
        return http.post("/publications", data);
    }
    updatePublication(id, data) {
        return http.put(`/publications/${id}`, data);
    }
    deletePublication(id) {
        return http.delete(`/publications/${id}`);
    }
}

export default new PublicationsService();