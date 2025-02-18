//movie data server component
//server action call directly to mongodb
import {db} from "@/lib/apis/mongodb"
import MovieTable from "@/app/dashboard/movies/movie-table";
export default async function MovieData() {

    try {
        const moviesQuery = await  db .collection("movies_n").find({}).sort({metacritic:-1}).limit(50).toArray();

        if (moviesQuery){
            //refine movies query to a array
            const refineMovies = moviesQuery.map((movie)=>({
                id: movie._id.toString(),
                title : movie.title,
                year : movie.year,
                plot : movie.plot,
                rated : movie.rated,
                genres : movie.genres,
                poster : movie.poster,
                imdb : movie.imdb
            }));

            //pass movie data to movies table
            //return movie table
            return <MovieTable movies={refineMovies}/>


        }

    }catch(error) {
        console.log(error)
        return (
            <div className="flex justify-center items-center h-[186.5px]">
                <p className="text-red-500 font-medium animate-pulse duration-1000">no movies available</p>
            </div>
        )
    }
}

