import axios from "axios";  
import { useState, useEffect } from "react";
import { BASE_URL, Planets } from "../MocksDados/mocks";



export const useRequestData = (url) =>{
    const [travel, setTravels] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    
    useEffect(()=>{
        setIsLoading(true)
        axios.get(url)
        .then((response)=>{
            setIsLoading(false)
            setTravels(response.data.trips)
        }).catch((error)=>{
            setIsLoading(false)
            console.log(error)
            setError(error)
        })
   },[])
   return [travel, isLoading, error]
}




export const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)

    
    
    const onChange = (e) => {
    const {name, value} = e.target
    setForm ({ ...form, [name]: value})
    }
    const clear =() => {
        setForm(initialState)
    }
    return [form, onChange, clear]
}
    