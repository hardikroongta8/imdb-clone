import { Button } from "@mui/material";
import { deleteSession } from "../api/auth";
import { useContext } from "react";
import { authContext } from "../App";

function LogoutButton() {
    const loginContext = useContext(authContext);

    const handleLogout = async() => {
        const success = await deleteSession(localStorage.getItem('sessionId'));
        if(success){
            localStorage.removeItem('sessionId');
            loginContext.loginDispatch('logout');
        }        
    }

    return <Button onClick={handleLogout}>Logout</Button>;
}

export default LogoutButton;