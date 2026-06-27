const Notification = props => {
  //  Write your code here.
  return (
    <div className={props.className}>
      <img src={props.img} alt="" />
      <p>{props.message}</p>
    </div>
  )


}

const element = (
  //  Write your code here.
  //  Write your code here.
  <div className="main-container">
    <h1>Notification</h1>
    <div className="notification-container">
      <Notification className="primary" img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" message="Information Message" />
      <Notification className="success" img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" message="Success Message" />
      <Notification className="warning" img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" message="Warning Message" />
      <Notification className="danger" img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" message="Danger Message" />
    </div>

  </div>
)

ReactDOM.render(element, document.getElementById('root'))
