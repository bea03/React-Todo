import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const toDoItems = [
  {
    task: 'Do Dishes',
    id: 0,
    completed: false
  },
  {
    task: 'Fold Laundry',
    id: 1,
    completed: false
  },
  {
    task: 'Take Out Trash',
    id: 2,
    completed: false
  },
  {
    task: 'Walk Dog',
    id: 3,
    completed: false
  },
  {
    task: 'Weed Garden',
    id: 4,
    completed: false
  },
  {
    task: 'Pay Bills',
    id: 5,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();
      this.state = {
        toDoItems: toDoItems
      };
    }

    toggleItem = id => {
        console.log(id);
        this.setState({
          toDoItems: this.state.toDoItems.map(item => {
            if (item.id === id) {
              return {
                ...item, //spread operator
                completed: !item.completed
              };
            } else {
              return item;
            }
          })
        });
    };

    addItem = itemName => {
        const newItem = {
          task: itemName,
          id: Date.now(),
          complted: false
        }
        this.setState({
          toDoItems: [...this.state.toDoItems, newItem]
        })
    };

    clearCompleted = () => {
        this.setState({
          toDoItems: this.state.toDoItems.filter(item => !item.completed)
        });
    };


    render() {
        return (
          <div className="App">
            <div className="header">
              <h1>To Do List</h1>
              <TodoForm clearCompleted={this.clearCompleted} addItem={this.addItem} />
            </div>

            <TodoList toDoItems={this.state.toDoItems}
                toggleItem={this.toggleItem}
            />
          </div>
        );
   }
}
export default App;
