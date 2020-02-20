import React from 'react';
import './Cartpricebar.css'


function Cartpricebar(props){
    let price = 0;

    function add(number1,number2) {
        return number1+number2
    }

    let productPricesArray = []

    for (let i = 0; i < props.cartItems.length; i++){
        productPricesArray.push(parseFloat(props.cartItems[i].price))
    }

    price = productPricesArray.reduce(add)
    price = price.toString()
    price = price.split(".")
    if (price.length > 1){
        if (price[1].length < 2 ){
            price[1] = price[1]+ '0'
        }
        price = price[0] + "." + price[1].slice(0,2)
    } else {
        price = price[0] + ".00"
    }

    return (
        <div className="Pricebar">
            <h3 className="speechBubble">checkout?</h3>
            <h3 className="price">${price}</h3>
            <a className="GITHUB" href="https://github.com/jamiejamiebobamie/react-product-list">
                <img className="cashierImage1" width="276" height="200" src="./imgs/checkout_iconFront.png" alt="" />
            </a>
        </div>
    )
}

export default Cartpricebar

// <img className="cashierImage2" width="276" height="200" src="./imgs/checkout_iconFront.png" alt="" />
// 
