import { Request, Response } from 'express';
import selectUsersByName from '../database/selectUsersByName';

export const getUsersFilterByName = async (req: Request,res: Response): Promise<void> => {
   try {
      let name = req.query.name as string

      if(!name){
         name = "%"
      }

      const users = await selectUsersByName(name);
      
      res.status(200).send(users);

   } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
   };
};