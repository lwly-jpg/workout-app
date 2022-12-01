import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Workout Helper</h2>
        </Link>
        <nav>
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