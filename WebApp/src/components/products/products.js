import React from 'react'
import ProductsList from './productsList'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProductAction from '../../actions/productAction'
import * as CartAction from '../../actions/cartAction'

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Products: [] };
        this.props.actions.GetProducts();
    }
    addToCart = (product) => {
        console.log(product);
        alert('Cart !!!');
        this.props.cartActions.AddToCart(product);
    }
    render() {
        return (
            <div>
                <h4>Products</h4>
                <ProductsList products={this.props.Products} addToCart={this.addToCart} >
                </ProductsList>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        Products: state.ProductsReducer,
        Cart: state.CartReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProductAction, dispatch),
        cartActions: bindActionCreators(CartAction, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);