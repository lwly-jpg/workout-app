import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Nav = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

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
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/register">Register</Link>
              <Link to="/login">Log in</Link>
            </div>

          )}

        </nav>
      </div>
    </header>
  )

}

export default Nav