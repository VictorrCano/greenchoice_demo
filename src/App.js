import React from 'react';
import Todo from './components/Todo.js';
import AddTodo from './components/AddTodo.js';
import Header from './components/layout/Header.js';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


class App extends React.Component {
  


  state={
    todo:[
      {
      id: uuidv4(),
      title:'Sample To-Do Item',
      completed: false
      }
    ]
  }

  //mark complete task with line
  markComplete = (id) => {
    this.setState({todo: this.state.todo.map(todo => {
      if(todo.id === id) {todo.completed = !todo.completed}
      return todo;
    })})

  }

  //delete todo item
  delTodo = (id) => {
    this.setState({ todo: [...this.state.todo.filter(todos => todos.id !== id)] })
  }

  //add todo item
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({todo: [...this.state.todo, newTodo]})
  }

  render() {

    return (
      
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todo todo={this.state.todo} 
          markComplete={this.markComplete} 
          delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
