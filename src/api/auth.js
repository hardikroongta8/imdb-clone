import axios from "axios";
import { api } from "./api_config";

async function createRequestToken(){
    try {
        const res = await api.get(`/authentication/token/new`);

        if(res.status === 200){
            return res.data.request_token;
        }else{
            console.log(res.data);
        }
    } catch (error) {
        console.error(error.message);
    }
}

async function generateSessionId(token){
    try {
        const res2 = await axios.post(`https://api.themoviedb.org/3/authentication/session/new?request_token=${token}`,{}, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_READ_ACCESS_TOKEN}`
            }
        })
        return res2.data.session_id;
    } catch (error) {
        console.log(error.message);
    }
}

async function deleteSession(sessionId){
    try {
        const res = await api.delete(`/authentication/session?session_id=${sessionId}`);
        return res.data.success;
    } catch (error) {
        console.log(error);
    }
}

async function getAccountId(sessionId){
    try {
        const res = await api.get(`/account?session_id=${sessionId}`);
        return res.data.id;
    } catch (error) {
        console.log(error);
    }
}

export {
    createRequestToken,
    generateSessionId,
    deleteSession,
    getAccountId
}