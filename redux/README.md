리덕스를 사용하면 좋은 점
- 하나의 객체를 직렬화해서 서버와 클라이언트가 프로그램의 전체 상태값을 서로 주고받을 수 있다.
- 최근의 상태값을 버리지 않고 저장해두면 실행취소와 다시 실행 기능을 쉽게 구현할 수 있다.

- 상태값을 불변 객체로 관리한다.
- 리덕스 상태값을 수정하는 유일한 방법은 액션 객체와 함께 deispatch 메서드 호출하는 것이다.
이전 상태값과 이후 상태값을 비교해서 변경 여부를 파악할 때는 불변 객체가 훨씬 유리하다.
상대값 변경을 빠르게 확인할 수 있으면, 메모이제이션과 같은 기능에 활용하기 좋고, 리액트의 리엔더링 성능을 올리는 데도 유리하다.
