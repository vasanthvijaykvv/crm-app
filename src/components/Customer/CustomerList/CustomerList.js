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
  console.log(customer.length)
    return(<div>
        <Navbar />
       <div className="Container">
            <button className="btn btn-success " onClick={UseNavigatePage}>Back to form</button>
        
         {customer.length === 0 && 
         <div className="alert alert-warning mt-3" role="alert">
         Unable to Connect {error}
       </div>}
         { customer.length>0 && <table className="table table-striped">
           <thead>
               <tr>
                   <th scope="col">Name</th>
                   <th scope="col">Website</th>
                   <th scope="col">Turnover</th>
                   <th scope="col">NumberofEmployees</th>
                   <th scope="col">CEO</th>
                   <th scope="col">Established Year</th>
               </tr>
           </thead>
           <tbody>
               {
                   customer.map ((c,i)=>(
                    <tr key={i}>
                    <td>{c.name}</td>
                    <td>{c.website}</td>
                    <td>{c.turnover}</td>
                    <td>{c.employees}</td>
                    <td>{c.ceo}</td>
                    <td>{c.year}</td>
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