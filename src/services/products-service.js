import http from './http-common';

class ProductsService {
    getAll() {
        return http.get('/products');
    }
    get(id) {
        return http.get(`/products/${id}`);
    }

    create(data) {
        return http.post("/products", data);
    }

    update(id, data) {
        return http.put(`/products/${id}`, data);
    }

    delete(id) {
        return http.delete(`/products/${id}`);
    }

    getByCategoryId(categoryId) {
        return http.get(`/categories/${categoryId}/products`)
    }
}

export default new ProductsService();