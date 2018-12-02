import * as ActionTypes from '../actions/actionTypes'

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            return [
                ...state,
                Object.assign({}, action.product)
            ]
        default:
            return state;
    }
}