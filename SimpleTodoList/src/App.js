import React, { Component } from 'react';
import Todo from './components/todo';
import AddTodo from './components/addTodo';
import './App.css';

class App extends Component {
  constructor(){
    super ();
    this.state = {
      todos: []
    }
  }

  handleChange(id){
    let Items = this.state.todos;
    let index = Items.findIndex(x => (x.id === id));
    Items[index].completed = (Items[index].completed) ? false : true;
    this.setState({
      todos: Items
    });
  }

  handleAdd(item){
    let Items = this.state.todos;
    Items.push(item.todos);
    this.setState ({
      todos: Items
    });
  }

  handleDelete(id){
    let Items = this.state.todos;
    let index = Items.findIndex(x => (x.id == id));
    Items.splice(index, 1);
    this.setState({
      todos: Items
    })
  }

  render() {
    return (
      <div className="App">
        <AddTodo
          addItem={this.handleAdd.bind(this)}/>
        <Todo
          key={this.state.todos.id}
          todos={this.state.todos}
          change={this.handleChange.bind(this)}
          delete={this.handleDelete.bind(this)}/>
      </div>
    );
  }
}

export default App;
