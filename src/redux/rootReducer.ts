import { CombinedState, combineReducers, Reducer } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'

type rootReducerType = Reducer<CombinedState<{
  cake: CakeState;
  iceCream: IceCreamState;
  user: never;
}>, CakeActionTypes | IceCreamActionTypes | UserActionTypes>

const rootReducer: rootReducerType = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
})

export default rootReducer
