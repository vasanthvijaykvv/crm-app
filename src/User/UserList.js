import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/Navbar'
import "./UserList.css"
function UserList() {
  let [users, setUsers] = useState([]);
  
   useEffect(()=>{
    fetch(process.env.REACT_APP_APIURL+"user").then((res)=>{
      return res.json()
    }).then((parsedResult)=>{
          setUsers(parsedResult)
    })
   },[])
   console.log(users)
   let DeActivateButton = (username) =>{
       fetch(process.env.REACT_APP_APIURL+"user/deActivate/"+username,{
          method : "PUT"          
       } ).then((res)=>{
        return res.json()
       }).then((parsedResponse)=>{
        setUsers(parsedResponse)
       })
   }
   let ActivateButton = (username) =>{
    fetch(process.env.REACT_APP_APIURL+"user/activate/"+username,{
       method : "PUT"      
    } ).then((res)=>{
     return res.json()
    }).then((parsedResponse)=>{
     setUsers(parsedResponse)
    })
}       
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
                   <th scope="col" className='activeStatus'>IsActive</th>                   
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
                    <td className='activeStatus'>{!user.isActive && <button onClick={()=>ActivateButton(user.username)} className="btn btn-success  ">Activate</button>}
                    {user.isActive && <button onClick={()=>DeActivateButton(user.username)} className="btn btn-danger ">De-Activate</button> }</td>
                    
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
