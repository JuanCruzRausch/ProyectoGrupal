import React from 'react'
import { lockUser, unlockUser } from '../../redux/actions/adminAction'
import { useSelector, useDispatch } from 'react-redux'
import { photo, container_users, container_user, container, searchBar}  from './UserList.module.css'
import swal from 'sweetalert'
import {Form, FormControl, Button } from 'react-bootstrap'

function UserList() {
const dispatch = useDispatch()
const allUsers = useSelector(state => state.adminReducer.allUsers)
const token = useSelector (state => state.adminReducer.token)



const handleOnLock = (user_id) =>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          dispatch(lockUser(user_id, token))
        } else {
          swal("Your imaginary file is safe!");
        }
      });  
}
const handleOnUnlock = (user_id) =>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          dispatch(unlockUser(user_id, token))
        } else {
          swal("Your imaginary file is safe!");
        }
      });  
}
  return (
    <div className={container}>
        <h1>Lista de Usuario</h1>
        <div className={searchBar}>
          <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        </div>
        <div className={container_users}>
            <br />
            {allUsers?.length&&allUsers?.map(user => (
                <div className={container_user}>
                  {console.log(user.user_id)}
                    {!user.blocked?(<button 
                    onClick={()=> handleOnLock(user.user_id)}
                    className="btn-danger button">bloquear</button>):
                    <button 
                    onClick={()=> handleOnUnlock(user.user_id)}
                    className="btn-success button">desbloquear</button>}
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