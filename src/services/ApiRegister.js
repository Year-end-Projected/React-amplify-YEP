import { URL_API, URL_API_PROD } from "./Const";
import axios from 'axios';

class ApiRegister {
    constructor(name, email, password, dateOfBirth) {
        this.state = {
            name: name,
            email: email,
            password: password,
            dateOfBirth: dateOfBirth
        };
    }

    // async registerUser() {
    //     console.log("Name:", this.state.name);
    //     console.log("Email:", this.state.username);
    //     console.log("Password:", this.state.password);
    //     console.log("Date of birth:", this.state.dateOfBirth);
    //     var urlApi = URL_API_PROD + "users";
    //     try {
    //         await axios.post(urlApi, ({
    //             name: "TEST",
    //             email: "email@email.com",
    //             password: "salut",
    //             dateOfBirth: "2001-05-12T00:00:00+00:00"
    //         })).then(response => { 
    //             this.token = response.data.token;
    //         });
    //     } catch (error) {
    //         console.log("Error:", error);
    //         return "error";
    //     }
    //     return "ok";
    // };

    async registerUser() {
        // Créez un objet pour les données avec "bla"
        const userData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            dateOfBirth: this.state.dateOfBirth
        };
    
        const urlApi = URL_API_PROD + "users";
    
        try {
            // Envoyez l'objet userData dans le corps de la requête
            await axios.post(urlApi, userData).then(response => {
                console.log("user registered");
            });
        } catch (error) {
            console.log("Error:", error);
            return false;
        }
        return true;
    }
    
}

export default ApiRegister;