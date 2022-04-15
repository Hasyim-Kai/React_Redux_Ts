import { FETCH_CARS_FAILURE, FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS, FETCH_CAR_DETAIL_SUCCESS } from "./carTypes"

const initialState: CarState = {
    loading: false,
    cars: [],
    carDetail: {},
    error: ''
}

const carReducer = (state: CarState = initialState, action: CarActionTypes) => {
    switch (action.type) {
        case FETCH_CARS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CAR_DETAIL_SUCCESS:
            return {
                loading: false,
                carDetail: action.payload,
                error: ''
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
