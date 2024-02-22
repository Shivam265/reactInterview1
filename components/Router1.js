import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link, BrowserRouter, 
} from "react-router-dom";

 function Router1() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>Home page</div>}/>
            <Route path="/about-us" element ={<div>about</div>}/>
            <Route path ="/Contect" element = {<div>Contect</div>}/>
        </Routes>
    </BrowserRouter>
  );
 }

  export default Router1;
  
   