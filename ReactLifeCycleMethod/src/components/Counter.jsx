import { Component } from 'react';
import PropTypes from 'prop-types'


export default class Counter extends Component {


    componentDidUpdate(prevprops, prevState) {
        // console.log(prevprops.number);
        // console.log(this.props.number);
        if (prevprops.number !== this.props.number) {

            console.log("ComponenetDidUpdate is executed sccessfully");
            console.log(prevState);
        }

    }
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}


// Define prop types
Counter.propTypes = {
    number: PropTypes.number,
    // Add other prop types as necessary
}