import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

const url = "https://cse204.work/todos";
const api_key = "69ed88-c749fc-d73c52-0c5e80-ee5441";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {todos : []}
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount(){
    const self = this;
    //AJAX
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let todo_array = JSON.parse(this.responseText);
            console.log("connection established!!!");
            self.setState({todos : todo_array});
            console.log(self.state.todos)
            // for (var x=0; x<todo_array.length; x++){
            //     let todo_item = todo_array[x];
            //     console.log(todo_item);
            //     // display(todo_item);
            // }
        }
    };

    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-api-key", api_key);
    xhttp.send();
  }

  deleteItem(id){
    console.log("you wanna delete something.")
    const self = this;
    let xhttp4 = new XMLHttpRequest();
    xhttp4.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const todos_left = self.state.todos.filter(function(todo){
              return todo.id !== id;
            })
            self.setState({todos: todos_left});
        }
    };

    xhttp4.open("DELETE", url+"/"+id, true);
    xhttp4.setRequestHeader("Content-type", "application/json");
    xhttp4.setRequestHeader("x-api-key", api_key);
    xhttp4.send();
  }

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
          {this.state.todos.map((todo)=>
            <Todo id = {todo.id}
            text = {todo.text}
            key = {todo.id}
            completed = {todo.completed}
            created_at = {todo.created_at}
            deleteItem = {this.deleteItem}
            />
          )}
          </ul>
        </div>

      <NewTodo />

    </div>

    );
  }
}

export default App;
