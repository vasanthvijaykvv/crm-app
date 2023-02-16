import CustomerForm from "../../components/Customer/CustomerForm/CustomerForm"
import CustomerList from "../../components/Customer/CustomerList/CustomerList"
import SecuredRoutes from "../../SecuredRoutes/SecuredRoutes"
import Signin from "../../SignIn/Signin"
//import Signup from "../../SignUp/Signup"
import UserList from "../../User/UserList"
import UserForm from "../../User/UserForm/UserForm"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
function Customer() {
    return (
        <div>
           <Router>
           <Routes>
           <Route path = "/" element= {<SecuredRoutes><CustomerList/></SecuredRoutes>}/>
           <Route path="/users" element ={<SecuredRoutes><UserList/></SecuredRoutes>}/> 
           <Route path="/newuserForm" element ={<SecuredRoutes><UserForm/></SecuredRoutes>}/>  
           <Route path="/form" element={<SecuredRoutes><CustomerForm/></SecuredRoutes>}/>
           <Route path='/form/:customerName' element={<CustomerForm/>}/> 
           {/*<Route path="/signup" element ={<Signup/>}/>*/}    
           <Route path="/signin" element ={<Signin/>}/>   

           </Routes>
           </Router>
        </div>
    )
}

export default Customer;