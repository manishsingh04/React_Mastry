import { Component } from 'react';
import PropTypes from 'prop-types';
import { myContext } from './ComA';

export default class ComC extends Component {
    render() {
        return (
            <div>
                <h1>Component C :
                    <myContext.Consumer>{data => data.name}</myContext.Consumer>
                </h1>
            </div>
        );
    }
}


ComC.propTypes = {

    name: PropTypes.string,
    rollNo: PropTypes.number
}