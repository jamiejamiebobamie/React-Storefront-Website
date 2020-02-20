import React from 'react';
import './Cartproducts.css'
import Cartitems from './Cartitems.js'

function Cartproducts(props){
    function DisplayProducts() {
        const items = props.cartItems
        if (items){
                const products =
                (items.map(
                    (items, index) =>
                    <Cartitems index={index}
                               removeItemFromCart={props.removeItemFromCart}
                               name={items.name}
                               category={items.category}
                               price={items.price}
                    />
                    )
                );
                return products;
            }
        }

    return (
    <ul className="Cartproducts">
        { DisplayProducts() }
    </ul>
    )
}

export default Cartproducts;
