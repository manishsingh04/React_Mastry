import { useState } from "react"


function UseState() {

    const [named, setNamed] = useState('')

    const updateEvent = (e) => {
        e.preventDefault();
        const userData = e.target.value;
        setNamed(userData)

    }


    return (
        <div>
            <h1>Hiii, My name is {named}</h1>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={updateEvent}
                value={named}
            />
        </div>
    )
}

export default UseState