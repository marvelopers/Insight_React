import React from 'react'
import ReactDom from 'react-dom'

function App() {
  return (
    <div>
      <h3>웹팩 플러그인 예제 코드입니다.</h3>
      <p>html-webpack-plugin을 사용합니다.</p>
    </div>
  )
}

export default App

ReactDom.render(<App />, document.getElementById('root'))