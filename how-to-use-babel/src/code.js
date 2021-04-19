const element = <div>babel test</div>;
// JSX 문법은 createElement 함수 호출로 변환된다.
const text = `element type is ${element.type}`;
// 템플릿 리터럴은 문자열 concat 메서드로 호출 변환된다.
const add = (a, b) => a + b;
// 화살표 함수는 일반 함수로 변환된다.