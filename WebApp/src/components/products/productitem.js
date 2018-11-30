import React from 'react'

const ProductItem = (props) =>{
    return(
        <tr>
            <td>
                {props.product.id}
            </td>
            <td>
                {props.product.Name}
            </td>
            <td>
                {props.product.Price}
            </td>
        </tr>
    );
}

export default ProductItem