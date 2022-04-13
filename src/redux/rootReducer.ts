import { CombinedState, combineReducers, Reducer } from 'redux'
import cakeReducer from './cake/cakeReducer'
import carReducer from './car/carReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'

type rootReducerType = Reducer<CombinedState<{
  car: CarState;
  cake: CakeState;
  iceCream: IceCreamState;
  user: never;
}>, CarActionTypes | CakeActionTypes | IceCreamActionTypes | UserActionTypes>

const rootReducer : rootReducerType = combineReducers({
  car: carReducer,
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer
})

export default rootReducer
