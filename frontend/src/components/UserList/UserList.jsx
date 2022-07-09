import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

function UserList() {
const allUsers = useSelector(state => state.adminReducer.allUsers)


React.useEffect(()=>{

},[])

  return (
    <div>
        <h1>Lista de Usuario</h1>

    </div>
  )
}

export default UserList