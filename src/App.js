import React from 'react';
import Registration from './components/Registration'
import Login from './components/Login'
import styled from 'styled-components'
import './Main'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {

   const Main = styled.div`
          width:600px;
          height:400px;
          background:#A7D7C5;
          margin:80px auto;
          padding:30px;
     `;
     const rootElement = document.getElementById("root");
  return (
    <>
      <Main>
              
      {/* <Registration></Registration> */}
      {/* <Login></Login> */}
      
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        {/* <Route path="/registration" element={<Registration />} /> */}
        </Routes>
        </BrowserRouter>
        </Main>
    </>
  )
}

export default App;
