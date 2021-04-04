// 리덕스에서 제공하는 combineReducer를 사용하면 리듀서마다 새로운 이름을 부여하면서 객체의 깊이가 길어진다.


function mergerReducers(reducers) { //리듀서를 반환한다.
  return function (state, action){
    if(!state){
      return reducers.reduce((acc,r)=> ({...acc, ...r(state, action)}),{})
    }else{
      let nextState= state;
      for(const r of reducers){
        nextState = r(nextState, action);
      }
      return nextState;
    }
  };
}

export default mergerReducers
