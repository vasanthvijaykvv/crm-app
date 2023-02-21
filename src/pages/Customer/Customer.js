import CustomerForm from "../../components/Customer/CustomerForm/CustomerForm"
import CustomerList from "../../components/Customer/CustomerList/CustomerList"
import SecuredRoutes from "../../SecuredRoutes/SecuredRoutes"
import Signin from "../../SignIn/Signin"
//import Signup from "../../SignUp/Signup"
import TicketForm from "../../Ticket/TicketForm"
import UserList from "../../User/UserList"
import UserForm from "../../User/UserForm/UserForm"
import TicketList from "../../Ticket/TicketList.js"
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function Customer() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<SecuredRoutes><CustomerList /></SecuredRoutes>} />
                    <Route path="/users" element={<SecuredRoutes><UserList /></SecuredRoutes>} />
                    <Route path="/newuserForm" element={<SecuredRoutes><UserForm /></SecuredRoutes>} />
                    <Route path="/form" element={<SecuredRoutes><CustomerForm /></SecuredRoutes>} />
                    <Route path='/form/:customerName' element={<CustomerForm />} />
                    {/*<Route path="/signup" element ={<Signup/>}/>*/}
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/ticket" element={<SecuredRoutes><TicketList /></SecuredRoutes>} />
                    <Route path="/ticketform" element={<SecuredRoutes><TicketForm /></SecuredRoutes>} />
                    <Route path="/ticketform/:desc" element={<SecuredRoutes><TicketForm /></SecuredRoutes>} />
                </Routes>
            </Router>
        </div>
    )
}

export default Customer;