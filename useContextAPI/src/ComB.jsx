import { Component } from 'react';
import PropTypes from 'prop-types';
import { myContext } from './ComA';

export default class ComB extends Component {
    render() {
        return (
            <div>
                <h1>Component B:
                    <myContext.Consumer>{data => data.rollNo}</myContext.Consumer>
                </h1>

            </div>
        );
    }
}

ComB.propTypes = {
    name: PropTypes.string,
    rollNo: PropTypes.number
}