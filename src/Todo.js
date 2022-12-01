import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
        <li className="todoItem">
        <input className="completeBox" type="checkbox"></input>
        <p>{this.props.value}Test</p>
        <input className="deleteButton" type="button" name="deleteButton" value="X"></input>
      </li>
    );
  }
}

export default Todo;
