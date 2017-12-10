import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {
  render() {
    return (
      <li className="Projects">
        <strong>{this.props.todoItem.title}</strong>
      </li>
    );
  }
}

TodoItems.propTypes = {
  TodoItem: PropTypes.object
}

export default TodoItems;
