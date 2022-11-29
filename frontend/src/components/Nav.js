import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Workout Helper</h2>
        </Link>
      </div>
    </header>
  )

}

export default Nav