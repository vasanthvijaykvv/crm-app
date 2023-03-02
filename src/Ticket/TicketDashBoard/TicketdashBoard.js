import React from 'react'
import "./Ticketdashboard.css"
function TicketdashBoard({total,newTicket, assigned, resolved, inProgress}) {

  
    return (
        <div className='dashboard'>
          <div className="title bg-secondary">Total Tickets<p>{total}</p></div>
          <div className="title bg-info">New <p>{newTicket}</p></div>
          <div className="title bg-success ">Assigned<p>{assigned}</p></div>
          <div className="title bg-danger">In Progress <p>{inProgress}</p></div>
          <div className="title bg-primary">Resolved <p>{resolved}</p></div>
        </div>
      )
}
export default TicketdashBoard