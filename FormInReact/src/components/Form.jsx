import { Component } from 'react';

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            age: ""
        }

    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    submitForm = (event) => {
        alert(`${this.state.username}    ${this.state.age}`)
        event.preventDefault();


    }

    render() {
        return (
            <form onSubmit={this.submitForm} >
                <div>
                    <label >Username :</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsername} />
                </div>
                <div>
                    <label htmlFor="address">age :</label>
                    <input type='text' value={this.state.age} onChange={this.handleAge} />
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default Form;
