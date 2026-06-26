import '../../App.css'
import './index.css'

const CardItem = props => {
  const {userDetails} = props
  const {title, description, imgUrl, className} = userDetails
  return (
    <div className="card-container">
      <ul>
        <li className={className}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="image">
            <img src={imgUrl} alt={title} />
          </div>
        </li>
      </ul>
    </div>
  )
}
export default CardItem
