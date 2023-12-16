import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../App";

function AuthWrapper({children}) {
    const loginContext = useContext(authContext);

    if(loginContext.loginState === false){
        return <Navigate to={'/login'}/>;
    }else {
        return children;
    }
}

export default AuthWrapper;