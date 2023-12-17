import { Button } from "@mui/material";
import { createRequestToken, generateSessionId, getAccountId } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { authContext } from "../App";
import { useContext } from "react";

function Login() {
    const loginContext = useContext(authContext);
    const navigate = useNavigate();

    const handleClick = async() => {
        const requestToken = await createRequestToken();

        localStorage.setItem('requestToken', requestToken);
        window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${process.env.REACT_APP_REDIRECT_URL}`;
    }

    const handleClick2 = async() => {
        const requestToken = localStorage.getItem('requestToken');
        const sessionId = await generateSessionId(requestToken);
        const accountId = await getAccountId(sessionId);

        console.log(accountId);

        localStorage.setItem('accountId', accountId);
        localStorage.setItem('sessionId', sessionId);
        
        loginContext.loginDispatch('login');
        navigate('/');
    }

    return <div>
        <Button onClick={handleClick}>Login</Button>
        <Button onClick={handleClick2}>Continue</Button>
    </div>
}

export default Login;