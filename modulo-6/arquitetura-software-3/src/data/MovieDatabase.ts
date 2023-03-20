import { CustomError } from "../error/CustomErrors"
import { movie } from "../model/Movies"
import { BaseDatabase } from "./BaseDatabase"

export class MovieDatabase extends BaseDatabase {

    private movieTable = 'LABEFLIX_MOVIE'

    public insertMovie = async (
        movie: movie
    ) => {
        try {
            MovieDatabase.connection.initialize()
            await MovieDatabase.connection(this.movieTable)
                .insert({
                    id: movie.id,
                    title: movie.title,
                    description: movie.description,
                    duration_in_minutes: movie.duration_in_minutes , 
                    year_of_release: movie.year_of_release 
                })
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }finally{
            console.log("conexão encerrada!");
            MovieDatabase.connection.destroy();
         }
    }
    
    public getMovies = async () => {
        try {
            MovieDatabase.connection.initialize()
            const allmovies=await MovieDatabase.connection.select().from(this.movieTable)
            return allmovies;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }finally{
            console.log("conexão encerrada!");
            MovieDatabase.connection.destroy();
         }
    }
}