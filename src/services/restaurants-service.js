import http from './http-common';
import authHeader from "./auth-header";

class RestaurantsService {
    getAll() {
        return http.get('/restaurants', {headers: authHeader()});
    }
    get(id) {
        return http.get(`/restaurants/${id}`, {headers: authHeader()});
    }

    getByOwnerId(id){
        return http.get(`/owners/${id}/restaurants`, {headers: authHeader()});
    }

    create(data, id) {
        return http.post(`/owners/${id}/restaurants`, data, {headers: authHeader()});
    }

    update(id, data) {
        return http.put(`/restaurants/${id}`, data, {headers: authHeader()});
    }

    delete(id) {
        return http.delete(`/restaurants/${id}`, {headers: authHeader()});
    }
}

export default new RestaurantsService();