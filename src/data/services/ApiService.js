const api = '';

export const ApiService = {
    get(endpoint){
        console.log(endpoint)

        return fetch(`${api}${endpoint}`)
            .then(response => response.json());
    }
};