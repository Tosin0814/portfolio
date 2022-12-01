import { sendRequest } from "../request";
const BASE_URL = '/api/portfolioItemImages';

export function getPortfolioItemImages(){
    return sendRequest(BASE_URL);
}

export function createPortfolioItemImage(portfolioItemImageData){
    console.log("API", portfolioItemImageData)
    return sendRequest(`${BASE_URL}/createPortfolioItemImage`, "POST", portfolioItemImageData, 'Invalid Portfolio Item Image Data')
}
