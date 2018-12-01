import React from 'react'
import productsAPI from '../../api/mockProductsAPI'
import ProductsList from './productsList'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProductAction from '../../actions/productAction'

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Products: [] };
        this.props.actions.GetProducts();
    }
    
    render() {
        debugger;
        console.log(this.props.Products);
        return (
            <div>
                <h4>Products</h4>
                <ProductsList products={this.props.Products}>

                </ProductsList>
            </div>

        )
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    console.log('Map State To Props')
    console.log(state.ProductsReducer);
    return {
        Products: state.ProductsReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProductAction, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);