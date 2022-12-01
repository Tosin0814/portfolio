import { sendRequest } from "../request";
const BASE_URL = '/api/resumeItems';

export function getResumeItems(){
    return sendRequest(BASE_URL);
}

export function createResumeItem(resumeItemData){
    return sendRequest(`${BASE_URL}/createResumeItem`, "POST", resumeItemData, 'Invalid Resume Item Data')
}

export function updateResumeItem(resumeItemData){
    return sendRequest(`${BASE_URL}/updateResumeItem`, "PUT", resumeItemData, 'Invalid Resume Item Data')
}

export function removeResumeItem(resumeItemData){
    return sendRequest(`${BASE_URL}/removeResumeItem`, "DELETE", resumeItemData, 'Invalid Resume Item Data')
}