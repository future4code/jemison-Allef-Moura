import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";

export class UserController {
  public create = async (req: Request, res: Response) => {
    try {
      const input: UserInputDTO = { 
        email: req.body.email,
        name: req.body.name,
        password:req.body.password
        }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }
  public getUsers = async (req: Request, res: Response):Promise<void> => {
    try {
      const name = req.query.name
       const userBusiness = new UserBusiness()
       const users = await userBusiness.getUsers()

       res.status(201).send(users)
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
 }
}
