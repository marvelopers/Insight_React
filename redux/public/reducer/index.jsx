function reducer(state = INITAIL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: getNewId(), title: action.title, priority: action.priority }
        ]
      }
    case REMOVE_ALL:
      return {
        ...state,
        todos: [],
      }
    case REMOVE:
      return {
        ...state,
        todos: state.todos.fitler(todo => todo.id !== action.id),
      }
    default:
      return state;
  }
}


const INITAIL_STATE = { todos: [] };

