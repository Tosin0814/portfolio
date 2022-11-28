import { sendRequest } from "../request";
const BASE_URL = '/api/contact';


export function create(contactData){
    return sendRequest(`${BASE_URL}/createContact`, "POST", contactData, 'Invalid Contact Data')
}

export function getContact(){
    return sendRequest(BASE_URL);
}
