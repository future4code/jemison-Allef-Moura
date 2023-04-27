import { connection } from "./connection"

const createTatbleUsers = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Users (
            id BIGINT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR (255) NOT NULL            
            );

             
        `)    


        console.log("Tabela Users criada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao criar tabela de usuários.")
        console.log(error.sqlMessage)
    }
}

async function populateTableUsers() {
    try {
        await connection.raw(`
            INSERT INTO Users (id, nome, email)
            VALUES 
            (1, "Allef", "allef@gmail.com"),
            (2, "Cake", "cake@gmail.com"),
            (3, "Jaqueline", "jaqueline@gmail.com"),
            (4, "Eunice", "eunice@gmail.com"),
            (5, "Arthur",  "arthur@gmail.com");
            
          
        `)

       
        
        console.log("Usuarios criados com sucesso.")
    } catch (error:any) {
        console.log("Erro ao popular tabela Users.")
        console.log(error.sqlMessage)
    }
}

createTatbleUsers()
.then(() => populateTableUsers())
.finally(() => process.exit())