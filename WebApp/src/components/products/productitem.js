import React from 'react'

class ProductItem extends React.Component {
    constructor(props) {
        super(props);
    }
    addItemToCart = () => {
        this.props.addToCart(this.props.product);
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.product.Name}
                </td>
                <td>
                    {this.props.product.Price}
                </td>
                <td>
                    <button onClick={this.addItemToCart}>Add To Cart</button>
                </td>
            </tr>
        );
    }
}


export default ProductItem