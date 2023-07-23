import { GET_PRODUCTS, GET_PRICE } from "./actions-type";

const initialState = {
    products: [],
    price: 0,
}

const reducer = ( state= initialState, { type, payload} ) => {
    switch (type) {
        case GET_PRODUCTS: 
            return { ...state, products: payload}
        case GET_PRICE:
            return { ...state, price: payload}
        default:
            return { ...state }
    }
}

export default reducer;