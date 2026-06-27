import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1>
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="button-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              alt="banana"
            />
          </div>
          <div>
            <button type="button" onClick={this.eatMango}>
              Eat Mango
            </button>
            <button type="button" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
