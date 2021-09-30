// auth.module.js
// Vuex authentication Module

import AuthService from '../services/auth-service';
import OwnersService from  '../services/owners-service';
import ConsultantsService from  '../services/consultants-service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? {status : { loggedIn: true}, user}
    : {status :{ loggedIn: false}, user: null};

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({commit},user){
            return AuthService.login(user).then(
                user=>{
                    console.log(user)
                    commit('loginSuccess',user);
                    return Promise.resolve(user);
                },
                error=> {
                    commit('loginFailure');
                    return Promise.reject(error);
                });
        },
        logout({ commit }){
            AuthService.logout();
            commit('logout');
        },
        register({ commit },user){
            if(user.discriminator === 'owner'){
                // REGISTER STUDENT
                return OwnersService.createOwner(user).then(
                    response =>{
                        commit('registerSuccess');
                        return Promise.resolve(response.data);
                    },
                    error => {
                        commit('registerFailure');
                        return Promise.reject(error);
                    });
            }else{
                //REGISTER LESSOR
                return ConsultantsService.createConsultant(user).then(
                    response =>{
                        commit('registerSuccess');
                        return Promise.resolve(response.data);
                    },
                    error => {
                        commit('registerFailure');
                        return Promise.reject(error);
                    });
            }
        }
    },
    mutations:{
        loginSuccess(state, user){
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state){
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state){
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state){
            state.status.loggedIn = false;
        },
        registerFailure(state){
            state.status.loggedIn = false;
        }
    }
}
