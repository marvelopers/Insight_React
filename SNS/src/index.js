import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers,creatStore } from 'redux';
import './index.css';
import App from './App';
import { addTimeline, increaseNextPage, editTimeline, removeTimeline } from './timeline/state';
import { addFriend, editFriend, removeFriend } from './friend/state';

//combineReducers로 함수 통합 
const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
})

//store 생성
const store = creatStore(reducer);

store.subscribe(()=>{
  const state = store.getState();
  console.log(state);
});

store.dispatch(addTimeline({id:1, desc: '리덕스의 기본에 대해 공부합니다.'}))
store.dispatch(addTimeline({id:2, desc: '개발 좋아'}))
store.dispatch(increaseNextPage());
store.dispatch(editTimeline({id:2 , desc: '프론트엔드 개발자는 즐거워'}))
store.dispatch(removeTimeline({id:1, desc: '리덕스의 기본에 대해 공부합니다.'}))

store.dispatch(addFriend({id: 1, name: 'Chloe'}))
store.dispatch(addFriend({id: 2, name: 'AM'}))
store.dispatch(editFriend({id: 1, name: 'Chloe Kim'}))
store.dispatch(removeFriend({id: 2, name: 'AM'}))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
