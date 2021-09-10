function reducer(state = INITAIL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ADD:
        draft.todos.push(action.todo);
        break;
      case REMOVE_ALL:
        draft.todos = [];
        break;
      case REMOVE:
        draft.todos = draft.todos.fitler(todo => todo.id !== action.id);
        break;
      default:
        return state;
    }
  })
}


const INITAIL_STATE = { todos: [] };

