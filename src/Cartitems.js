
import React from 'react';
import './Cartitems.css'

function Cartitems(props){
    return(
        <button className="Cartitems" onClick={()=> props.removeItemFromCart(props.index)}>
        <h1 className="buyItem">remove item</h1>
        <li className="ItemsInfo">
            <div className="item-text-name">{props.name}</div>
            <div className="item-text-price">${props.price}</div>
            <div className="item-text-category">{props.category}</div>
        </li>
        <img className="itemImg" src="/imgs/product.png" alt=""/>
        </button>
    )
}


export default Cartitems
