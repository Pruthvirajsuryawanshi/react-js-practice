import {Component} from 'react'
import './index.css'

// Write your code here

class LightDark extends Component {
  state = {isDark: true}

  darkButton = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <div className="container">
        <div className={isDark ? 'dark' : 'light'}>
          <h1>Click to Change Mode</h1>
          <button type="button" onClick={this.darkButton}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDark
