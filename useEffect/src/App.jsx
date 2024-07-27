import { useState } from 'react'
import './App.css'
import Effect from './components/useEff'

function App() {

  const [state, setState] = useState(true)


  return (
    <>
      <h1>Hello, welcome to useEffect tutorial</h1>
      <button onClick={() => setState(!state)}>Toggle</button>
      {state ? <Effect /> : "unMounted"}
    </>
  )
}

export default App
