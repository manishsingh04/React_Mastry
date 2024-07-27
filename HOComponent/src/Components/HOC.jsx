import { Component } from 'react'


const students = (STUDENT) => {

    class Subjects extends Component {
        render() {
            return (
                <STUDENT hoc="JAVA">HOC</STUDENT>
            )
        }
    }
    return Subjects;

}

export default students