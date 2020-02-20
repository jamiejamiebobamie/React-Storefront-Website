import React from 'react';
import './Items.css'

function Items(props){
    return(
        <button className="Items" onClick={()=> props.addItemToCart(props)}>
            <h1 className="buyItem1">{props.description}</h1>
            <h1 className="buyItem2">click to add to cart</h1>
        <li className="ItemsInfo">
            <div className="item-text-name">{props.name}</div>
            <div className="item-text-price">${props.price}</div>
            <div className="item-text-category">{props.category}</div>
        </li>
        <img className="itemImg" src="/imgs/product.png" alt=""/>
        </button>
    )
}


export default Items
