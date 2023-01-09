const counterReducer = (taskState, action) => {
  switch (action.type) {
    case 'increment':
      return { count: taskState.count + 1 }
    case 'decrement':
      return { count: taskState.count > 0 ? taskState.count - 1 : 0 }

    case 'reset':
      return { count: 0 }
    default:
     throw new Error()
  }
}

export { counterReducer }