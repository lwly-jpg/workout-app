import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(email, password)
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <label>Email:</label>
      <input 
        type="text" 
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Log in</button>


    </form>
  )
}

export default Login