import { combineReducers } from 'redux'
import ProductsReducer from './productReducer'
import CartReducer from './cartReducer'

const rootReducer = combineReducers({

    ProductsReducer,
    CartReducer

});

export default rootReducer