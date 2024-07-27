import { useState, useMemo } from 'react'
import './App.css'




function App() {

  let [useOne, setOne] = useState(0)
  let [useTwo, setTwo] = useState(0)


  const useOneHandler = () => {
    useOne = useOne + 1;
    setOne(useOne)
  }


  const useTwoHandler = () => {
    useTwo = useTwo + 1;
    setTwo(useTwo)
  }


  const evenCheck = useMemo(() => {
    //extra computational activity
    console.warn('.......')
    let i = 1;
    while (i < 2000000000) {
      i++;
      if (useOne % 2 === 0) {
        return true
      }
    }

  }, [useOne])


  return (
    <>
      <h1>Hello, This is useMemo Tutorial </h1>
      <button onClick={useOneHandler}>click Me:{useOne} </button>
      <span>{evenCheck ? "Even number" : "Not even"}</span >
      <button onClick={useTwoHandler}>click Me: {useTwo}</button>
    </>
  )
}

export default App
