import { URL_API } from "./Const";
import axios from 'axios';

class ApiService {
    constructor() {
        this.state = {
        };
    }

    async getPublications() {
        const urlApi = URL_API + "publications";
    
        try {
            const response = await axios.get(urlApi);
            return response.data;
        } catch (error) {
            console.log("Error:", error);
            throw error;
        }
    }

    async postPublication(titre, description, contenu, rémunératon, type, date_de_fin, Ville) {
        const urlApi = URL_API + "publications";
    
        try {
            const response = await axios.post(urlApi, ({
                titre: titre,
                description: description,
                contenu: contenu,
                rémunératon: rémunératon,
                type: type,
                date_de_fin: date_de_fin,
                Ville: Ville
            }));
            return response.data;
        } catch (error) {
            console.log("Error:", error);
            throw error; // Rethrow the error to be caught in the calling function if needed
        }
    }
    
}

export default ApiService;