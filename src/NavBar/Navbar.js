import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
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
    <div>
      
      <nav className="navbar bg-body-tertiary bg-light" data-bs-theme="dark">
    <div className="container-fluid">
     <span><SideBar/></span>
      <i className="navbar-brand ">CRM_APP<span className=" mx-2">
        <a href='/' className="btn btn-secondary mx-2" type="button"> Home</a>
   <button className="btn btn-primary" onClick={NavigateUser} type="button">Users</button>
   <a href='/ticket' className="btn btn-danger  mx-2" type="button"> Ticket</a>  
       </span></i>
      
      <form className="d-flex" >       
     {!isloggedIn && <> <a href='/signup' className="btn btn-primary mx-2" >SignUp</a>
       <a href='/signin' className="btn btn-info mx-2" >SignIn</a> </>}
     {isloggedIn && <button onClick={SignOutPage} className="btn btn-danger mx-2" >Signout</button> }
      </form>
    </div>
  </nav>
  
  </div>

  )
}

export default Navbar