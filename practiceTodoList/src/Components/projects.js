import React, { Component } from 'react';
import ProjectItems from './projectItems';
import PropTypes from 'prop-types';

class Projects extends Component {
    
    handleDelete(id){
        this.props.delete(id);
    }

    render() {
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(property => {
                return (
                    <ProjectItems 
                        key={property.title} 
                        projectItem={property}
                        onDelete = {this.handleDelete.bind(this)}
                    />
                );
            });
        }
        return (
        <div className="Projects">
            <ul>
                {projectItems}
            </ul>
            </div>
        );
    }
}

Projects.propTypes = {
    projects: PropTypes.array,
    delete: PropTypes.func
}

export default Projects;
