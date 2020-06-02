import React from 'react';
import Todo from './components/Todo.js';
import './App.css';

class App extends React.Component {
 
  state={
    todo:[
      {
      id: 1,
      title:'Do laundry',
      completed: false
      },
      {
      id: 2,
      title:'Wash dishes',
      completed: false
      },
      {
      id: 3,
      title:'Walk dog',
      completed: false
      },
    ]
  }

  render() {

    
    return (
      
      <div className="App">
        <Todo todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
