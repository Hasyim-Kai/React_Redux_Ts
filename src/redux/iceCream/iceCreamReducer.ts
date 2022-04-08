import { type } from 'os'
import { BUY_ICECREAM } from './iceCreamTypes'

const initialState: IceCreamState = {
  numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action: IceCreamActionTypes) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      numOfIceCreams: state.numOfIceCreams - 1
    }

    default: return state
  }
}

export default iceCreamReducer
