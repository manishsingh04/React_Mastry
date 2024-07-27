import React, { Component } from 'react';
import ComB from './ComB';
import ComC from './ComC';
export const myContext = React.createContext()

export default class ComA extends Component {

    state = {
        name: "Manish Singh",
        rollNo: 22
    }
    render() {
        return (
            <div>
                <h1>Component A</h1>
                <myContext.Provider value={this.state}>
                    <ComB />
                    <ComC />
                </myContext.Provider>
            </div>
        );
    }
}
