import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signin.css"
function Signin() {
  let [logindetails,setLogindetails] = useState({});
  let [error, setError] = useState(false)
  let navigate = useNavigate()
 let  handleSigninClick = () =>{
  setError(false)
 fetch("http://localhost:4000/api/user/signin",{
    method : "POST",
    body : JSON.stringify(logindetails),
    headers : {
      "Content-Type" : "application/json"
    }
  }).then((res)=>{
      if(res.status === 400){
        setError(true)
      }else if(res.status ===200){
       localStorage.setItem("loggedIn","true")
        navigate("/" )
      }
  }).catch((err)=>{ 
     console.log(err)
  })
 }
  return (
    <div className='container'>
      <div className="left">
       <img src="https://th.bing.com/th/id/OIP.2Q9Hk6BHWj15Gg8rqbOsgAHaHa?pid=ImgDet&rs=1" alt="img" />
      </div>
      <div className="right">
        <h3 className='mb-3'>Login Form</h3>
        <hr className='mb-3'></hr>
      {error && <div class="alert alert-danger" role="alert">
     InvalidDetials Check Password or Email
       </div>}
   
<div className=" mb-3">
  <label for="inputEmail3" className="form-label">Email Id</label>  
    <input type="email" onInput={(e)=>setLogindetails({...logindetails,email:e.target.value})} className="form-control" id="inputEmail3"/>
  
</div>
<div className=" mb-3">
  <label for="inputPassword3"  className="form-label">Password</label> 
    <input type="password" onInput={(e)=>setLogindetails({...logindetails,password:e.target.value})} className="form-control" id="inputPassword3"/>  
</div>
<div className="d-grid gap-2 col-2 mx-auto">
<button className="btn btn-info"  onClick={handleSigninClick}>Sign In</button>
</div>

      </div>
      </div>
  )
}

export default Signin