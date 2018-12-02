import * as ActionConstants from './actionTypes'

export function AddToCart(product) {
    return { type: ActionConstants.ADD_PRODUCT_TO_CART, product };
}
