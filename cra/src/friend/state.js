import createReducer from '../common/createReducer';

//액션 타입 정의
const ADD = 'friend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT';

//액션 생성자 함수 정의
export const addFriend = friend => ({type:ADD,friendfriend});
export const removeFriend = friend => ({type:REMOVE,friendfriend});
export const editFriend = friend => ({type:EDIT,friendfriend});


const INITIAL_STATE = {friends:[]};

// 리듀서 정의
const reducer = createReducer(INITIAL_STATE,{
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]:(state, action) => (state.friends= state.friends.filter(friend => friend.id !== action.friend.id)),
  [EDIT]:(state, action) => {
    const index = state.friends.findIndex(
      friend=> friend.id ===action.friend.id
    );
    if(index >= 0){
      state.friends[index] = action.friend;
    }
  }
})

export default reducer;

//덕스패턴
// 리덕스 공식문서에서는 액션타입, 액션 생성자 함수, 리듀서 함수를 각각의 파일로 관리 한다. 덕스패턴을 사용하면 이를 하나의 파일에서 관리할 수 있다.
// - 연관된 액션 타입, 액션 생성자 함수, 리듀서 파일을 하나의 파일로 작성한다.
// - 리듀서 함수는 export default 키워드로 내보낸다.
// - 액션 생성자 함수는 export 키워드로 내보낸다.