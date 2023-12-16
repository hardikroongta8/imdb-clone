import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout';
import MovieRoutes from './routes/MovieRoutes';
import TvRoutes from './routes/TvRoutes';
import AuthWrapper from './components/AuthWrapper';
import Login from './pages/Login';
import Home from './pages/Home';
import { authReducer, checkIfLoggedIn } from './utils/authUtils';

const initialLoginState = checkIfLoggedIn();
export const authContext = createContext();

function App() {
  const [loginState, dispatch] = useReducer(authReducer, initialLoginState)

  return (
    <authContext.Provider value={{loginState: loginState, loginDispatch: dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='login' element={<Login/>}/>
            <Route index element={<AuthWrapper><Home/></AuthWrapper>}/>
            {MovieRoutes}
            {TvRoutes}
          </Route>
        </Routes>
      </BrowserRouter>
    </authContext.Provider>
  );
}

export default App;
