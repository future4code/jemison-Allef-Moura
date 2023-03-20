import express, {Request, Response} from "express"
import cors from 'cors'
import { Product } from "./types"
import { products } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

// exercicio 01
app.get("/teste", (req: Request, res:Response)=>{
    res.status(200).send("Server is running in port 3000")
})

// exercicio 04 and 08

app.post("/product",(req:Request, res:Response)=>{
    try {
        const name = req.body.name
        const price = req.body.price
    
        if (!name || !price) {
          throw new Error("One or more missing fields : 'name', 'price'")
        }
    
        if (typeof name !== "string") {
          throw new Error("The fields 'name' must than a string")
        }
    
        if (typeof price !== "number" || price <= 0) {
          throw new Error("The field 'price' must have a number and greater zero")
        }
    
        const newProduct: Product = {
          id: Date.now().toString(),
          name,
          price
        }
    
        products.push(newProduct)
    
        res.send(products)
    
      } catch (error: any) {
        switch (error.message) {
          case "One or more missing fields: 'name', 'price'":
            res.status(422)
            break
          case "The fields 'name' must than a string":
            res.status(422)
            break
          case "The field 'price' must have a number and greater zero":
            res.status(422)
            break
          default:
            res.status(500)
        }
    
        res.send(error.message || "Error")
      }
    
 
})

// exercicio 05

app.get("/products",(req:Request, res: Response) =>{
    try{
        res.send(products)
    }catch(error:any){
        res.send(error.message || "Error")
    }
})

// exercicio 06 and 09

app.put("/product/:id", (req:Request, res:Response)=>{
    try{
        const id = req.params.id
        const newPrice = req.body.price
        if(!newPrice && newPrice !==0){
            throw new Error("Path params incorrect price")
        }
        if (typeof newPrice !=="number" || newPrice <= 0){
            throw new Error("The patch param price must be greater than zero")
        }
        let isProductFound = false

        for (let i = 0; i < products.length; i++) {
          if (products[i].id === id) {
            products[i].price = newPrice
            isProductFound = true
          }
        }
    
        if (!isProductFound) {
          throw new Error("product not found")
        }
    
        res.send(products)
    
      } catch (error: any) {
        switch (error.message) {
          case "path need: 'price'":
            res.status(422)
            break
          case "the patch param 'price' must be greater than zero":
            res.status(422)
            break
          case "Product not found":
            res.status(404)
            break
          default:
            res.status(500)
        }
    
        res.send(error.message || "Error")
      }
    
})

// exercicio 07 and 10

app.delete("/products/:id", (req:Request, res:Response)=>{
    try{
        const id = req.params.id
        
        let isProductFound = false
        
        for ( let i = 0; i <products.length; i++){
            if(products[i].id === id){
                products.splice( i,1)
                isProductFound = true
            }
        }
        if (!isProductFound){
            throw new Error("Product not found")
        }
        res.send(products)
    }catch(error:any){
        switch(error.message){
            case "Product not found":
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