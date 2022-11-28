import { sendRequest } from "../request";
const BASE_URL = '/api/home';

export function getHome(){
    return sendRequest(BASE_URL);
}

export function createHome(homeData){
    return sendRequest(`${BASE_URL}/createHome`, "POST", homeData, 'Invalid Home Data')
}

export function updateHome(homeData){
    return sendRequest(`${BASE_URL}/:id/updateHome`, "POST", homeData, 'Invalid Home Data')
}
