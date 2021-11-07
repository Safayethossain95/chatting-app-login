import React from 'react'
import Registration from './components/Registration'
import Login from './components/Login'
import App from './App'

import {
     BrowserRouter,
     Routes,
     Route
   } from "react-router-dom";
   
const Main = () => {
     const rootElement = document.getElementById("root");
     
     return (
          
          <>
               <BrowserRouter>
               <Routes>
               <Route path="/" element={<App />} />
               <Route path="login" element={<Login />} />
               {/* <Route path="/registration" element={<Registration />} /> */}
               </Routes>
               </BrowserRouter>,
               rootElement
          </>
     )
}

export default Main

