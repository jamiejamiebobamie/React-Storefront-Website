import React, { Component } from 'react';
import './Shopping.css';
import Products from './Products.js'
import inventory, { categories } from './inventory'

class Shopping extends Component {

    constructor(props) {
        super(props);
        this.toggleCategories = this.toggleCategories.bind(this);

        this.state = {
            currentCategories: props.currentCategories,
            showCategories: true,
        };
    }

    ChangeCategory(props) {
        let index = -1
        if (props.category === "All"){
            this.setState( {currentCategories: [props.category]} );
        } else {
            if (this.state.currentCategories){
                if (this.state.currentCategories[0] === "All"){
                    this.setState( {currentCategories: [props.category]} );
                } else {
                    let notPresent = true;
                    for (let i = 0; i < this.state.currentCategories.length; i++){
                        if (this.state.currentCategories[i] === props.category){
                            notPresent = false;
                            index = i
                        }
                    }
                    if (notPresent) {
                        this.setState( {currentCategories:
                            [...this.state.currentCategories, props.category]} );
                    } else {
                        let arr = [...this.state.currentCategories]
                        if (index > -1) {arr.splice(index, 1);}
                        this.setState( {currentCategories:
                            [...arr]} );
                    }
                }
            } else {
                this.setState( {currentCategories: [props.category]} );
            }
        }
    }

    CheckCategories(props){
        if (this.state.currentCategories){
            if (this.state.currentCategories[0] === "All"){
                return true
            } else {
                for (let i = 0; i < this.state.currentCategories.length; i++){
                    if (this.state.currentCategories[i] === props.category){
                        return true
                    }
                }
            }
        }
        return false
    }

    toggleCategories(props) {
        this.setState( { showCategories: !this.state.showCategories } );
                console.log(this.state.showCategories)
    }

    render(){
        const listItems =
        (categories.map((category) =>
            <li key={category} className={ this.CheckCategories({category}) ? "selectedButton":"unselectedButton"}>
                <button onClick={() => { this.ChangeCategory({category})}}>{category} ({inventory.filter(item => item.category === category).length})
                </button>
            </li>
            )
        ); // need to include array key here*    // https://reactjs.org/docs/lists-and-keys.html
        let categories_buttons = (
                    <ul className="categories">
                        {listItems}
                        <li className={(this.CheckCategories({category: "All"}) ? "selectedButton":"unselectedButton")}>
                            <button onClick={() => this.ChangeCategory({category:"All"})}>All ({inventory.length})</button>
                        </li>
                        <li className={(false ? "selected-button":"unselectedButton")}>
                            <button className="noCategories" onClick={() => this.setState( {currentCategories: null} )}>X</button>
                        </li>
                    </ul>
            )
    return (
        <div className="Shopping">
            <button className={(this.state.showCategories ? "toggleCategoriesOn" : "toggleCategoriesOff")} onClick={this.toggleCategories}>Categories</button>
            {this.state.showCategories ? categories_buttons : ""}
            <Products addItemToCart={this.props.addItemToCart} currentCategories={this.state.currentCategories} />
        </div>
    )
}
}
// {(this.state.currentCategories!=null ? <Pricebar currentCategories={this.state.currentCategories}/>:"")}
// None (0)
export default Shopping
