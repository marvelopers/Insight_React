//# 리덕스의 applyMiddleware 함수
const applyMiddleware = (...middlewares) => createStore => (...args) => {
  // 스토어를 생성한다.
  const store = createStore(...args);
  // 모든 미들웨어의 첫 번째 함수를 호출한다. 
  const funcsWithStore = middlewares.map(middleware => middleware(store));
  // 모든 미들웨어의 두 번째 함수를 체인으로 연결한다. 
  const chainedFunc = funcsWithStore.reduce((a, b) => next => a(b(next)));

  // 외부에 노출되는 스토어의 dispatch 메서드는 미들웨어가 적용된 버전으로 변경된다.  
  return {
    ...store,
    dispatch: chainedFunc(store.dispatch)
  }
}


// dispatch 메서드의 내부 구현 
function dispatch(action) {
  // reducer 함수를 호출해서 현재 상태값을 변경한다
  currentState = currentReducer(currentState, action);
  // dispatch 메서드가 호출될 때마다 등록된 모든 함수를 처리한다.
  // 상태값이 변경되지 않아도 이벤트 처리 함수를 호출하는 것에 주목하자
  // 상태값 변경을 검사하는 코드는 각 이벤트 처리 함수에서 구현해야 한다.
  // react-redux 패키지의 connect 함수에서는 자체적으로 상태값 변경을 검사한다.
  for (let i = 0; i < listeners.length; i++) {
    listeners[i]
  }
  return action;
}

// 로그를 출력해주는 미들웨어 
const printLog = store => next => action => {
  console.log(`prev state = ${store.getState()}`);
  const result = next(action);
  console.log(`next state = ${store.getState()}`);
  return result;
}

// 에러 정보를 호출해주는 미들웨어 
const reportCash = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    // 서버로 예외 정보 전송
  }
}

// 실행을 연기할 수 있는 미들웨어 
const delayAction = store => next => action => {
  //  delay 객체가 있을 때만, 정해진 시간만큼 연기한다. 
  const delay = action.meta && action.meta.delay;
  if (!delay) {
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action, delay));
  // 반환된 함수를 호출하면 next 함수의 호출을 막을 수 있다.
  return function cancel() {
    clearTimeout(timeoutId);
  }
}

//>> 위에 미들웨어를 활용해 실행이 연기되는 액션의 예
const cancel = store.dispatch({
  type: 'SomeAction',
  meta: { delay: 1000 }
});

cancel();

// 로컬스토리지에 값을 저장하는 미들웨어 
const saveToLocalStorage = store => next => action => {
  // 'SET_NAME' 액션이 실행될 때마다 로컬스토리지에 값을 저장한다.
  if (action.type === 'SET_NAME') {
    localStorage.setItem('name', action.name);
  }
  return next(action);
}