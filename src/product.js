import React, import { Component } from 'react'

class Product extends Component {

    DisplayProducts() {
        const category = this.state.currentCategory
        const results = inventory.filter(item => item.category === category);
        const products =
        (
            results.map((result) =>

            <li className="items">
                <div className="item-text">Name: {result.name}</div>
                <div className="item-text">Category: {result.category}</div>
                <div className="item-text">Price: {result.price}</div>
            </li>)

        ); // need to include array key here* //https://reactjs.org/docs/lists-and-keys.html
        return products;
    }

  render() {
      return ({this.DisplayProducts})
}

export default Product;
