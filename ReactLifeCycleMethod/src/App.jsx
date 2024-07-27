import './App.css'
import { Component } from 'react';
// import Counter from './components/Counter';
import Counter1 from './components/Counter1';

export default class App extends Component {

  constructor() {

    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount() {

    console.log("ComponentDidMount is executed");
  }


  // componentDidUpdate(prevprops, prevState) {
  //   if (prevprops.count !== this.state.count) {
  //     console.log("ComponentdidUpadted");
  //     console.log(prevState);
  //   }

  // }



  componentWillUnmount() {

    console.log("componentWillUnmount : removed component");
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.count}</h1> */}
        <Counter1 number={this.state.count} />
        {/* <button onClick={this.increment.bind(this)}>Click me</button> */}
        <button onClick={() => this.increment()}>Click me</button>
      </div>
    );
  }
}
