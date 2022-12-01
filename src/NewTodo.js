import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
        <div id="newItem">
        <label for="newItemEnter"></label>
        <input type = "text" id="newItemEnter" required></input>
        <button type="submit" id="submitNewItem">&#10003;</button>
    </div>
    );
  }
}

export default NewTodo;
