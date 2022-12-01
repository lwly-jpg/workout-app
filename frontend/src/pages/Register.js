import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(email, password)
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
      <button>Register</button>


    </form>
  )
}

export default Register