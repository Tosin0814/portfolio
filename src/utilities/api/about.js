import { sendRequest } from "../request";
const BASE_URL = '/api/about';

export function getAbout(){
    return sendRequest(BASE_URL);
}

export function createAbout(aboutData){
    return sendRequest(`${BASE_URL}/createAbout`, "POST", aboutData, 'Invalid About Data')
}

export function updateAbout(aboutData){
    return sendRequest(`${BASE_URL}/:id/updateAbout`, "POST", aboutData, 'Invalid About Data')
}
