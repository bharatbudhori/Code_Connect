export const  saveAuthToken = (token) => {
    localStorage.setItem('authToken', token);
    // console.log('token saved to local storage: ', token);
}
export const isLoggedin = () => {  
    const token = localStorage.getItem('authToken');
    if(token){
        return true;
    }
    return false;
}
export const logout = () => {
    localStorage.removeItem('authToken');
    // console.log('token removed from local storage');
}