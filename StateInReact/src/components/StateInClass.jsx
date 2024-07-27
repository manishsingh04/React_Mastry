import { Component } from 'react'

class StateInClass extends Component {

    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    clickTostate() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.clickTostate()}>Click Here</button>
            </>
        )
    }
}

export default StateInClass