import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
  const initialTaskState = {
    count: 0
  }

  // const counter = (taskState, action) => {
  //   switch (action.type) {
  //     case 'increment':
  //       return { count: taskState.count + 1 }
  //     case 'decrement':
  //       return { count: taskState.count - 1 }

  //     case 'reset':
  //       return { count: taskState.count = 0 }
  //     default:
  //       return taskState;
  //   }
  // }

  const [taskState, dispatch] = useReducer(counterReducer, initialTaskState)
  return (
    <div id="main">
      <h1>Task Counter</h1>

      <button id='addTaskBtn' onClick={() => dispatch({ type: 'increment' })}>Add a task</button>
      <button id='delTaskBtn' onClick={() => dispatch({ type: 'decrement' })}>Delete a task</button>
      <button id='delAllTaskBtn' onClick={() => dispatch({ type: 'reset' })}>Delete all tasks</button>
      <br /><br />
      <span id='counter' style={{ fontSize: '26px', fontWeight: 'bold' }}> Number of Tasks : {taskState.count}</span>
    </div>
  )
}


export default App;
