import express, {Request, Response} from "express"
import cors from 'cors'
import { users } from "./data"
import { Peoples, UserType } from "./type"


const app = express()

app.use(express.json())

app.use(cors())

// exercicio 01

// app.get("/users",(req:Request, res:Response)=> {
//     res.status(200).send(users)
// })

// exercicio 02 e 03

app.get("/users", (req:Request, res:Response)=>{
    try {
        let type = req.params.type as string 
        let search = req.query.search as string 
        if (type){
            type = type.toUpperCase()
            if(type in UserType){
            const result = users.filter(user => user.type === type)
            return res.status(200).send(result)
            }
            
            throw new Error ("Invalid type, please put a correct type")
        }
        if(search){
            search = search.toUpperCase()
            const result = users.filter( user => user.name.toLowerCase().includes(search))
            console.log(result, search)
            //3.
            //B)
            if(result.length === 0) {
                return res.status(204).send("User NOT FOUND")
            }
            return res.status(200).send(result)
        }
        res.status(200).send(users)
    }catch(error:any){
        res.status(400).send(error.message)
    }
})

//exercio 04

app.post("/users",(req:Request, res:Response)=>{
    try {
        const {name, email, age} = req.body
        let type = req.body.type as string

        if(!name || !email || !age || !type){
            throw new Error ("Missing data in body to create user")
        }
        if ( typeof name !== "string"){
            throw new Error("Invalid name, please put a correct name")
        }
        if( typeof  email !== "string"){
            throw new Error("Invalid Email, please put a correct email.")
        }
        if(typeof age !=="number"){
            throw new Error("Invalid age, please put a correct age, only numbers")
        }

        type = type.toUpperCase()
        if(!(type in UserType)){
            throw new Error("invalid type, only use ADMIN or NORMAL")
        }

        users.forEach(user => {
            if (user.email === email){
                throw new Error("Email already exists, choose another email")
            }
        })

        const newUser:Peoples ={
            id: users.length +1,
            name,
            email,
            age,
            type: type === UserType.NORMAL
            ? UserType.NORMAL
            : UserType.ADMIN
        }

        users.push(newUser)
        res.send(201).send({
            message:"user Created successfuly",
            user: newUser
        })

    }catch(error:any){
        res.status(400).send(error.message)
    }
})


app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
});