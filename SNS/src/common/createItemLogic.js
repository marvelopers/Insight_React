import React from 'react'
import createReducer from './createReducer';

function createItemLogic(name) {
  const ADD = `${name}/ADD`;
  const REMOVE = `${name}/REMOVE`;
  const EDIT = `${name}/EDIT`;

  export const add = item => ({type:ADD,item});
  export const remove = item => ({type:REMOVE,item});
  export const edit = item => ({type:EDIT,item});

  const reducer = createReducer(
    {[name]: []}, // 초기 상태값으로 빈 배열을 넣는다.
    {
      [ADD]:(state, action)=>state[name].push(action.item),
      [REMOVE]:(state, action) => {
      const index = state[name].findIndex(item => item.id === action.item.id);
      state[name].splice(index,1);
    },
    [EDIT] : (state, action)=>{
      const index = state[name].findIndex(item => item.id === action.item.id);
      if(index >= 0){
        state[name][index] = action.item;
      }
    }
  }
  )
return {add, remove, edit, reducer}
}

export default createItemLogic
