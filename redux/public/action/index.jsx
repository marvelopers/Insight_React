import React from 'react'

function index() {
  return (
    <div>

    </div>
  )
}

export default index

// 타입이름 상수 변수, 액션타입을 유일한 값으로 만들기 위해 접두사 사용
export const ADD = 'todo/ADD';
export const REMOVE = 'todo/REMOVE';
export const REMOVE_ALL = 'todo/REMOVE_ALL';

// 액션 생성자 함수도 외부에서 호출해야 함, 
export function addTodo({ title, priority }) {
  return { type: ADD, title, priority };
}
export function removeTodo({ id }) {
  return { type: REMOVE, id };
}
export function removeAllTodo() {
  return { type: REMOVE_ALL };
}

npx create - next - app fitpet - go--use - npm--example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"