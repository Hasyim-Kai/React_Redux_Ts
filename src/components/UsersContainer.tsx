import { useSelector, useDispatch, DefaultRootState, RootStateOrAny } from 'react-redux'
import { useEffect } from 'react'
import { fetchUsers } from '../redux/user/userActions'
import Loading from './Loading'
import { CombinedState, Reducer } from 'redux'

export default function UsersContainer() {
  const userList = useSelector((state: RootStateOrAny) => state.user)
  const dispatch = useDispatch()

  useEffect(() => { dispatch(fetchUsers()) }, [])

  return userList.loading ? (<Loading />) : userList.error ? (<h2>{userList.error}</h2>) : (
    <div>
      <h2 className='font-bold text-6xl'>Users List</h2>
      <div>
        {userList &&
          userList.users &&
          userList.users.map((user: any) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  )
}
