import express, {Response, Request}  from "express";
import cors from "cors"
import { ToDo } from "./types";
import { toDoData } from "./data";


const app = express()

app.use(express.json())

app.use(cors())

//exercicio 01
app.get("/ping", (req:Request, res: Response)=>{
    res.status(201).send("pong")
})

//exercicio 02, 03 e 04

app.get("/all/completed/:isCompleted",(req:Request, res: Response)=>{
    let isCompleted:any = req.params.isCompleted

    if (isCompleted === "false"){
        isCompleted  = false
    }else if (isCompleted ==="true"){
        isCompleted = true 
    }else {
        res.send("Path param of taks be have 'true' or 'false'")
    }
    const result = []
    for (let i  = 0; i<toDoData.length; i ++){
        if(toDoData[i].completed === isCompleted)
        result.push(toDoData[i])
    }
    res.send(result)
})

// exercicio 05

 app.post("/all", (req:Request, res:Response)=>{
    const userId = req.body.userId
    const title = req.body.title

    const newTask:ToDo = {
        userId,
        id:Date.now(),
        title,
        completed:false
    }
    toDoData.push(newTask)
    res.send(toDoData)
 })

 // exercicio 06

 app.put("/all/:id/completed",(req:Request, res: Response)=>{
    const id = Number(req.params.id)
    for ( let all of toDoData) {
        if (all.id === id){
            all.completed = !all.completed
        }
    }
    res.send(toDoData)
 }) 

 // exercicio 07

 app.delete("/all/:id",(req:Request, res:Response)=>{
    const id = Number(req.params.id)
    for (let i = 0; i<toDoData.length; i ++){
        if(toDoData[i].id === id){
            toDoData.splice(i, 1)
        }
    }
    res.send(toDoData)
 })

 // exercicio 08

 app.get("/all/:userId",(req:Request, res:Response)=>{
    const userId = Number(req.params.userId)
    const result = []
    for (let all of toDoData) {
        if (all.userId === userId){
            result.push(all)
        }
    }
    res.send(result)

 })
 

 // exercicio 09

 // link of documentation https://documenter.getpostman.com/view/22375602/2s93CLtu72





app.listen(3005, ()=>{
    console.log("server is running in port:3005")
})