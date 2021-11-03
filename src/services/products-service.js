import http from './http-common';
import authHeader from "./auth-header";

class ProductsService {
    getAll() {
        return http.get('/products', {headers: authHeader()});
    }
    get(id) {
        return http.get(`/products/${id}`, {headers: authHeader()});
    }

    create(data) {
        return http.post("/products", data, {headers: authHeader()});
    }

    update(id, data) {
        return http.put(`/products/${id}`, data, {headers: authHeader()});
    }

    delete(id) {
        return http.delete(`/products/${id}`, {headers: authHeader()});
    }

    getByCategoryId(categoryId) {
        return http.get(`/categories/${categoryId}/products`, {headers: authHeader()})
    }
}

export default new ProductsService();