// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.round(Math.random() * 100),
    }))
  }

  render() {
    let {isEven} = this.state
    const {count} = this.state
    if (count % 2 === 0) {
      isEven = true
    } else {
      isEven = false
    }
    return (
      <div>
        <h1>Count {count}</h1>
        <p>Count is {isEven ? 'Even' : 'Odd'}</p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <p>* increase by random number between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
