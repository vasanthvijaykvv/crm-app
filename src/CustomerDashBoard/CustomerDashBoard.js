import React from 'react'
import "./CustomerDashBoard.css"
function CustomerDashBoard({total,newCustomer,accepted,rejected}) {

  
    return (
        <div className='dashboard'>
          <div className="title bg-secondary">No Of Customer<p>{total}</p></div>
          <div className="title bg-info">New Customer <p>{newCustomer }</p></div>
          <div className="title bg-success ">Active Customer <p>{accepted}</p></div>
          <div className="title bg-danger"> Rejected Customer <p>{rejected}</p></div>
        </div>
      )
}
export default CustomerDashBoard