import http from './http-common';

class OwnersService {
    getAllOwners() {
        return http.get('/owners');
    }
    getOwnerById(id) {
        return http.get(`/owners/${id}`);
    }

    createOwner(data) {
        return http.post("/owners", data);
    }

    updateOwner(id, data) {
        return http.put(`/owners/${id}`, data);
    }

    deleteOwner(id) {
        return http.delete(`/owners/${id}`);
    }

}

export default new OwnersService();