import React, { Component } from 'react';
import Proptypes from 'prop-types';

export class TodoItem extends Component {
    
    
    getStyle = () => {
        if(this.props.todos.completed){return {
            textDecoration: 'line-through',
            background: 'lightgrey',
            padding: '10px',
            borderBottom: '1px black solid'
        }}
        else{return{
            textDecoration: 'none',
            background: 'lightgrey',
            padding: '10px',
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
    padding: '5px 13px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
