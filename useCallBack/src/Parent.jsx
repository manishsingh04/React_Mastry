import { useCallback, useState } from "react";
import Child from "./Child"

function Parent() {
    const [one, setOne] = useState(0)
    const [two, settwo] = useState(0)

    const Increment = () => {
        setOne(one + 1)
    }


    const fun = useCallback(() => {
        settwo(two + 1)
    }, [two])

    return (
        <>
            <Child two={two} fun={fun} />
            <button onClick={Increment}>Click me: {one}</button>
        </>
    )
}

export default Parent