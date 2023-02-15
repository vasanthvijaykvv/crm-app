import React from 'react'
import "./Signin.js"
function Signin() {
  return (
    <div className='container'>
      <div className="left">
       <img src="https://th.bing.com/th/id/OIP.2Q9Hk6BHWj15Gg8rqbOsgAHaHa?pid=ImgDet&rs=1" alt="img" />
      </div>
      <div className="right">
        <h3 className='mb-3'>Login Form</h3>
        <hr className='mb-3'></hr>
      <form>
   
<div className=" mb-3">
  <label for="inputEmail3" htmlFor='email' className="form-label">Email Id</label>  
    <input type="email" className="form-control" id="inputEmail3"/>
  
</div>
<div className=" mb-3">
  <label for="inputPassword3" htmlFor='password' className="form-label">Password</label> 
    <input type="password" className="form-control" id="inputPassword3"/>  
</div>
<div className="d-grid gap-2 col-2 mx-auto">
<button className="btn btn-info" >Sign In</button>
</div>
</form>
      </div>
      </div>
  )
}

export default Signin