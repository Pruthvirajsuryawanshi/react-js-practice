// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  clickCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          The button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p>Click the button to increase the count</p>
        <button type="button" onClick={this.clickCount}>
          Click me
        </button>
      </div>
    )
  }
}
export default ClickCounter
