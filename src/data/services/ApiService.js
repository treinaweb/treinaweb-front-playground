const api = '';

export const ApiService = {
    get(endpoint){
        return fetch(`${api}${endpoint}`)
            .then(response => response.json());
    }
};