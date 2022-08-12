import { BrowserRouter, Route, Routes } from "react-router-dom";  
import React from "react";
import AdminLogin from "./ADM/AdminLogin";
import ListTrips from "./User/ListTrips";
import Home from "./Home";
import AdminHome from "./ADM/AdminLogin";



function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="Trips" element={<ListTrips/>}/>
            <Route path="Login" element={< AdminLogin/>} />
            <Route path="AdminHome" element={<AdminHome/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router



