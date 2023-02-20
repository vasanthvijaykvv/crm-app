import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function TicketForm() {
    const [newTicket, setNewTicket] = useState({assignedTo :"Admin Users",
    customer:"",
    desc:"",
    raisedOn :"",
    status: ""    
  })
  const navigate = useNavigate()
  let HandleSubmitDate = () =>{

    fetch("http://localhost:4000/api/ticket",{
          method : "POST",
          body : JSON.stringify(newTicket),
          headers:{
            "Content-Type" : "application/json"
          }
        }).then((res)=>{
            navigate("/ticket")
        })
  }
  return (
    <div className='my-2'>
        <form className="d-grid gap-2 p-2">
        <input className="form-control" type="text" onInput={(e)=>{setNewTicket({...newTicket,assignedTo : e.target.value})}}  value={newTicket.website} placeholder="assignedTo" />
    <input className="form-control p-2" type="text" onInput={(e)=>{setNewTicket({...newTicket,customer : e.target.value})}} value={newTicket.ceo} placeholder="Customer Name" />
    <input className="form-control p-2" type="text" onInput={(e)=>{setNewTicket({...newTicket,desc : e.target.value})}} value={newTicket.employees}  placeholder="Description" />
    <input className="form-control p-2" type="date" onInput={(e)=>{setNewTicket({...newTicket,raisedOn : e.target.value})}} value={newTicket.year}  placeholder="Raised On" />
   <input className="form-control p-2" type="text" onInput={(e)=>{setNewTicket({...newTicket,status : e.target.value})}} value={newTicket.year}  placeholder="Status" />
       </form>
       <button className='btn btn-success my-2 mx-3 p-2 float-end' onClick={HandleSubmitDate}>Create Ticket</button>
    </div>
  )
}

export default TicketForm