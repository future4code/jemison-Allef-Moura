import React, {useState, useEffect ,createContext} from "react";  
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../components/ADM/api";
import { toast } from "react-toastify"



export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState (null);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
      const recoveredUser = localStorage.getItem('user');
     
        if (recoveredUser){
          setUser(JSON.parse(recoveredUser));
        }
        setLoading(false)
    },[]);
    
    
    const login = async  (email, password)=> {
      const id = toast.loading("Please wait...")
      const response = await createSession(email, password).then((response)=>{
        const loadedUser = response.data.user
        const token = response.data.token

        localStorage.setItem('user', JSON.stringify(loadedUser));
        localStorage.setItem('token', (token));   
            
                 setUser(loadedUser)
                 navigate("/Admin")
        toast.update(id, {render: "Authorized Access", type: "success", isLoading: false, closeOnClick: true, autoClose: 3000, hideProgressBar:true});
      }).catch((error)=>{
        toast.update(id, {render: "Access Denied", type: "error", isLoading: false, closeOnClick: true });
      })
      

      
    

   
    
  };
  const logout = () => {
    console.log("logout");
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/Login")
  };

    return (
        <AuthContext.Provider value={{authenticated:
            !!user, user, loading, login, logout }} >
                {children}
        </AuthContext.Provider>
    )}