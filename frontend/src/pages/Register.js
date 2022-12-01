import { useState } from 'react'
import { useRegister } from '../hooks/useRegister'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {register, isLoading, error} = useRegister()

  const handleSubmit = async (event) => {
    event.preventDefault()

    await register(email, password)
  }

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h3>Register</h3>
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
      <button disabled={isLoading}>Register</button>
      {error && <div className="error">{error}</div>}

    </form>
  )
}

export default Register