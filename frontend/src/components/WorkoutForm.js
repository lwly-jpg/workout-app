import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const [title, setTitle] = useState('')
  const [reps, setReps] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const workout = {title, reps, difficulty}

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setTitle('')
      setReps('')
      setDifficulty('')
      setError(null)
      dispatch({type: 'CREATE_WORKOUT', payload: json})
      console.log('New workout added', json)
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a workout</h3>
      <label>Exercise title:</label>
      <input 
        type="text" 
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <label>Difficulty:</label>
      <input 
        type="text" 
        onChange={(event) => setDifficulty(event.target.value)}
        value={difficulty}
      />
      <label>Reps:</label>
      <input 
        type="number" 
        onChange={(event) => setReps(event.target.value)}
        value={reps}
      />
      <button>Add workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm