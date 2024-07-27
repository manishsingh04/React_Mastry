import { useState } from 'react'
import './App.css'

function App() {

  // const [counter, setCounter] = useState(1);
  // // const [previousCounter, setPreviousCounter] = useState(1);
  // let previousCounter = counter * 5

  // const MultiplyFun = () => {
  //   // setPreviousCounter(counter * 5)
  //   setCounter(counter + 1)
  // }


  console.log("Componenet Rendered", (Math.random() * 10) + 1);
  const [value, setValue] = useState({
    val: 0
  })
  const ClickedMe = () => {
    // setValue(value) //no change in state
    setValue({
      val: 0
    })
  }


  return (
    <>
      {/* <h1>Maine Value:{counter} </h1>
      <button onClick={MultiplyFun}>Clikc here to multiply by 5</button>
      <h1>Multiply Value:{previousCounter} </h1> */}

      <button onClick={ClickedMe}>Click ME :</button>

    </>
  )
}

export default App
