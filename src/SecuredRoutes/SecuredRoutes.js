import React, { useEffect, useState } from "react";

function SecuredRoutes(props){
    const [loggedIn, setLogin] = useState(false);
    useEffect(()=>{
        const isUserLogged = localStorage.getItem("loggedIn");
        if(!isUserLogged || isUserLogged!=="true"){
            console.log("Not logged in");
            window.location.href="/signin";
        }else{
            setLogin(true);
        }
    },[]);
   
    return(
        <React.Fragment>
            {
                loggedIn ? props.children : null
               // loggedIn && props.children
            }
        </React.Fragment>

    )
}
export default SecuredRoutes;