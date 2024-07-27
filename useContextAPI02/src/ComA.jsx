import { Component } from 'react';
import { Provider, Consumer } from './index';
import ComB from './ComB';
import ComC from './ComC';

export default class ComA extends Component {
    state = {
        name: 'Manish',
        age: 22
    }

    handleData = () => {
        this.setState({ age: this.state.age + 1 });
    }

    render() {
        const contextValue = {
            data: this.state,
            handleBttn: this.handleData
        };

        return (
            <div>
                <h2>Component A</h2>
                <Provider value={contextValue}>
                    <ComB />
                    <ComC />
                    <Consumer>
                        {
                            ({ data }) => (
                                <div>
                                    <h3>{data.name}</h3>
                                </div>
                            )
                        }
                    </Consumer>
                </Provider>
            </div>
        );
    }
}
