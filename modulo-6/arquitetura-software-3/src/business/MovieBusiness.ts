import { MovieDatabase } from "../data/MovieDatabase"
import { CustomError } from "../error/CustomErrors"
import { generateId } from "../services/idGenerator"


export class MovieBusiness {

   public createMovie = async (
      input: any
   ) => {
      try {
         const { title, description, duration_in_minutes, year_of_release } = input

         if (
            !title ||
            !description ||
            !duration_in_minutes ||
            !year_of_release
         ) {
            throw new CustomError(400,'"title", "description", "deadline" e "authorId" são obrigatórios')
         }

         const id: string = generateId()

         const movieDatabase = new MovieDatabase()

         await movieDatabase.insertMovie({
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release,
         })

      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }
   //get movie
   public getMovies = async () => {
      try {
         const movieDatabase = new MovieDatabase()
         return await movieDatabase.getMovies()
      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }
}