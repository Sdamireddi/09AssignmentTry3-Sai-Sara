import React, { Component } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import Todo from './Todo';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     todos: []
  //   }
  //   // set variables here
  //   // bind event handlers/methods here
  // }

  //didMount
  //addItem
  //removeItem
  //onChange


  render() {
    return (
      <div>
        <div className="headerstuff">
          <h1 className="center" id="title">A ToDo App</h1>
          <h2 className="center" id="author">By Sara Lichtarge and Sai Damireddi</h2>
        </div>

        <div className="top">
          <h3> Your To-Do List</h3>
        </div>
        <hr></hr>

          <div id="container">
            <ul id="listOfItems">
              <Todo />
            </ul>
          </div>

        <NewTodo />

      </div>

    );
  }
}

export default App;