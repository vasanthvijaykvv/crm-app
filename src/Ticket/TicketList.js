import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/Navbar'
import {useNavigate} from "react-router-dom"
function TicketList() {
    let [tickets, setTickets] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
    fetch("http://localhost:4000/api/ticket").then(res => res.json())
    .then(parsedRes =>{console.log(parsedRes);
      setTickets(parsedRes);}) 
    },[])

    let NewTicket = () =>{
      navigate("/ticketform")
    }
  return (
    <div><Navbar/>
    <button className="btn btn-success my-3 mx-4" onClick={NewTicket} >Create Ticket</button>
      { tickets.length>0 && <div className="table-responsive"><table className="table table-striped table-responsive">
           <thead>
               <tr>
                  <th scope="col">S.No</th>
                   <th scope="col">Customer</th>
                   <th scope="col">Description</th>                   
                   <th scope="col">Assigned To</th>                   
                   <th scope="col">Raised On</th>                   
                   <th scope="col">Status</th>                   
               </tr>
           </thead>
           <tbody>
               {
                   tickets.map ((t,i)=>(
                    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{t.customer}</td>
                    <td>{t.desc}</td>
                    <td>{t.assignedTo}</td>
                    <td>{t.raisedOn}</td>
                    <td>{t.status}</td>
                    
                </tr>
                   ))
               }
              
           </tbody>
          </table></div>}
    </div>
  )
}

export default TicketList