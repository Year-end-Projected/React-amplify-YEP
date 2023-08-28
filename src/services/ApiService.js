import { URL_API } from "./Const";

class ApiService {
    constructor() {
        this.state = {
        };
    }

    async getPublications() {
        var urlApi = URL_API + "publications";

        try {
            const response = await fetch(urlApi);
            const data = await response.json();
            this.data = data;
        } catch (error) {
            console.log(error);
        }
        return this.data;
    }
}

export default ApiService;
