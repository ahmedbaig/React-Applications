import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProjects extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development', 'Front End app']
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.refs.title.value === ""){
      return;  
    }else{
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(property => {
      return (
        <option key={property} value={property}>{property}</option>
      );
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title: </label>
            <input type="text" ref="title" />
            <div>
              <label>Category: </label>
              <select type="text" ref="category">
                {categoryOptions}
              </select>
            </div>
          </div>
          <div>
            <input type="submit" value='submit'/>
          </div>
        </form>
      </div>
    );
  }
}

AddProjects.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default AddProjects;
