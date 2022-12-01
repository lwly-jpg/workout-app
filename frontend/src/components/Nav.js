import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Nav = () => {
  const { logout } = useLogout()

  const handleClick = () => {
    logout() 
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Workout Helper</h2>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Log in</Link>
          </div>
        </nav>
      </div>
    </header>
  )

}

export default Nav