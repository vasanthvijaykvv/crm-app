import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import "./SideBar.css"
function SideBar(){ 
  const [visible, setVisible] = useState(false); 
  return (
    <div className="card flex justify-content-center">
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
    <div className='menus'>
                <p>
                <a href='/' className="navbar-brand"> Home</a>
                </p>
                <p>
                <a href='/users' className="navbar-brand"> Users</a>
                </p>
                <p>
                <a href='/ticket' className="navbar-brand"> Ticket</a>
                </p>
               </div>
    </Sidebar>
    <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
     </div>
    
  )
}

export default SideBar