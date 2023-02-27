import { UserDatabase } from "../data/UserDataBase";

export class UserBusiness {
    createUser = async (input:any):Promise<void> => {
        try{
            const {name, email, password} = input
            
            if (!name || !email || !password
             ) {
                throw new Error('Preencha os campos "name", "email" e "password"')
             }
             if(email.indexOf("@") === -1){
                throw new Error("Invalid Email")
             }
             
             if (password.lengh <6){
                 throw new Error ("Senha muito curta")
             }
             const id: string = Date.now().toString()
             const userDatabase = new UserDatabase ()
             await userDatabase.insertUser({
                id,
                name,
                email,
                password
             })
        }catch(error:any){
            throw new Error (error.message)
        }
    }
}