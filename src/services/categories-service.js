import http from './http-common';

class CategoriesService {
    getAll() {
        return http.get('/categories');
    }

    get(id) {
        return http.get(`/categories/${id}`);
    }

    create(data) {
        return http.post("/categories", data);
    }

    update(id, data) {
        return http.put(`/categories/${id}`, data);
    }

    delete(id) {
        return http.delete(`/categories/${id}`);
    }

    getByRestaurantId(restaurantId) {
        return http.get(`/restaurants/${restaurantId}/categories`)
    }
}

export default new CategoriesService();