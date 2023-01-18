import  { useEffect, useState } from "react";
import axios from "axios";


const useRequestData = (url, headers) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')


    useEffect(()=>{
        console.log("deu bom ")
        setIsLoading(true)
        axios
            .get(url, headers)
            .then((res)=>{
                setData(res.data)
                setIsLoading(false)
            }).catch((err)=>{
                setError(err)
                setIsLoading(false)
            })
    },[])
    return [data, isLoading, error]
}

export default useRequestData