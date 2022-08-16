import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX'
})

export const createSession = async(email,password) => {
    console.log({email, password})
    return api.post('/allef-souza-jemison/login',  {email, password})
}


