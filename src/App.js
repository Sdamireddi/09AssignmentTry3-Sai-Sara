import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

const url = "https://cse204.work/todos";
const api_key = "69ed88-c749fc-d73c52-0c5e80-ee5441";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {todos : []};
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.addItem = this.addItem.bind(this);
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
            const toSort = self.state.todos;
            toSort.sort();
            self.setState({todos: toSort})
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

  updateItem(id){
    const self = this;
    console.log("you wanna update something.")

    var checkbox = document.getElementsByClassName(id)[0]
    console.log(checkbox.type)
    let checked = new Boolean(checkbox.checked)
    if (checked == true){
        var data = {
            completed: true
        }
    }
    else{
        var data = {
            completed: false
        }
    }
    var xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var updated_todo = JSON.parse(this.responseText);
            console.log(updated_todo);
            const updatedTodos = self.state.todos.filter(function(todo){
              return todo.id !== id;
            })
            self.setState({todos : updatedTodos.concat(updated_todo)})
        } else if (this.readyState == 4) {
            console.log(this.responseText);
        }
    };

    xhttp3.open("PUT", url+"/"+id, true);
    xhttp3.setRequestHeader("Content-type", "application/json");
    xhttp3.setRequestHeader("x-api-key", api_key);
    xhttp3.send(JSON.stringify(data));
  }

  addItem(){
    const self = this;
    console.log("you wanna add something.");
    var data = {
      text: document.getElementById("newItemEnter").value
    }
    //Make API POST call to send this item to list
    var xhttp2 = new XMLHttpRequest();

    //when loaded
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var new_todo = JSON.parse(this.responseText);
            self.setState({todos : self.state.todos.concat(new_todo)})
            document.getElementById("newItemEnter").value = ""
        }
        else if (this.readyState == 4) {
            // this.status !== 200, error from server
            console.log(this.responseText);
        }
    };

    xhttp2.open("POST", url, true);
    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key",api_key);
    xhttp2.send(JSON.stringify(data));
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
            updateItem = {this.updateItem}
            />
          )}
          </ul>
        </div>

      <NewTodo addItem = {this.addItem}/>

    </div>

    );
  }
}

export default App;
