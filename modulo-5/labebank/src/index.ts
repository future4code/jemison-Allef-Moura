import express, {Request, Response} from "express"

import cors from 'cors'
import { dataBank } from "./data"

const app = express()

app.use(express.json())

app.use(cors())


app.post("/bank/create",(req:Request, res:Response)=>{
    try{
        const {name, cpf , dateOfBirthy} = req.body
        
        const [day, month, year] = dateOfBirthy.split("/")
        
        const dateOfBirth:Date = new Date(`${year}-${month}-${day}`)
        
        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()

        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365
        
        if(ageInYears < 18){
            res.statusCode = 406
            throw new Error ("You must be over 18 years old")
        }
        dataBank.push({
            name,
            cpf,
            dateOfBirth,
            balance:0,
            statament:[]
        })
        res.status(201).send("Create account successfuly!")
    }catch(error:any){
        res.status(404).send(error.message)
    }
})

app.get("/bank/users",(req:Request, res:Response)=>{
    try{
        if(!dataBank.length){
            res.statusCode = 404
            throw new Error("Account not found")
        }
        res.status(200).send(dataBank)
    }catch (error:any){
        res.send(error.message)
    }
})
// nao consegui fazer o delete do usuario.
app.delete("/bank/:name",(req:Request, res:Response)=>{
    try{
        const name = req.params.name.toString()

        let isAccountFound = false

        for ( let i = 0; i <dataBank.length; i++){
            if(dataBank[i].name === name){
                dataBank.splice(i,1)
                isAccountFound = true
            }
        }
        if(!isAccountFound){
            throw new Error ("Account not found")
        }
        res.send(dataBank)

    }catch(err:any){
        switch(err.message){
            case "Account not found":
                res.status(401)
                break;
                default:
                    res.status(500)
        }
    }
})

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});