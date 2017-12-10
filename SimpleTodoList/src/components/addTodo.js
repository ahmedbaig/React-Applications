import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddTodo extends Component {
    constructor (){
        super ();
        this.state = {
            todos: {
                id: null,
                title: null,
                completed: false
            }
        }
    }
    handleSubmit(e){
        e.preventDefault();
        let title = this.refs.title.value;
        if(title === ''){
            return;
        }else {
            this.setState({
                todos: {
                    id: uuid.v4(),
                    title: title,
                    completed: false
                }
            }, function (){
                this.props.addItem(this.state);
                this.refs.title.value = "";
            });
        }
    }
    render (){
        return (
            <div className='newTask'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>New Task: </label>
                    <input type="text" ref='title'/>
                    <input type="submit" value='enter'/>
                </form>
            </div>
            
        );
    }
}

AddTodo.propType = {
    addItem: PropTypes.func
}

export default AddTodo;