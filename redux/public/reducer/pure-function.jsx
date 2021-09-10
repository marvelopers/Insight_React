// 순수함수가 아닌 경우의 예
function reducer(state = INITAIL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SAY_HELLO:
        const random = Math.floor(Math.random() * 10 + 1); // random 함수를 이용해서 다음 상태값을 만들면 순수함수가 아니기 때문에 안된다. 
        draft.massage = `안녕하세요! ${action.name}님의 행운의 숫자는 ${random}입니다.`
        break;
      case INCREMENT:
        callApi({ url: '/sendActionLog', data: action }); //API 호출은 액션 생성자 함수나 미들웨어에서 하면 된다. 
        draft.value += 1;
        break;
    }
  })
}
