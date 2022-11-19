import { sendRequest } from "../request";
const BASE_URL = '/api/users';


export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}

export function signUp(userData){
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    // const options = {
    //     method:'POST',
    //     headers: DEFAULT_HEADERS,
    //     body: JSON.stringify(userData) // shows up as payload in browser netwok tab
    // }

    // const res = await fetch(BASE_URL, options);

    //  // Check if request was successful
    // if(res.ok){
    //     return res.json() // converts json to JS obj
    // }else{
    //     throw new Error('Invalid Sign Up')
    // }

    return sendRequest(BASE_URL, "POST", userData, 'Invalid Sign Up')
}


export function login(credentials) {
    // Fetch uses an options object as a second arg to make requests
    // other than basic GET requests, include data, headers, etc.
    // const options = {
    //     method: 'POST',
    //     headers: DEFAULT_HEADERS,
    //     body: JSON.stringify(credentials) // shows up as payload in browser netwok tab
    // }

    // const res = await fetch(`${BASE_URL}/login`, options);

    // // Check if request was successful
    // if (res.ok) {
    //     return res.json() // converts json to JS obj
    // } else {
    //     throw new Error('Invalid Credentials')
    // }

    return sendRequest(`${BASE_URL}/login`, "POST", credentials, 'Invalid Credentials')
}


