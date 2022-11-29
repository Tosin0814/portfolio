import { sendRequest } from "../request";
const BASE_URL = '/api/portfolioItems';

export function getPortfolioItems(){
    return sendRequest(BASE_URL);
}

export function createPortfolioItem(portfolioItemData){
    return sendRequest(`${BASE_URL}/createPortfolioItem`, "POST", portfolioItemData, 'Invalid Portfolio Item Data')
}

export function updatePortfolioItem(portfolioItemData){
    return sendRequest(`${BASE_URL}/updatePortfolioItem`, "PUT", portfolioItemData, 'Invalid Portfolio Item Data')
}

export function removePortfolioItem(portfolioItemData){
    return sendRequest(`${BASE_URL}/removePortfolioItem`, "DELETE", portfolioItemData, 'Invalid Portfolio Item Data')
}