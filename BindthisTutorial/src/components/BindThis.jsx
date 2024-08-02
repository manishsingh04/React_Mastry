import { Component } from 'react'

export default class BindThis extends Component {

    constructor() {
        super();
        // wrapping  this keyword inside bind to access this keyword in normal function
        this.handler1 = this.handler1.bind(this)
    }

    //Normal function->don't have direct access of this keyword
    handler1() {

        console.log("This is normal function inside class comp", this);
    }

    //Arrow function-> have direct access of this keyword
    handler2 = () => {

        console.log("This is arrow function inside class comp", this);
    }
    render() {
        return (
            <>
                <h2>Tutorial page</h2>
                <button onClick={this.handler1}>Click Me</button>
                <button onClick={this.handler2}>Hit Me</button>
            </>
        )
    }
}
