// Write your code here
const Message = props => {
  const {isLoggedIn} = props
  return <h1>{isLoggedIn ? 'Welcome User' : 'Please Login'}</h1>
}
export default Message
