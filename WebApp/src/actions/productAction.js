import ProductsAPI from '../api/mockProductsAPI'

export function LoadProductsSuccess(products) {
    
    return { type: "GET_PRODUCTS_SUCCESS", products }
}

export function GetProducts() {
    return function (dispatch) {
        return ProductsAPI.getAllProducts().then(products => {
            dispatch(LoadProductsSuccess(products));
        }).catch(error => {
            throw (error);
        });
    }
}
