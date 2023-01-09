const counterReducer = (taskState, action) => {
  switch (action.type) {
    case 'increment':
      return { count: taskState.count + 1 }
    case 'decrement':
      return { count: taskState.count - 1 }

    case 'reset':
      return { count: taskState.count = 0 }
    default:
      return taskState
  }
}

export { counterReducer }