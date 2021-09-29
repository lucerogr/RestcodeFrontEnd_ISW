import http from './http-common';

class SalesService {
    getAll() {
        return http.get('/sales');
    }
    get(id) {
        return http.get(`/sales/${id}`);
    }
    create(data) {
        return http.post('/sales', data);
    }
    update(id, data) {
        return http.put(`/sales/${id}`, data);
    }
    delete(id) {
        return http.delete(`/sales/${id}`);
    }
    deleteAll() {
        return http.delete('/sales');
    }
    findSaleDetailBySaleId(id) {
        return http.get(`/sales_details?saleId=${id}`);
    }
}

export default new SalesService();