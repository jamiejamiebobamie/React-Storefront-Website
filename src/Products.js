import React from 'react';
import './Products.css'
import inventory from './inventory'
import Items from "./Items.js"

function Products(props){
    function DisplayProducts() {
        const categories = props.currentCategories
        if (categories){
            if (categories[0] === "All"){
                const results = inventory;
                const products =
                (results.map(
                    (result) =>
                    <Items key={result.name} addItemToCart={props.addItemToCart} description={result.description} name={result.name} category={result.category} price={result.price} />
                    )
                ); // need to include array key here* //https://reactjs.org/docs/lists-and-keys.html
                return products;
            } else {
                let results = []
                for (let i = 0; i < categories.length; i++){
                    const productsPerCat = inventory.filter(item => item.category === categories[i]);
                    for (let i = 0; i < productsPerCat.length; i++){
                        results.push(productsPerCat[i])
                    }
                }
                const products =
                (results.map(
                    (result) =>
                    <Items key={result.name} addItemToCart={props.addItemToCart} description={result.description} name={result.name} category={result.category} price={result.price} />
                    )
                ); // need to include array key here* //https://reactjs.org/docs/lists-and-keys.html onClick={() => props.addItemToCart}
                return products;
            }
        }
    }

    return (
    <ul className="Products">
        {DisplayProducts()}
    </ul>
    )
}


export default Products;
