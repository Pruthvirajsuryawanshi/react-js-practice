import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}
  accelerate = () => {
    this.setState(prevState => {
      if (prevState.speed < 120) {
        return {speed: prevState.speed + 10}
      }
      return null
    })
  }

  applyBrakes = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
      return null
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div>
        <h1>SPEEDOMETER</h1>
        <img className="image" src="#" alt="speedometer" />
        <div>
          <h1>Speed is {speed}mph</h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
        </div>
        <div>
          <button type="button" onClick={this.accelerate}>
            Accelerate
          </button>
          <button type="button" onClick={this.applyBrakes}>
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
