//auth-header.js

export default function authHeader(){
    let user = JSON.parse(localStorage.getItem('user')).data;

    if(user && user.token){
        return { 'Authorization': `Bearer ${user.token}`};
    }else{
        console.log('No token available');
        return {};
    }
}
