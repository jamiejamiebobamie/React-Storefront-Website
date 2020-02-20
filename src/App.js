import React, { Component } from 'react';
import './App.css';
import Shoppingcart from './Shoppingcart.js';
import Shopping from './Shopping.js';
import Cartpricebar from './Cartpricebar.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.addItemToCart = this.addItemToCart.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
        this.state = {
            currentCategories: ["All"],
            ShoppingCartToggled: true,
            cartItems: [],
        };
    }

    addItemToCart(props) {
        this.setState( { cartItems: [...this.state.cartItems, props] } );
    }

// https://stackoverflow.com/questions/36326612/delete-item-from-state-array-in-react
    removeItemFromCart(props) {
        let array = [...this.state.cartItems]; // make a separate copy of the array
        array.splice(props, 1);
        this.setState( {cartItems: array} );
    }

  render() {
    let pageContent
    if (this.state.ShoppingCartToggled){
        pageContent = <Shoppingcart removeItemFromCart={this.removeItemFromCart} cartItems={this.state.cartItems}/>
    }else{
        pageContent = <Shopping addItemToCart={this.addItemToCart} currentCategories={this.state.currentCategories}/>
    }
        return (
          <div className="App">
              <div className="fauxNavbar">
                  <div className="title">
                    <h1 className="display">EasyShop</h1>
                    <button className="toggleCart" onClick={ () => { this.setState( {ShoppingCartToggled: !this.state.ShoppingCartToggled} ) } }> { (this.state.ShoppingCartToggled ? 'Shop' :("My Cart ("+this.state.cartItems.length+")") )}</button>
                  </div>
                  {(this.state.cartItems < 1 ? <Cartpricebar cartItems={[{price:0.00}]} /> : <Cartpricebar cartItems={this.state.cartItems} />)}
              </div>
                <ol className="container">
                    {pageContent}
                </ol>
          </div>
        );
    }
  }

export default App;
