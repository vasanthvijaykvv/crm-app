import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';        
import "./TicketList.css"
function TicketForm() {
  const [newTicket, setNewTicket] = useState({
    assignedTo: "Admin Users",
    customer: "",
    desc: "",
    raisedOn: "",
    status: "New"
  })
  const { desc } = useParams()
  const [valueMissing, SetValueMissing] = useState(false)
  const [getCustomerName, setGetCustomerName] = useState([])
  const [getUserName, setGetUserName] = useState([])
  const navigate = useNavigate()
  console.log(desc)
  useEffect(() => {
    // To Get The Customer Data
    fetch(process.env.REACT_APP_APIURL+"customer").then(res => res.json())
      .then(res => setGetCustomerName(res));
    // To get The users data  
    fetch(process.env.REACT_APP_APIURL+"user").then(res => res.json())
      .then(res => setGetUserName(res))
    if (desc) {
      fetch(process.env.REACT_APP_APIURL+"ticket/"+desc).then((res) => { return res.json() })
        .then(res => {
          console.log(res)
          return setNewTicket(res)
        }
        );
    }
  }, [])

  let HandleSubmitDate = () => {
    SetValueMissing(false)
    if (!newTicket.assignedTo || !newTicket.customer || !newTicket.desc || !newTicket.raisedOn || !newTicket.status) {
      console.log("Err")
      SetValueMissing(true)
      return
    }
    console.log(newTicket)

    fetch(process.env.REACT_APP_APIURL+"ticket", {
      method: desc ? "PUT" : "POST",
      body: JSON.stringify(newTicket),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      navigate("/ticket")
    })
  }


  return (

    <div className='my-2'>
      {valueMissing && <div class="alert alert-danger" role="alert">
        Please enter The Details
      </div>}
      <form className="d-grid gap-2 p-2">

        <label className="my-1 mx-4 fs-5 fw-semibold for-lable" htmlFor="Customer">Customer Name</label>
        {/*<select className=" btn btn-warning mx-3  " id="Customer" disabled={desc ? true : false}
          type="button" value={newTicket.customer} aria-expanded="false"
          onChange={(e) => { setNewTicket({ ...newTicket, customer: e.target.value }); SetValueMissing(false) }}>
          {getCustomerName.map((c, i) => {
            return <option key={i} className="dropdown-item py-3" value={c.name} type="button">{c.name}</option>
          })}
        </select>*/}

        <Dropdown disabled={desc}
        value={
          getCustomerName.find(c=> c.name === newTicket.customer) 
        } 
        onChange={(e) => { setNewTicket({...newTicket, customer: e.value.name }); SetValueMissing(false) }}
        options={getCustomerName} optionLabel = "name" placeholder='select a customer' filter className="w-full "
      /> 


        <label className="my-1 mx-4 fs-5 fw-semibold" htmlFor="Assigned To">Assigned To</label>
        <select className=" btn btn-primary fs-5 mx-3  " id="Assigned To"
          type="button" value={newTicket.assignedTo} aria-expanded="false"
          onChange={(e) => { setNewTicket({ ...newTicket, assignedTo: e.target.value }); SetValueMissing(false) }}>
          {getUserName.map((c, i) => {
            return <option key={i} className="dropdown-item p-2 fs-5" value={c.name} type="button">{c.name}</option>
          })}
        </select>
        <input className="form-control p-2 my-3" type="text" onInput={(e) => { setNewTicket({ ...newTicket, desc: e.target.value }); SetValueMissing(false) }} value={newTicket.desc} placeholder="Description" />
        <input className="form-control p-2" type="date" readOnly={desc ? true : false} onInput={(e) => { setNewTicket({ ...newTicket, raisedOn: e.target.value }); SetValueMissing(false) }} value={newTicket.raisedOn} placeholder="Raised On" />
        <label className="my-1 mx-4 fs-5 fw-semibold" htmlFor="Status">Status</label>
        <select className=" btn btn-warning mx-3 barwidth " id="Status"
          type="button" value={newTicket.status} aria-expanded="false" onChange={(e) => { setNewTicket({ ...newTicket, status: e.target.value }); SetValueMissing(false) }}>
          <option className="dropdown-item" value="New" type="button">New</option>
          <option className="dropdown-item" value="Assigned" type="button">Assigned</option>
          <option className="dropdown-item" value="In Progress" type="button">In Progress</option>
          <option className="dropdown-item" value="Resolved" type="button">Resolved</option>
        </select>
      </form>
      <button className='btn btn-success my-2 mx-3 p-2 float-end' onClick={HandleSubmitDate}>{desc ? "Update ticket" : "Create Ticket"}</button>
    </div>
  )
}

export default TicketForm