import { GET_PRODUCTS, GET_PRICE} from './actions-type.js';
import axios from "axios";


export const getProducts = () => {
    const endPoint = 'http://localhost:3001/products';
    return async (dispatch) => {
        try {
            const { data } = await axios(endPoint);
            dispatch( { type: GET_PRODUCTS, payload: data })
        } catch(error) {
            alert("error: " + error.respose.data.error);
        }
    }
}

export const getPrice = (userId,nameProduct) => {
    const endPoint = `http://localhost:3001/price/${userId}/${nameProduct}`;
    return async (dispatch) => {
        try {
            const { data } = await axios(endPoint);
            dispatch( { type: GET_PRICE, payload: data })
        } catch(error) {
            alert("error: " + error.respose.data.error);
        }
    }
}