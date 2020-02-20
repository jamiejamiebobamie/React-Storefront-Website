import React from 'react';
import './Shoppingcart.css';
import Cartproducts from './Cartproducts.js'
import './Shoppingcart.css'

function ShoppingCart(props){
    const items =  (
        <div>
            <Cartproducts
                removeItemFromCart={props.removeItemFromCart}
                cartItems={props.cartItems}
            />
        </div>
    )

    const noItems = (
        <div>
            <img className="cartPicture" src="./imgs/cart_icon.png"alt=""/>
            <h1 className="cartMessage" >no items in cart</h1>
        </div>
    )

    return (
        <div className="ShoppingCart">
            <h1 className="cartHeader">my cart</h1>
            {(props.cartItems.length>0 ? items : noItems)}
        </div>
    )
}

export default ShoppingCart
