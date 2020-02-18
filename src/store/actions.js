export const ADD_CHECKOUT = 'ADD_CHECKOUT'
export const CLEAR_CHECKOUT = 'CLEAR_CHECKOUT'

export const addCheckout = (productName, productPrice) => {
    return {
        type: ADD_CHECKOUT,
        data:{
            productName,
            productPrice
        }
    }
}
export const clearCheckout = () => {
    return {
        type: CLEAR_CHECKOUT
    }
}