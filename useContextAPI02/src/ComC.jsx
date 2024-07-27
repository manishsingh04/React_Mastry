import { Component } from 'react';
import { Consumer } from './index';

export default class ComC extends Component {
    render() {
        return (
            <div>
                <h2>Component C</h2>
                <Consumer>
                    {
                        ({ data }) => (
                            <div>
                                <h3>{data.name}, {data.age}</h3>
                            </div>
                        )
                    }
                </Consumer>
            </div>
        );
    }
}
