import { URL_API, URL_API_PROD } from "./Const";
import axios from 'axios';

class ApiLogin {
    constructor(username, password) {
        this.state = {
            username: username,
            password: password,
            token: "",
        };
    }

    async getToken() {
        // console.log("Email:", this.state.username);
        // console.log("Password:", this.state.password);
        var urlApi = URL_API_PROD + "login_check";
        try {
            await axios.post(urlApi, { username: this.state.username, password: this.state.password }).then(response => { 
                this.token = response.data.token;
            });
        } catch (error) {
            console.log("Error:", error);
        }
        return this.token;
    };

}

export default ApiLogin;