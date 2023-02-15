import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import "./Signup.css"
function Signup() {
  const [userDetails, setUserDetails] = useState({})
  const navigate = useNavigate();

  let SubmitUserDetails = () =>{   
    fetch("http://localhost:4000/api/user/signup",{
      method : "POST",
      body : JSON.stringify(userDetails),
      headers:{
        "Content-Type" : "application/json"
      }
    }).then((res)=>{      
     console.log(res)
     navigate("/signin");
    }).catch((err)=>{
      console.log(err);
    })
    
  }
  return (
    <div className='container'>
      <div className="left">
       <img src="https://leadgrowdevelop.com/wp-content/uploads/2021/04/crm-system-icon-flat-design-vector-480x477.jpg" alt="img" />
      </div>
      <div className="right">
        <h3 className='mb-3'>Register Form</h3>
        <hr className='mb-3'></hr>
        <form>
    <div className=" mb-3">
  <label for="inputName"  htmlFor='name' className="form-label">Enter Your Name</label>  
    <input type="text" onInput={(e)=>setUserDetails({...userDetails,name :e.target.value})} className="form-control" id="inputName"/>  
</div>
<div className=" mb-3">
  <label for="inputEmail3" htmlFor='email' className="form-label">Email Id</label>  
    <input type="email" onInput={(e)=>setUserDetails({...userDetails,email :e.target.value})} className="form-control" id="inputEmail3"/>
  
</div>
<div className=" mb-3">
  <label for="inputPassword3" htmlFor='password' className="form-label">Password</label> 
    <input type="password"  onInput={(e)=>setUserDetails({...userDetails,password :e.target.value})}  className="form-control" id="inputPassword3"/>  
</div>
<div className="d-grid gap-2 col-2 mx-auto">
<input className="btn btn-success" type="button" value ="Register"  onClick={SubmitUserDetails} ></input>
</div>
</form>
      </div>
      </div>
  )
}

export default Signup