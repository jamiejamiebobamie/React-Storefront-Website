import React from 'react'
import React, { Component } from 'react';

class CategoryButton extends Component {

    const listItems =
    (categories.map(
        (category) =>
        <li>
            <button onClick={() => this.ChangeCategory({category})}>{category}</button>
        </li>
        )
    )
  render() {
      return listItems
  }
}

export default CategoryButton;
