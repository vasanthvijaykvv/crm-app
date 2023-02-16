import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const [isloggedIn,setLoggedInStatus] = useState(false);
  let navigate = useNavigate();
  useEffect(()=>{
       if(localStorage.getItem("loggedIn")=== "true"){
            setLoggedInStatus(true);
       }else{
        setLoggedInStatus(false);
       }
  },[])
  let SignOutPage = () =>{
    localStorage.removeItem("loggedIn");
      navigate("/signin");
  }
  let NavigateUser = () =>{
    navigate("/users")
  }
  return (
    <div><nav className="navbar bg-body-tertiary bg-light" data-bs-theme="dark">
    <div className="container-fluid">
    
      <i className="navbar-brand">CRM_APP<span className=" mx-2">
  <button className="btn btn-primary" onClick={NavigateUser} type="button">Users</button>  
       </span></i>
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-success mx-2" >Search</button>
     {!isloggedIn && <> <a href='/signup' className="btn btn-primary mx-2" >SignUp</a>
       <a href='/signin' className="btn btn-info mx-2" >SignIn</a> </>}
     {isloggedIn && <button onClick={SignOutPage} className="btn btn-danger mx-2" >Signout</button> }
      </form>
    </div>
  </nav></div>
  )
}

export default Navbar