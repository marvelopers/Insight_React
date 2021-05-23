import React from 'react';
import ReactDom from 'react-dom';
import Style from './App.css';

function App() {
  console.log(Style)
  return (
    <div className="continer">
      <h3 className="title">webpack example</h3>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))

