import {Component} from 'react'
import './index.css'

// Write your code here

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  firstName = () => {
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }

  lastName = () => {
    this.setState(prevState => ({isLast: !prevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="buttonContainer">
          <button type="button" onClick={this.firstName}>
            Show/Hide Firstname
          </button>
          <button type="button" onClick={this.lastName}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="namecard">
          <div className="firstNameCard">
            {isFirst ? (
              <div>
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div className="lastNameCard">
            {isLast ? (
              <div>
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
