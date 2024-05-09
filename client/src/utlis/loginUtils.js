export const emailToUsername = (email)=> {
    return email.split('@')[0];
}
export const  saveAuthToken = (token,email) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('email', email);
    localStorage.setItem('username', emailToUsername(email));
    // console.log('token saved to local storage: ', token,email,emailToUsername(email));
}
export const isLoggedin = () => {  
    const token = localStorage.getItem('authToken');
    if(token){
        return true;
    }
    return false;
}
export const logout = () => {
    localStorage.removeItem('authToken', 'email', 'username');
    // console.log('token removed from local storage');
}