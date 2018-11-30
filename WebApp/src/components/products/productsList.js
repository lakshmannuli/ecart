import React from 'react';
import ProductItem from './productitem';

const ProductsList = (props) => {

    let products = props.products.map((product, i) => {
        return <ProductItem product={product} key={i}></ProductItem>
    });
    
    return (
        <table className="table table-response">
            <tbody>
                <tr className="table-light">
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                {products}
            </tbody>
        </table>
    )
}

export default ProductsList