import { useEffect, useState } from "react";
import "./CustomerList.css"
import {useNavigate} from "react-router-dom"
import Navbar from "../../../NavBar/Navbar";
function CustomerList(){

    const [customer, setCustomer] = useState([]);
    const [error, setError] = useState("")
    const navigate = useNavigate();
    
    
    useEffect(()=>{
        fetch("http://localhost:4000/api/customer").then(res=>{
            return res.json()
        }).then(res=>  setCustomer(res)).catch((err)=>{
            setError(err.message)
        })
    },[])
   function UseNavigatePage () {
       navigate("/form")
   }
   function handleEditClick(name){
       console.log(name)
         navigate("/form/" + name)
   }
   function handleDeleteClick(name){
    fetch("http://localhost:4000/api/customer/" + name,{
        method :"DELETE"
    }).then(res=>{
        return res.json()
    }).then(res=>  setCustomer(res)).catch((err)=>{
        setError(err.message)
    })
   }
  console.log(customer)
    return(<div>
        <Navbar />
       <div className="Container table-responsive">
            <button className="btn btn-success " onClick={UseNavigatePage}>New Customer</button>
        
         {customer.length === 0 && 
         <div className="alert alert-warning mt-3" role="alert">
         Unable to Connect {error}
       </div>}
         { customer.length>0 && <table className="table table-striped  ">
           <thead>
               <tr>
                   <th scope="col">Name</th>
                   
                   <th scope="col">Turnover</th>
                   <th scope="col-auto">NumberofEmployees</th>
                   <th scope="col">CEO</th>
                   <th scope="col">Established Year</th>
                   <th scope="col">Status</th>
               </tr>
           </thead>
           <tbody>
               {
                   customer.map ((c,i)=>(
                    <tr key={i}>
                    <td>{c.name}</td>                    
                    <td>{c.turnover}</td>
                    <td>{c.employees}</td>
                    <td>{c.ceo}</td>
                    <td>{c.year}</td>
                    <td>{c.status === "New"&&<div className="badge bg-info text-wrap text-center fs-6" style={{width: "6rem"}}> New</div>}
                    {c.status === "Accepted"&&<div className="badge bg-success text-wrap text-center fs-6" style={{width: "6rem"}}> Accepted</div>}
                    {c.status === "Rejected"&&<div className="badge bg-danger text-wrap text-center fs-6" style={{width: "6rem"}}> Rejected</div>}</td>
                    <td>
                        <button className="btn btn-warning mx-2" onClick={()=>handleEditClick(c.name)}>Edit</button>
                        <button className="btn btn-danger" onClick={()=>handleDeleteClick(c.name)}>Delete</button>
                    </td>
                </tr>
                   ))
               }              
           </tbody>
          </table>}
        </div></div>
    )
}
export default CustomerList;