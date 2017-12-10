import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {
    handleChange(id){
        this.props.change(id)
    }
    handleDelete(id){
        this.props.delete(id)
    }
    render (){
        let title;
        let complete;
        if((this.props.item.completed) === true){
            title = <strike>{this.props.item.title}</strike>
            complete = true;
        }else {
            title = <strong>{this.props.item.title}</strong>;
            complete = false;
        }
        return (
            <div className='Item'>
                <input type="checkbox" onChange={this.handleChange.bind(this, this.props.item.id)} defaultChecked={complete}/>
                {title}<span> </span>
                <a href="#" onClick={this.handleDelete.bind(this, this.props.item.id)}>X</a>
            </div>
        );
    }
}

TodoItems.propType = {
    item: PropTypes.object,
    change: PropTypes.func,
    delete: PropTypes.func
}

export default TodoItems;