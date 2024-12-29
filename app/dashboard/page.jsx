import {getMovies} from "@/lib/apis/server";

export default async function DashboardPage() {
    // add shad cn card
    // create movies get endpoint
    //read dummy data
    //render data set in the UI

    const {movies} = await getMovies();

    console.log("movies \n",movies);

    return (
        <main>
            {/*navigation bar start*/}
            <div className="bg-blue-300 w-full h-16 flex justify-start items-center">
                <div className="container">
                    <h1 className="text-black font-bold text-xl">M-flix Dashboard</h1>
                </div>
            </div>
            {/*navigation bar end*/}


        {/*    body section start*/}
            <div className="container mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                    {movies?.length &&
                        movies.map((movie) => (
                            <div key={movie.id} className="h-96 bg-green-400">
                                {movie?.title}</div>
                        ))}


                </div>
            </div>
        {/*    body section end*/}



        </main>
    );
}
