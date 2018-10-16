import 'whatwg-fetch';

function checkStatus(response: Response) {

    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.name = 'API Error';
        throw error;
    }
}

function parseJSON(response: Response) {
    return response.json();
}

let headers = new Headers();

headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');

const getDefaults: RequestInit = {
    method: 'GET',
    headers: headers,
    mode: (process.env.NODE_ENV === 'production') ? 'no-cors' : 'cors',
    credentials: (process.env.NODE_ENV === 'production') ? 'same-origin' : 'include'
};

class Api {
    defaults: RequestInit;
    constructor(defaults: RequestInit) {
        this.defaults = defaults;
    }
    get(url: string): Promise<any> {
        return fetch(process.env.REACT_APP_API_BASE + url, this.defaults)
            .then(checkStatus)
            .then(parseJSON);
    }
    post(url: string, o: Object): Promise<any> {
        return fetch(process.env.REACT_APP_API_BASE + url, Object.assign({}, this.defaults, { method: 'POST', body: JSON.stringify(o) }))
            .then(checkStatus)
            .then(parseJSON);
    }
    setHeader(name: string, value: string) {
        (<Headers>this.defaults.headers).append(name, value);
    }
}

export let api = new Api(getDefaults);
