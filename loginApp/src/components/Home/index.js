import {Component} from 'react'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  clickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Message isLoggedIn={isLoggedIn} />
        <button type="button" onClick={this.clickButton}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    )
  }
}

export default Home
