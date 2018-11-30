
import React from 'react'
import productsAPI from '../../api/mockProductsAPI'
import ProductsList from './productsList'

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Products: [] };
    }
    componentDidMount() {
        productsAPI.getAllProducts().then(response => {
            this.setState({ Products: response });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h4>Products</h4>
                <ProductsList products={this.state.Products}>

                </ProductsList>
            </div>

        )
    }
}

export default Products;