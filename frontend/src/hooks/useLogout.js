import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"


export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: workoutsDispatch } = useWorkoutsContext()
  
  const logout = () => {
    // Remove user token
    localStorage.removeItem('user')

    // Dispatch logout action

    dispatch({type: 'LOGOUT'})

    // Clear global workout state when log out
    workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
  }

  return {logout}

}