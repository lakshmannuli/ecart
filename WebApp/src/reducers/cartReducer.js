import * as ActionTypes from '../actions/actionTypes'

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            return [
                ...state,
                Object.assign({}, action.product)
            ]
        case ActionTypes.GET_CART_ITEMS:
            return [
                ...state
            ]
        default:
            return state;
    }
}