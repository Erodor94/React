import { ADD_CHECKOUT } from "./actions"
import { CLEAR_CHECKOUT } from "./actions"
const initialState = {
    checkout: undefined
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHECKOUT:
            const checkout = state.checkout || {}
    
            return Object.assign({}, state, {
                checkout: {
                    products: [
                        ...(checkout.products || []),
                        {
                            product: action.data.productName,
                            price: action.data.productPrice
                        }
                    ]
                }
            })
            
        case CLEAR_CHECKOUT:
        return Object.assign({}, state, {
            checkout: undefined
        })

        default:
            return state
    }
}

export { reducer }