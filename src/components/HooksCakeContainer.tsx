import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
  const numOfCakes = useSelector((state: RootStateOrAny) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button className='p-2 bg-orange-300' onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
