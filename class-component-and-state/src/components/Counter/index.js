import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }
  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }
  onReset = () => {
    this.setState(prevState => ({
      count: 0,
    }))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>Counter</h1>
        <p className="count">{count}</p>
        <div className="button-container">
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onReset}>
            Reset
          </button>
          <button className="button" onClick={this.onDecrement}>
            Descrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
