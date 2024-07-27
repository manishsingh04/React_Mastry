import { useState } from 'react';
import './App.css'
import { useRef } from 'react'

function App() {

  const useRefEle = useRef();
  const [name, setName] = useState("")

  const Reset = () => {
    setName("");
    useRefEle.current.focus()
  }

  const handle = () => {
    useRefEle.current.style.color = "blue"

  }

  return (
    <>
      <h1>Hello, useRef</h1>
      <input
        ref={useRefEle}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)
        }
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={handle}>changeColor</button>
    </>
  )
}
export default App
