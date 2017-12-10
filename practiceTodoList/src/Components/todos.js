import React, { Component } from 'react';
import TodoItems from './todoItems';
import PropTypes from 'prop-types';

class Todo extends Component {
    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(property => {
                return (
                    <TodoItems 
                        key={property.title} 
                        todoItem={property}
                    />
                );
            });
        }
        return (
        <div className="Projects">
            <ul>
                {todoItems}
            </ul>
            </div>
        );
    }
}

Todo.propTypes = {
    todos: PropTypes.array
}

export default Todo;
