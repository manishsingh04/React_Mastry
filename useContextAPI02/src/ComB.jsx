import { Component } from 'react';
import { Consumer } from './index.jsx';

export default class ComB extends Component {
    render() {
        return (
            <div>
                <h2>Component B</h2>
                <Consumer>
                    {
                        ({ data, handleBttn }) => (
                            <div>
                                <h3>{data.name}, {data.age}</h3>
                                <button onClick={handleBttn}>Click me</button>
                            </div>
                        )
                    }
                </Consumer>
            </div>
        );
    }
}
