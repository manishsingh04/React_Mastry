import { useState } from "react"


function StateInFunCom() {

    const [counter, setCounter] = useState(0);

    const increment = () => {

        setCounter(counter + 1)
    }

    const decrement = () => {

        setCounter(counter - 1)
    }

    return (
        <>
            <h1>This is functional Component</h1>
            <h2>Updated value : {counter}</h2>
            <button onClick={increment}>Click here to increment value</button>
            <br />
            <button onClick={decrement}>Click here to decrement value</button>
        </>
    )
}

export default StateInFunCom