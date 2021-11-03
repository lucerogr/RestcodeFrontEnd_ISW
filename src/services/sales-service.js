import http from './http-common';
import authHeader from "./auth-header";

class SalesService {
    getAll() {
        return http.get('/sales', {headers: authHeader()});
    }
    get(id) {
        return http.get(`/sales/${id}`, {headers: authHeader()});
    }
    create(data) {
        return http.post('/sales', data, {headers: authHeader()});
    }
    update(id, data) {
        return http.put(`/sales/${id}`, data, {headers: authHeader()});
    }
    delete(id) {
        return http.delete(`/sales/${id}`, {headers: authHeader()});
    }
    deleteAll() {
        return http.delete('/sales', {headers: authHeader()});
    }
    findSaleDetailBySaleId(id) {
        return http.get(`/sales_details?saleId=${id}`, {headers: authHeader()});
    }
}

export default new SalesService();