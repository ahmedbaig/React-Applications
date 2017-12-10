import React, { Component } from 'react';
import Projects from './Components/projects'
import AddProjects from './Components/addprojects'
import Todo from './Components/todos';
import uuid from 'uuid'
import $ from 'jquery'
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data},function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getProjects(){
    this.setState(
      {
        projects: [
          {
            id: uuid.v4(),
            title: "Business Site",
            category: "web Design"
          },
          {
            id: uuid.v4(),
            title: "Social App",
            category: "Mobile Development "
          },
          {
            id: uuid.v4(),
            title: "Ecomerce shopping card",
            category: "web development"
          }
        ]
      }
    );
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState(
      {
        projects: projects
      }
    );
  }

  handleDelete(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => {
      if(x.id === id){
        return x;
      }
      return 0;
    });
    projects.splice(index, 1);
    this.setState({
      projects: projects
    });
  }

  render() {
    return (
      <div className="App">
        <AddProjects 
          addProject = {this.handleAddProject.bind(this)}
          categories = {this.state.category}/>
        <h3>Projects List</h3>
        <Projects 
          projects = {this.state.projects}
          delete = {this.handleDelete.bind(this)}/>
        <hr/>
        <h3>Todo List</h3>
        <Todo
          todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
