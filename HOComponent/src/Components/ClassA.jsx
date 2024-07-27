import React from "react";
import students from "./HOC";
import PropTypes from 'prop-types';



class ClassA extends React.Component {

    state = {

        marks: 0
    }

    incrementMarks = () => {
        this.setState({ marks: this.state.marks + 1 })
    }

    render() {
        return (
            <div>
                <h2 onMouseOver={this.incrementMarks}> classA marks: {this.state.marks} {this.props.hoc}</h2>
            </div>
        )
    }
}

ClassA.propTypes = {
    hoc: PropTypes.string
}


export default students(ClassA)