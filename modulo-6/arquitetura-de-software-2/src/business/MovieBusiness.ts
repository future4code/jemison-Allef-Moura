import { MovieDatabase } from "../data/MovieDatabase"


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
            throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
         }

         const id: string = Date.now().toString()

         const movieDatabase = new MovieDatabase()

         await movieDatabase.insertMovie({
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release,
         })

      } catch (error: any) {
         throw new Error(error.message)
      }
   }
   //get movie
   public getMovies = async () => {
      try {
         const movieDatabase = new MovieDatabase()
         return await movieDatabase.getMovies()
      } catch (error: any) {
         throw new Error(error.message)
      }
   }
}