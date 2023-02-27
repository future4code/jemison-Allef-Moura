import { Request, Response } from "express";
import { MovieBusiness } from "../business/movieBusiness";
import { MovieInputDTO } from "../model/movieDTO";


export class MovieController {

    public createMovie = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { title, description, duration_in_minutes, year_of_release } = req.body

         const input: MovieInputDTO = {
            title,
            description,
            duration_in_minutes,
            year_of_release
        }

            const movieBusiness = new MovieBusiness()

            await movieBusiness.createMovie(input)
            
            res.status(201).send({ message: "Filme adicionado!" })
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }


    public getMovies= async (req: Request,res: Response) => {
        try {
    
            const movieBusiness = new MovieBusiness()

            const allMovies= await movieBusiness.getMovies()
            
            res.status(201).send(allMovies)
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}