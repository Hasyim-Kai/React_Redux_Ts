import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { buyIceCream } from "../redux/iceCream/iceCreamActions"

export default function IceCreamContainer() {
   const numOfIceCream = useSelector((state: RootStateOrAny) => state.iceCream.numOfIceCreams)
   const dispatch = useDispatch()

   return <div>
      <h2>Number of iceCream - {numOfIceCream} </h2>
      <button className='p-2 bg-pink-400' onClick={() => dispatch(buyIceCream())}>Buy iceCream</button>
   </div>

}