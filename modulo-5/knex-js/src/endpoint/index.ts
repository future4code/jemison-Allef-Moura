import express,{Response, Request} from "express"
import cors from 'cors'
import { connection } from "../database/connection"
 

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running in ${process.env.PORT || 3000}`);
});


app.get("/users",async(req:Request, res:Response)=>{
    let statusCode = 400
    try {
        const search = req.query.search
    
        if(search){
          const result = await connection.raw(`
            SELECT * FROM Users
            WHERE nome = "${search}";
          `)
          return res.status(200).send(result[0])
    
        }
    
        const resultado = await connection.raw(`
             SELECT * FROM Users;
        `)
        res.status(200).send(resultado[0])
    
      } catch (error:any) {
        res.status(statusCode).send(error.message)
      }
})