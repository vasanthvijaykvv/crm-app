import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/Navbar'
import { useNavigate } from "react-router-dom"
import "./TicketList.css"
function TicketList() {
  let [tickets, setTickets] = useState([]);
  let [filtertickets, setfilterTickets] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/api/ticket").then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        setTickets(parsedRes);
        setfilterTickets(parsedRes)
      })
  }, [])

  let NewTicket = () => {
    navigate("/ticketform")
  }
  let handleEditClick = (desc) => {
    navigate("/ticketform/" + desc)
  }
  function handleSearch(key) {
    if (!key || key === "") {
      setTickets(filtertickets)
    } else {
      let result = filtertickets.filter((e) => e.desc.toLowerCase().includes(key.toLowerCase()))
      setTickets(result)
    }
  }
  return (
    <div><Navbar />
      <div className='my-3'> <button className="btn btn-success  mx-4" onClick={NewTicket} >New Ticket</button>
        <form className="d-flex float-end" role="search">
          <input className="form-control search-box"
            onChange={(e) => { handleSearch(e.target.value) }} type="search" placeholder="Search" />
        </form>
      </div>
      <div className="Container">
        {tickets.length === 0 && <div className="alert alert-warning mt-3" role="alert">
          Unable to Connect
        </div>}
        {tickets.length > 0 && <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Customer</th>
              <th scope="col">Description</th>
              <th scope="col">Assigned To</th>
              <th scope="col">Raised On</th>
              <th scope="col">Status</th>
              <th scope="col">Update</th>

            </tr>
          </thead>
          <tbody>
            {
              tickets.map((t, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{t.customer}</td>
                  <td>{t.desc}</td>
                  <td>{t.assignedTo}</td>
                  <td>{t.raisedOn}</td>
                  <td>{t.status}</td>
                  <td>
                    <button className="btn btn-warning mx-2" onClick={() => handleEditClick(t.desc)}>Edit</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>}
      </div>
    </div>
  )
}

export default TicketList