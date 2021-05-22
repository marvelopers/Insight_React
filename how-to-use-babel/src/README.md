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

* 바벨은 컴파일 시 파싱, 변환, 생성 3가지 단계를 거친다.

### 전체 설정 파일과 지역 설정 파일

1. 전체 설정 파일 : babel.config.js
2. 지역 설정 파일 : .babelrc, .babelrx.js 


## 바벨과 폴리필

1. core-js 
```
import 'core-js'
```

2. core-js에서 필요한 폴리필만 가져오기
```
import 'core-js/faeture/promise'; 
import 'core-js/faeture/object/values'; 
```

3. @babel/preset-env 프리셋 이용하기
babel.config.js
```
const presets = [
  [
    '@babel/perset-env',
    {
      targets: '>0.25%', 'not dead',
    },
  ],
]

module.exports = { presets };
```