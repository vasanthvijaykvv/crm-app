import CustomerForm from "../../components/Customer/CustomerForm/CustomerForm"
import CustomerList from "../../components/Customer/CustomerList/CustomerList"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
function Customer() {
    return (
        <div>
           <Router>
           <Routes>
           <Route path = "/" element= {<CustomerList/>}/>
           <Route path="/form" element={<CustomerForm/>}/>
           <Route path='/form/:customerName' element={<CustomerForm/>}/>               
           </Routes>
           </Router>
        </div>
    )
}

export default Customer;