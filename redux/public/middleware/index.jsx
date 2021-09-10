
//This is middleware
const myMiddleware = store => next => action => next(action);

const myMiddlewarePure = function (store) {
  return function (next) {
    return function (action) {
      return next(action);
    }
  }
}

// middleWare 설정 방법
import { createStore, applyMiddleware } from 'redux';
const middleware1 = store => next => action => {
  const result = next(action);
  return result;
}

const middleware2 = store => next => action => {
  const result = next(action);
  return result;
}

const myReducer = (state, action) => {
  return state;
}

const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
store.dispatch({ type: 'someAction' })


