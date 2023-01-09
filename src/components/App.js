import React, { useReducer } from 'react'
// import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
  const initialTaskState = {
    count: 0
  }
  const [taskState, dispatch] = useReducer(counterReducer, initialTaskState)

  const counterReducer = (taskState, action) => {
    switch (action.type) {
      case 'add':
        return { count: taskState.count + 1 }
      case 'delete':
        return { count: taskState.count > 0 ? taskState.count - 1 : 0 }
  
      case 'deleteAll':
        return { count: 0 }
      default:
       throw new Error()
    }
  }

 
  return (
    <div id="main">
      <h1>Task Counter</h1>

      <button id='addTaskBtn' onClick={() => dispatch({ type: 'add' })}>Add a task</button>
      <button id='delTaskBtn' onClick={() => dispatch({ type: 'delete' })}>Delete a task</button>
      <button id='delAllTaskBtn' onClick={() => dispatch({ type: 'deleteAll' })}>Delete all tasks</button>
  
      <h3 className='counter'> Number of Tasks : {taskState.count}</h3>
    </div>
  )
}


export default App;
