
// import { useState } from 'react'
import UseState from './component/UseState'
import './App.css'

function App() {

  // let [count, setCount] = useState(0)

  // const addhandler = () => {
  //   count = count + 1;
  //   setCount(count)
  // }

  // const subhandler = () => {

  //   if (count > 0) {
  //     count = count - 1;
  //     setCount(count)
  //   }
  // }

  return (
    <>
      {/* <h1>Hello, welocme to react hooks tutorial</h1>
      <h1>count: {count}</h1>
      <button onClick={addhandler}>ADD</button>
      <button onClick={subhandler}>SUB</button> */}
      <UseState />
    </>
  )
}

export default App
