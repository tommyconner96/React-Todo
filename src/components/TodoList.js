import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    console.log('this is TodoList props speaking: ', props)

    return (
        <div className='todo-list'>
            {props.todos.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
        <button className="clear-complete" onClick={props.clearComplete}>
          Clear Completed
        </button>
        </div>
    )
}

export default TodoList