import http from './http-common';
import authHeader from "./auth-header";

class CategoriesService {
    getAll() {
        return http.get('/categories', {headers: authHeader()});
    }

    get(id) {
        return http.get(`/categories/${id}`, {headers: authHeader()});
    }

    create(data) {
        return http.post("/categories", data, {headers: authHeader()});
    }

    update(id, data) {
        return http.put(`/categories/${id}`, data, {headers: authHeader()});
    }

    delete(id) {
        return http.delete(`/categories/${id}`, {headers: authHeader()});
    }

    getByRestaurantId(restaurantId) {
        return http.get(`/restaurants/${restaurantId}/categories`, {headers: authHeader()})
    }
}

export default new CategoriesService();