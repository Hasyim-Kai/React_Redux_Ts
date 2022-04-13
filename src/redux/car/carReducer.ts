import { FETCH_CARS_FAILURE, FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS } from "./carTypes"

const initialState: CarState = {
    loading: false,
    cars: [],
    error: ''
}

const carReducer = (state = initialState, action: CarActionTypes) => {
    switch (action.type) {
        case FETCH_CARS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CARS_SUCCESS:
            return {
                loading: false,
                cars: action.payload,
                error: ''
            }
        case FETCH_CARS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default: return state
    }
}

export default carReducer
