import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/Navbar'

function UserList() {
  let [users, setUsers] = useState([]);
  
   useEffect(()=>{
    fetch("http://localhost:4000/api/user").then((res)=>{
      return res.json()
    }).then((parsedResult)=>{
          setUsers(parsedResult)
    })
   },[])
   console.log(users)
 
  return (
    <div><Navbar/>
       <div className="Container">
       <a href='/newuserForm' className="btn btn-success " >New User</a>
        
         {users.length === 0 && 
         <div className="alert alert-warning mt-3" role="alert">
         Unable to Connect 
       </div>}
         { users.length>0 && <table className="table table-striped">
           <thead>
               <tr>
                  <th scope="col">S.No</th>
                   <th scope="col">Name</th>
                   <th scope="col">Email Id</th>                   
                   <th scope="col">UserName</th>                   
                   <th scope="col">IsActive</th>                   
               </tr>
           </thead>
           <tbody>
               {
                   users.map ((user,i)=>(
                    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.isActive ? "YES" : "NO"}</td>
                    
                </tr>
                   ))
               }
              
           </tbody>
          </table>}
        </div>
    </div>
  )
}

export default UserList
/*<td>
                       <button className="btn btn-warning mx-2" onClick={()=>handleEditClick(user.name)}>Edit</button>
                        <button className="btn btn-danger" onClick={()=>handleDisableClick(user.name)}>Delete</button>
                    </td>*/