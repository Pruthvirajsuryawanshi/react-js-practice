import '../../App.css'
import './index.css'

const MakeBanner = props => {
  const {data} = props
  const {headerText, description, className} = data
  return (
    <div className="card-outer">
      <ul>
        <li className={className}>
          <h1>{headerText}</h1>
          <p>{description}</p>
          <button type="button">Show More</button>
        </li>
      </ul>
    </div>
  )
}
export default MakeBanner
