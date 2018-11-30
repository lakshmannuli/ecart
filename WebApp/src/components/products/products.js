
import React from 'react'
import productsAPI from '../../api/mockProductsAPI'

class Products extends React.Component {
    componentDidMount() {
        productsAPI.getAllProducts().then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <h4>Products</h4>
        )
    }
}

export default Products;