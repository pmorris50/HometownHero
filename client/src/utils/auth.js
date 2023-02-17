import decode from 'jwt-decode';

class AuthService {

  loggedIn() {
    const token = this.getToken();
    console.log(token);
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isAdmin() {
    console.log("RUNNING")
    var token = this.getToken();
    const decoded = decode(token)
    console.log("TOKEN", decoded); 
    console.log("am I an Admin?" ,decoded.data.adminAccess)
    return decoded.data.adminAccess 
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();