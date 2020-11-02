import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers,creatStore } from 'redux';
import './index.css';
import App from './App';

//combineReducers로 함수 통합 
const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
})

//store 생성
const store = creatStore(reducer);

store.subscribe(()=>{
  const state = store.getState();
  console.log(store);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
