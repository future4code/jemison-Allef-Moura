import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { InvalidEmail, InvalidPassword } from "../error/UserError"
import { CustomError } from "../error/CustomErrors"

export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new CustomError(400,"Dados inválidos (email, name, password)")
    }

    if (!email.includes("@") ){
      throw new InvalidEmail()
    }
    if(password.length <= 6){
      throw new InvalidPassword()
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }
  public getUsers = async () => {
    //instanciiar fora do try  
    try {
       const userDatabase = new UserDatabase()
       console.log("estou aki");
       
       return userDatabase.getUsers();
       
    } catch (error: any) {
       throw new CustomError(error.statusCode, error.message)
    }
 }

}
