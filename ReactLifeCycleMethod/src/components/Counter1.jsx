import { useEffect } from "react"


function Counter1({ number }) {
    Counter1.propTypes = number

    useEffect(() => {

        //ComponentdidMount()
        // console.log("ComponentdidMount is executed inside function comp..");
        //ComponentdidUpdate()
        // console.log("ComponentdidUpdate is executed inside function comp:: Updating");
        //ComponentwillUnmount()

        // return () => {
        //     console.log("Functional component ....removed");
        // }

    }, [number])

    return (
        <div>{number}</div>
    )
}

export default Counter1