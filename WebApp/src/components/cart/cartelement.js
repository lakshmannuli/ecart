import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartAction from '../../actions/cartAction'

class CartElement extends React.Component {
    constructor(props) {
        super(props);
        this.props.actions.GetCartItems();
    }
    render() {
        console.log('Render !!!!!');
        console.log(this.props.CartItems);
        return (
            <div>
                <div className="fa fa-shopping-cart"></div>
                <span>{ this.props.CartItems !=null ? this.props.CartItems.length : -1}</span>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        CartItems: state.CartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CartAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartElement)