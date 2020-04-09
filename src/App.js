import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const todos = [

  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }

]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

//constructor
constructor() {
  super()
  this.state = {
    todos: todos
  }
}

//handlers
addItem = (e, item) => {
  console.log('this is addItem reporting for duty! current items:', this.state.todos)
  e.preventDefault()

  const newItem = {
    task: item,
    id: Date.now(),
    completed: false
  }

  this.setState({
    todos: [...this.state.todos, newItem]
  })
  console.log('added items!! :', this.state.todos)
}

toggleItem = (itemId) => {
  console.log('this is your item id speaking:', itemId)

  this.setState({
    todos: this.state.todos.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
  })
}

clearComplete = (e) => {
  e.preventDefault()

  this.setState({
    todos: this.state.todos.filter(item => !item.completed)
  })
}

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <div className="Form">
            <TodoForm 
            addItem={this.addItem}
            />
          </div>
          <div className="List">
            <TodoList
            todos={this.state.todos}
            toggleItem={this.toggleItem}
            clearComplete={this.clearComplete}
            />
          </div>
      </div>
    );
  }
}

export default App;
