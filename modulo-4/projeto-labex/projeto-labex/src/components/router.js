import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";  
import React, {useContext} from "react";
import AdminLogin from "./ADM/AdminLogin";
import ListTrips from "./User/ListTrips";
import Home from "./Home";
import AdminHome from "./ADM/AdminHome";
import ApplicationForm  from "./User/ApplicationForm"
import CreateTravels from "./ADM/CreateTravel"
import { AuthProvider, AuthContext } from "../context/auth";



function Router() {
  
  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext)

      if (loading) {
        return <div>loading</div>;
      }

      if(!authenticated) {
        return <Navigate to= '/Login' />;
      }
      return children;
  };
  


  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route index element={<Home/>}/>
            <Route  exact path="Trips" element={<ListTrips/>}/>
            <Route  exact path="Login" element={< AdminLogin/>} />
            <Route exact path= "Admin" element={
            <Private>
              <AdminHome/>
            </Private>}/>
            <Route exact path= "createtravels" element={
            <Private>
              <CreateTravels/>
            </Private>}/>
            <Route exact path="Subscribe" element={<ApplicationForm/>}/>
        </Routes>
      </AuthProvider>  
    </BrowserRouter>
  )
}

export default Router



