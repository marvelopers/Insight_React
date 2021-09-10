import produce from 'immer';

function createReducer(initialState, handlerMap) {
  // createRuducer 함수는 리듀서 함수를 반환한다.
  //  초기 상태값인 initialState변수를 state 매개변수의 기본값으로 사용했다. 
  return function (state = initialState, action) {
    // 리듀서 함수 전체를 immer의 produce함수로 감쌌다.
    return produce(state, draft => {
      // 등록된 액션 처리 함수가 있다면 실행한다.
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    })
  }
}

// const reducer = createReducer(INITAIL_STATE, {
//   [ADD]: (state, action) => state.todos.push(action.todo),
//   [REMOVE_ALL]: state => (state.todos = []),
//   [REMOVE]: (state, action) =>
//     (state.todos = state.todos.filter(todo => todo.id !== action.id)),
// });