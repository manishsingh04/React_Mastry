import axios from "axios"
import { useEffect, useState } from "react";


function FunctionCom() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
                // console.log(error);

            })
    }, [])

    if (error) {
        <div>Error : {error.message}</div>
    }

    if (loading) {
        <div>loading......</div>
    }


    return (
        <>
            <h1>All posts here</h1>
            <ul>
                {
                    data.map(items => (
                        <li key={items.id}>{items.title}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default FunctionCom

/*
In this example:

The useEffect: hook is used to perform the data fetching when the component mounts.
Axios: is used to send a GET request to an API endpoint.
The component's state is updated based on the response.
Loading and error states are handled appropriately.*/