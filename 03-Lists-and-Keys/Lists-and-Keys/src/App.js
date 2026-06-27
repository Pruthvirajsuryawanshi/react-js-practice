import UserProfile from './Components/UserProfile/index'
import './App.css'

const userList = [
  {
    id: 1,
    name: 'Pruthvi',
    imageUrl: 'https://avatars.githubusercontent.com/u/114980853?v=4&size=64',
    role: 'Project Manager',
  },
  {
    id: 2,
    name: 'Pruthvi',
    imageUrl: 'https://avatars.githubusercontent.com/u/114980853?v=4&size=64',
    role: 'Project Manager',
  },
  {
    id: 3,
    name: 'Pruthvi',
    imageUrl: 'https://avatars.githubusercontent.com/u/114980853?v=4&size=64',
    role: 'Project Manager',
  },
  {
    id: 1,
    name: 'Pruthvi',
    imageUrl: 'https://avatars.githubusercontent.com/u/114980853?v=4&size=64',
    role: 'Project Manager',
  },
  {
    id: 2,
    name: 'Pruthvi',
    imageUrl: 'https://avatars.githubusercontent.com/u/114980853?v=4&size=64',
    role: 'Project Manager',
  },
  {
    id: 3,
    name: 'Pruthvi',
    imageUrl: 'https://avatars.githubusercontent.com/u/114980853?v=4&size=64',
    role: 'Project Manager',
  },
  {
    id: 1,
    name: 'Pruthvi',
    imageUrl: 'https://avatars.githubusercontent.com/u/114980853?v=4&size=64',
    role: 'Project Manager',
  },
  {
    id: 2,
    name: 'Pruthvi',
    imageUrl: 'https://avatars.githubusercontent.com/u/114980853?v=4&size=64',
    role: 'Project Manager',
  },
  {
    id: 3,
    name: 'Pruthvi',
    imageUrl: 'https://avatars.githubusercontent.com/u/114980853?v=4&size=64',
    role: 'Project Manager',
  },
]

const App = () => (
  <div className="main-container">
    <h1>User Details</h1>
    {userList.map(eachUser => (
      <UserProfile key={eachUser.id} userDetails={eachUser} />
    ))}
  </div>
)

export default App
