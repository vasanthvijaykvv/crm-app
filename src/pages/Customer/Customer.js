import CustomerForm from "../../components/Customer/CustomerForm/CustomerForm"
import CustomerList from "../../components/Customer/CustomerList/CustomerList"
import Signin from "../../SignIn/Signin"
import Signup from "../../SignUp/Signup"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
function Customer() {
    return (
        <div>
           <Router>
           <Routes>
           <Route path = "/" element= {<CustomerList/>}/>
           <Route path="/form" element={<CustomerForm/>}/>
           <Route path='/form/:customerName' element={<CustomerForm/>}/> 
           <Route path="/signup" element ={<Signup/>}/>      
           <Route path="/signin" element ={<Signin/>}/>         
           </Routes>
           </Router>
        </div>
    )
}

export default Customer;