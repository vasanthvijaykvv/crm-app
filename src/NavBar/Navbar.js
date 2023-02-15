import React from 'react'

function Navbar() {
  return (
    <div><nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <i className="navbar-brand">CRM_APP</i>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-success mx-2" >Search</button>
        <a href='/signup' className="btn btn-primary mx-2" >SignUp</a>
        <a href='/signin' className="btn btn-info mx-2" >SignIn</a>
      </form>
    </div>
  </nav></div>
  )
}

export default Navbar