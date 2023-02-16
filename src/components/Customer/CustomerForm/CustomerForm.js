import  { useEffect, useState} from "react";
import {useNavigate,useParams} from "react-router-dom"
import React from 'react'


function CustomerForm() {
    //const [customer,setCustomer] = useState({})
    const [customerToUpdate, setCustomerToUpdate] = useState({})
    const navigate = useNavigate();
    const {customerName} = useParams();
    console.log(customerName)
    // useParams to get the data of the particular object
    useEffect(()=>{
      if(customerName){
        fetch("http://localhost:4000/api/customer").then((res)=>{
             return res.json()
           }).then(res=>{
             let result = res.find(c=> c.name === customerName)
             if(result){
               
               setCustomerToUpdate(result)
             }
           })
      }
    },[customerName])

    let Submitdata = (e) => {
      console.log(e)
      console.log(customerToUpdate)
        if(!customerToUpdate.name||!customerToUpdate.website||!customerToUpdate.ceo||!customerToUpdate.employees||!customerToUpdate.year||!customerToUpdate.turnover){
            console.log("error")
            return
        }
       if(e==="create"){
        fetch("http://localhost:4000/api/customer",{
          method : "POST",
          body : JSON.stringify(customerToUpdate),
          headers:{
            "Content-Type" : "application/json"
          }
        }).then((res)=>{
          return res.json()
        }).then(res=>{
          console.log(res)
          navigate("/")
        })
       }
       if(e==="UpdateValue"){
        fetch("http://localhost:4000/api/customer",{
          method : "PUT",
          body : JSON.stringify(customerToUpdate),
          headers:{
            "Content-Type" : "application/json"
          }
        }).then((res)=>{
          return res.json()
        }).then(res=>{
          console.log(res)
          navigate("/")
        })
       }

       /* setData(()=>{   

            return [...data,{
                name : name,
                website : website,
                ceo : ceo,
                employee : employee,
                year : year,
                turnover : turnover
            }]
        })*/
      
        /* fetch("http://localhost:4000/api/customer",{
           method : "post",
           body : JSON.stringify(customer)
         }).then((res)=>{
           navigator("/customerlist")
         })
        }*/
    }
    
  return (
    <div><h2>CRM_APP</h2>
    <form className="d-grid gap-2">
    {customerName&&<input className="form-control" readOnly="true" type="text" onInput={(e)=>{setCustomerToUpdate({...customerToUpdate,name : e.target.value})}}  value={customerToUpdate.name}  placeholder="Company Name" />}
    {!customerName&&<input className="form-control"  type="text" onInput={(e)=>{setCustomerToUpdate({...customerToUpdate,name : e.target.value})}}  value={customerToUpdate.name}  placeholder="Company Name" />}
    <input className="form-control" type="text" onInput={(e)=>{setCustomerToUpdate({...customerToUpdate,website : e.target.value})}}  value={customerToUpdate.website} placeholder="Company Website" />
    <input className="form-control" type="text" onInput={(e)=>{setCustomerToUpdate({...customerToUpdate,ceo : e.target.value})}} value={customerToUpdate.ceo} placeholder="Compant CEO" />
    <input className="form-control" type="number" onInput={(e)=>{setCustomerToUpdate({...customerToUpdate,employees : e.target.value})}} value={customerToUpdate.employees}  placeholder="Employee" />
    <input className="form-control" type="number" onInput={(e)=>{setCustomerToUpdate({...customerToUpdate,year : e.target.value})}} value={customerToUpdate.year}  placeholder="Year Of Started" />
    <input className="form-control" type="number" onInput={(e)=>{setCustomerToUpdate({...customerToUpdate,turnover : e.target.value})}} value={customerToUpdate.turnover}  placeholder="Turnover" />
    {!customerName&&<input type = "button" className="btn btn-success" onClick={()=>Submitdata("create")} value ="create "/>}
    {customerName&&<input type = "button" className="btn btn-success" onClick={()=>Submitdata("UpdateValue")} value ="UpdateValue "/>}
    </form>
    
    </div>
  )
}

export default CustomerForm