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
      const revoceredUser = localStorage.getItem('user');
     
        if (revoceredUser){
          setUser(JSON.parse(revoceredUser));
        }
        setLoading(false)
    },[]);
    
    
    const login = async  (email, password)=> {
      const id = toast.loading("Please wait...")
      const response = await createSession(email, password).then((response)=>{
        const loddedUser = response.data.user
        const token = response.data.token

        localStorage.setItem('user', JSON.stringify(loddedUser));
        localStorage.setItem('token', (token));   
            
                 setUser(loddedUser)
                 navigate("/Admin")
        toast.update(id, {render: "Login Already", type: "success", isLoading: false, closeOnClick: true, autoClose: 3000, hideProgressBar:true});
      }).catch((error)=>{
        toast.update(id, {render: "Try Again!", type: "error", isLoading: false, closeOnClick: true });
      })
      

        // api.defaults.headers.Authorization = `allef-souza-jemison ${token}`
    

   
    
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