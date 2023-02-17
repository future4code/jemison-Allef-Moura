import  express,{Request, Response}  from "express";
import cors from 'cors'

const app = express()

app.use(express.json())

// exercicio 01
app.get("/",(req:Request,res:Response)=> {
     res.send("Hello fromn Express")
}) 

// exercicio 02

type User = {
    id:number,
    name:string,
    phone:number,
    email:string,
    website:string
}

// exercicio 03

const users:User[] = [
    {id:1 , name:"allef", phone:1234567, email:"allefsouza@hotmail.com", website:"www.teste.com.br"},
    {id:2 , name:"jaque", phone:12345678, email:"jaque@hotmail.com", website:"www.teste.com.br"},
    {id:3 , name:"cake", phone:12345679, email:"cake@hotmail.com", website:"www.teste.com.br"},
    {id:4 , name:"eunice", phone:234567, email:"eunice@hotmail.com", website:"www.teste.com.br"},
    {id:5 , name:"arthur", phone:34567, email:"arthur@hotmail.com", website:"www.teste.com.br"}
]

// exercicio 04

app.get("/users",(req:Request, res:Response)=>{
    if(!users.length){
        res.status(401).send("nao tem usuario")
    }
    res.status(201).send(users)
})

// exercicio 05

type Post = {
    userId:string,
    id:string,
    title:string,
    body:string
}

// exercicio 06

const posts:Post[] =[
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        userId: 1,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      }
]

// exercicio 07

app.get("/posts",(req:Request, res:Response)=>{
    if(!posts.length) {
        res.status(401).send("não há posts")
    }
    res.status(200).send(posts)
})

// exercicio 08

// esse exercicio tive que fazer um copia e cola, pois nao estava conseguindo fazer.

app.get("/posts/:userId", (req: Request, res: Response) => {

    let user = req.params.userId

    const post = posts.filter((post) => {
        return post.userId == user 
    })

    if(!user) {
        return res.status(400).send("Entre com userId válido.")
     } else if(post.length === 0) {
        return res.status(400).send("Nenhum resultado encontrado.")
     }
        
        res.status(201).send(post)   
})



app.listen("3003", ()=>{
    console.log ("Servidor rodando na porta 3003")
})
