import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectsItems extends Component {
  deleteProjects(id){
    this.props.onDelete(id)
  }
  render() {
    return (
      <li className="Projects">
        <strong>{this.props.projectItem.title}</strong> = {this.props.projectItem.category} 
        <a href='#' onClick={this.deleteProjects.bind(this, this.props.projectItem.id)}> <strong>X</strong></a>
      </li>
    );
  }
}

ProjectsItems.propTypes = {
  projectItem: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectsItems;
