import React, { useState } from 'react'
import ReactDOM from 'react-dom'

var App = props => {
  var [count, setCount] = useState(props.count)
  var [text, setText] = useState('')
  return (
    <div>
      <h2>
        the current {text || 'count'} is {count}
      </h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>reset</button>
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  )
}
App.defaultProps = {
  count: 0
}
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
