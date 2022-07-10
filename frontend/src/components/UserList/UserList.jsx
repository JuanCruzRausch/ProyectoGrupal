import React from 'react'
import { lockUser } from '../../redux/actions/adminAction'
import { useSelector, useDispatch } from 'react-redux'
import { photo, container_users, container_user, container, }  from './UserList.module.css'

function UserList() {
const dispatch = useDispatch()
const allUsers = useSelector(state => state.adminReducer.allUsers)
const token = useSelector (state => state.adminReducer.token)

console.log(allUsers)

const handleOnClick = (user_id) =>{
    dispatch(lockUser(user_id, token))
}
  return (
    <div className={container}>
        <h1>Lista de Usuario</h1>
        <div className={container_users}>
            <br />
            {allUsers?.length&&allUsers?.map(user => (
                <div className={container_user}>
                    <button 
                    onClick={()=> handleOnClick(user.user_id)}
                    className="btn-danger button">X</button>
                    <div className={photo}>
                        <img  src={user.photo} alt={user.name}/> 
                    </div>
                    <h3>{user?.name} {user?.lastname}</h3>
                    <div>
                        <h4>{user?.email}</h4>
                    </div>
                    <div>
                        <h4>tel:{user?.phone}</h4>
                    </div>
                    <div>
                        <h4>desde:</h4>
                    </div>
                    <div>
                        <h4>{user?.registration_date}</h4>
                    </div>
                    <div>
                        <h4>roles:</h4>
                    </div>
                    {user?.authorization?.roles?.map(role=>(
                        <div>
                            <h4>{role}</h4>
                        </div>
                    ))}

                </div>

        ) )}

        </div>
    </div>
  )
}

export default UserList