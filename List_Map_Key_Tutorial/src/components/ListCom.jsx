import { Component } from 'react'

export default class ListCom extends Component {

    render() {
        const number = [1, 2, 3, 4]
        const num = number.map((num) => {
            console.log(num);
            return <li>{num}</li>

        })
        return (
            <>
                <h1>Hello</h1>
                <ul>{num}</ul>
                {
                    number.map((each) => <li>{each}</li>)
                }
            </>
        )
    }
}
