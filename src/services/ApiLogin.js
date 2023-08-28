import { URL_API } from "./Const";
import axios from 'axios';

class ApiLogin {
    constructor(username, password) {
        this.state = {
            username: username,
            password: password,
            token: "",
        };
    }

    async getToken2() {
        var urlApi = URL_API + "login_check";
        const { username, password } = this.state;

        // Création de l'objet JSON avec les données d'authentification
        const data = {
            username: username,
            password: password,
        };

        try {
            // Envoi de la requête POST à l'URL spécifiée
            const response = await fetch(URL_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Échec de la requête.');
            }

            // Récupération du token depuis la réponse
            const responseData = await response.json();
            const token = responseData.token;

            return token;
            // Mise à jour de l'état avec le token reçu
            this.setState({ token: token });
        } catch (error) {
            console.error('Erreur lors de la récupération du token:', error);
            return null
        }
    };

    async getToken() {
        console.log("Email:", this.state.username);
        console.log("Password:", this.state.password);
        var urlApi = URL_API + "login_check";
        const requestOptions = {
            method: 'POST',
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'user@user.com', password: 'salut' })
        };
        try {
            await axios.post(urlApi, { username: 'user@user.com', password: 'salut' }).then(response => { 
                this.token = response.data.token;
            });
        } catch (error) {
            console.log("Error:", error);
        }
        return this.token;
    };

}

export default ApiLogin;
