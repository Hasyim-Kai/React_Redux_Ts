import { BUY_CAKE } from './cakeTypes'

const initialState: CakeState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action: CakeActionTypes) => {
  switch (action.type) {
    case BUY_CAKE: return {
      numOfCakes: state.numOfCakes - action.payload
    }

    default: return state
  }
}

export default cakeReducer
