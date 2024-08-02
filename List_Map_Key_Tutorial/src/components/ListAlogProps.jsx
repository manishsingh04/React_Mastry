import { Component } from 'react'

export default class ListAlogProps extends Component {
    render() {
        const nums = this.props.num
        return (
            <>
                <li>{nums}</li>
            </>
        )
    }
}
