// store는 리덕스의 상태값을 가지는 객체, 
// action의 발생은 store의 dispatch 메서드로 시작된다
// store는 액션이 발생하면 미들웨어 함수를 실행하고, 리듀서를 실행해 상태값을 새로운 값으로 변경한다. 그리고 사전에 등록된 모든 이벤트 처리 함수에 액션의 처리가 끝났음을 알린다.

/*
리덕스의 첫 번째 원칙 : 애플리케이션의 전체 상태값을 하나의 스토어에 저장한다. 
기술적으로는 여러개의 스토어를 갖는 것이 가능하지만, 단순히 데이터 종류에 따라 구분하기 위한 용도라면 combineReducer를 이용하면 된다. 
외부에서 상태값 변경 여부를 알기 위해서는 스토어에 이벤트 처리 함수를 등록하면 된다. 
*/

const INIT_STATE = {value: 0};
const reducer = createReducer(INIT_STATE, {
  INCREMENT : state => (state.value += 1),
});

const store = createStore(reducer);

let prevState;
store.subscribe(()=>{
  const state= store.getState();
  if(state === prevState) {
    console.log('상태값 같음')
  } else{
    console.log('상태값 다ㄹㅁ')
  }
  prevState = state;
})

store.dispatch({type: 'INCREMENT'})