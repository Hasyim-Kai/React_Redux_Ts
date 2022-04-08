import { Dispatch } from 'redux'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes'

export const fetchUsers = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchUsersRequest())
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data: [] = await response.json();
    // response.data is the users
    dispatch(fetchUsersSuccess(data));
  } catch (error) {
    // error.message is the error message
    dispatch(fetchUsersFailure(error.message))
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = (users: []) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = (error: string) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
