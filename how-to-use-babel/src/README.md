# 바벨(babel) 
입력과 출력이 모두 자바스크립트 코드인 컴파일러
초기에는 ES6수준의 코드를 ES5로 변환하는 역할을 했으나, 현재는 jsx 문법, 타입스크립트와 같은 정적타입언어, 코드압축, 제안 단계에 있는 문법을 사용할 수 있게 해준다.

## 바벨을 실행하는 여러가지 방법
1. @babel/cli로 실행하기 
2. 웹팩에서 babel-loader로 실행하기
3. @babel/core를 직접 실행하기 
4. @babel/register로 실행하기 
  

1. @babel/cli로 실행하기 

```
  yarn add @babel/cli
  yarn add @babel/core
  yarn add @babel/plugin-transform-arrow-functions
  yarn add @babel/plugin-transform-template-literals
  yarn add @babel/preset-react
```


파일 단위로 처리하는 명령어
폴더 단위로 처리하는 명령어 
```
npx babel src/code.js --out-file dist.js
npx babel src --out-dir dist
```

2. 웹팩에서 babel-loader로 실행하기
```
yarn add webpack webpack-cli babel-loader
```
