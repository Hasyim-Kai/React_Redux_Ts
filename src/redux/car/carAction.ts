import { BUY_CAR, DELETE_CAR } from "./carTypes"
import { Dispatch } from 'redux'
import { FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS, FETCH_CARS_FAILURE } from './carTypes'

export const fetchCars = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchCarsRequest())
    const response = await fetch('https://rent-cars-api.herokuapp.com/admin/car')
    const data: [] = await response.json();
    // response.data is the Cars
    dispatch(fetchCarsSuccess(data));
  } catch (error) {
    // error.message is the error message
    if (error instanceof Error) {
      // ✅ TypeScript knows error is Error
      dispatch(fetchCarsFailure(error.message))
    } else {
      console.log('Unexpected error', error);
    }
  }
}

export const fetchCarsRequest = () => {
  return {
    type: FETCH_CARS_REQUEST
  }
}

export const fetchCarsSuccess = (cars: []) => {
  return {
    type: FETCH_CARS_SUCCESS,
    payload: cars
  }
}

export const fetchCarsFailure = (error: string) => {
  return {
    type: FETCH_CARS_FAILURE,
    payload: error
  }
}