import { sendRequest } from "../request";
const BASE_URL = '/api/skills';

export function getSkills(){
    return sendRequest(BASE_URL);
}

export function createSkill(skillData){
    return sendRequest(`${BASE_URL}/createSkill`, "POST", skillData, 'Invalid Skill Data')
}

export function removeSkill(skillData){
    // console.log(skillData)
    return sendRequest(`${BASE_URL}/removeSkill`, "DELETE", skillData, 'Invalid Skill Data')
}