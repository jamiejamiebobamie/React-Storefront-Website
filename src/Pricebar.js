import React from 'react';
import inventory from './inventory'
import './Pricebar.css'


function Pricebar(props){
    const categories = props.currentCategories
    let price = 0;
    let results = [];

    function add(number1,number2) {
        return number1+number2
    }

    let productPricesArray = []
        if (categories[0] === "All"){
            results = inventory;
        } else {
            for (let i = 0; i < categories.length; i++){
                const productsPerItem = inventory.filter(item => item.category === categories[i]);
                for (let i = 0; i < productsPerItem.length; i++){
                    results.push(productsPerItem[i]);
                }
            }
        }

        for (let i = 0; i < results.length; i++){
            productPricesArray.push(parseFloat(results[i].price))
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
            price = price[0] + " dollars"
        }


    return (
        <div className="Pricebar">
            <h3>the price for these items is {price}</h3>
        </div>
    )
}

export default Pricebar
