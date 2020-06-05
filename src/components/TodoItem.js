import React, { Component } from 'react';
import Proptypes from 'prop-types';

export class TodoItem extends Component {
    
    
    getStyle = () => {
        if(this.props.todos.completed){return {
            textDecoration: 'line-through',
            background: 'lightgreen',
            padding: '8px',
            borderBottom: '1px black solid'
        }}
        else{return{
            textDecoration: 'none',
            background: 'lightgreen',
            padding: '8px',
            borderBottom: '1px black solid'
        }}
    }
    


    render() {
        const { id, title } = this.props.todos;
        return (
            <div style={this.getStyle()}>
                <p>
                    { title }{'  '}
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)}/>
                    <button onClick={this.props.delTodo.bind(this, id)} style={buttonStyle}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: Proptypes.object.isRequired
  }

const buttonStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '1px 9px',
    
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
