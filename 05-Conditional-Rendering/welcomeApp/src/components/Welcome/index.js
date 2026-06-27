import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribeButton = () => {
    this.setState(prevstate => ({isSubscribed: !prevstate.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.subscribeButton}>
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}
export default Welcome
