import { Component } from 'react'
import PropsTypes from "prop-types"

export default class PropsInClasCom extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        return (
            <>
                <h2>Props passing in class component</h2>
                <h1>{this.props.name}</h1>
            </>
        )
    }
}

PropsInClasCom.propTypes = {

    name: PropsTypes.string
}