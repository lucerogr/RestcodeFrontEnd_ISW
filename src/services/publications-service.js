import http from './http-common';
import authHeader from "./auth-header";

class PublicationsService {
    getAllPublications() {
        return http.get('/publications', {headers: authHeader()});
    }
    createPublication(data) {
        return http.post("/publications", data, {headers: authHeader()});
    }
    updatePublication(id, data) {
        return http.put(`/publications/${id}`, data, {headers: authHeader()});
    }
    deletePublication(id) {
        return http.delete(`/publications/${id}`, {headers: authHeader()});
    }
}

export default new PublicationsService();