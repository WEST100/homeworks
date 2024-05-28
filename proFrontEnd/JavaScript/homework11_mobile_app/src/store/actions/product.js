import { GET_PRODUCT_BY_ID, GET_PRODUCT_ALL } from "../types";

export const getProductById = (payload) => ({
    type: GET_PRODUCT_BY_ID,
    payload
});


export const getProductAll = () => ({type: GET_PRODUCT_ALL});