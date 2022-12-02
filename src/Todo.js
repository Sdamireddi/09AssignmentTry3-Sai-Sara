import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
        <li className="todoItem">
        <input className="completeBox" type="checkbox" /*onClick = {this.props.updateItem}*/></input>
        <p>{this.props.text}</p>
        <input className="deleteButton" type="button" name="deleteButton" value="X" onClick = {() => this.props.deleteItem(this.props.id)}></input>
      </li>
    );
  }
}

export default Todo;
