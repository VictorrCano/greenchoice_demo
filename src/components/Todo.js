import React from 'react';
import TodoItem from './TodoItem.js';
import Proptypes from 'prop-types';


class Todo extends React.Component {
  


  render() {
    return this.props.todo.map((todos) => (
      <TodoItem key={todos.id} todos={todos} 
      markComplete={this.props.markComplete}
      delTodo={this.props.delTodo}/>
      ));

  }
}

Todo.propTypes = {
  todo: Proptypes.array.isRequired
}

export default Todo;
