import React, {Component} from 'react';
import TodoItems from './todoItems';
import PropTypes from 'prop-types';

class Todo extends Component { 
    handleChange(id){
        this.props.change(id);
    }
    handleDelete(id){
        this.props.delete(id);
    }
    render (){
        let items;
        if(this.props.todos){
            items = this.props.todos.map(property => {
                return (
                    <div className='Todo'>
                        <TodoItems 
                            key={property.title}
                            item = {property}
                            change = {this.handleChange.bind(this)}
                            delete = {this.handleDelete.bind(this)}/>
                    </div>
                );
            });
        }
        return (
            <div>{items}</div>
        );
    }
}

Todo.propType = {
    todos: PropTypes.array,
    change: PropTypes.func,
    delete: PropTypes.func
}

export default Todo;