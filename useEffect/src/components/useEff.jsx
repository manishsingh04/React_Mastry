import { useState } from "react";
import { useEffect } from "react"


function useEff() {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("UseEffect is mount...");

        return () => {

            console.log("Unmounted counter.....");
        }
    }, [])

    useEffect(() => {

        console.log("Updation is counted.....");

    }, [counter])


    const handleCounter = () => {
        setCounter(counter + 1);
    }
    return (
        <>
            <h1>UseEffect</h1>
            <button onClick={handleCounter}>Click me:{counter}</button>
        </>
    )
}

export default useEff