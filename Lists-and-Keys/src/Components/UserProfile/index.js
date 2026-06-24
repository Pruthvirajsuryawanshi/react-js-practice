import '../../App.css'

const UserProfile = props => {
  const {userDetails} = props
  const {name, imageUrl, role} = userDetails

  return (
    <div className="profileContainer">
      <img src={imageUrl} alt={name} className="profile-image" />
      <div className="userDetails">
        <p>Name: {name}</p>
        <p>Role: {role}</p>
      </div>
    </div>
  )
}
export default UserProfile
