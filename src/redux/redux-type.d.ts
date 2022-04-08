type CakeState = {
   numOfCakes: number
}

interface CakeActionTypes {
   type: string,
   payload: number
}

type IceCreamState = {
   numOfIceCreams: number
}

interface IceCreamActionTypes {
   type: string
}

type UserState = {
   loading: boolean,
   users: [],
   error: string
}

interface UserActionTypes {
   type: string,
   payload: string | []
}

