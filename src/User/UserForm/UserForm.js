import  { useEffect, useState} from "react";
import {useNavigate,useParams} from "react-router-dom"
import React from 'react'
function UserForm() {
    const [userToUpdate, setUpdateUsers] = useState({})
    const navigate = useNavigate();
   // const {customerName} = useParams();
  //  console.log(customerName)
    // useParams to get the data of the particular object
   /* useEffect(()=>{
      if(customerName){
        fetch("http://localhost:4000/api/customer").then((res)=>{
             return res.json()
           }).then(res=>{
             let result = res.find(c=> c.name === customerName)
             if(result){
               
               setUpdateUsers(result)
             }
           })
      }
    },[customerName])*/
   let HandleFormSubmit = () =>{
    console.log(userToUpdate);
    fetch(process.env.REACT_APP_APIURL+"user/signup",{
        method : "POST",
        body : JSON.stringify(userToUpdate),
        headers:{
            "Content-Type" : "application/json"
          }
    }).then((res)=>{
        navigate("/users")
    })
   }     
  return (
    <div><h2>CRM_APP</h2>
    <form className=" my-3 gap-2">
   <input className="form-control my-3"  type="text" onInput={(e)=>{setUpdateUsers({...userToUpdate,name : e.target.value})}}  value={userToUpdate.name}  placeholder=" Name" />
    <input className="form-control my-3" type="text" onInput={(e)=>{setUpdateUsers({...userToUpdate,email : e.target.value})}}  value={userToUpdate.email} placeholder="Email" />
    <input className="form-control my-3" type="password" onInput={(e)=>{setUpdateUsers({...userToUpdate,password : e.target.value})}} value={userToUpdate.password} placeholder="Password" />
    <input className="form-control my-3"  type="text" onInput={(e)=>{setUpdateUsers({...userToUpdate,username : e.target.value})}}  value={userToUpdate.username}  placeholder=" UserName" />
      <div className="mb-3">
      <div className="form-check my-3">
  <input onChange={(e)=>{setUpdateUsers({...userToUpdate,isActive : e.target.checked})}}  className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled" ></input>
  <label className="form-check-label " for="flexCheckIndeterminateDisabled">
    IsActive
  </label> 
    </div>
      </div>
    <button onClick={HandleFormSubmit} className="btn btn-primary float-end" type = "button">Create New User</button>
    </form>   
    </div>
  )
}

export default UserForm