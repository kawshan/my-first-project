import {getMovies} from "@/lib/apis/server";
import {  Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,} from "@/components/ui/card";
import Image from "next/image";

export default async function DashboardPage() {
    // add shad cn card
    // create movies get endpoint
    //read dummy data
    //render data set in the UI

    const moviesQuery = await getMovies();

    console.log("movies \n",moviesQuery);



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
                    {moviesQuery?.length &&
                        moviesQuery.map((movie) => (
                            <div key={movie._id} className="h-[480px]">
                            <Card className="h-full">
                                <CardHeader>
                                <CardTitle>{movie?.title}</CardTitle>
                                <CardDescription className="sr-only">{movie?.title}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-center bg-black w-full h-[220px] mb-4 rounded">
                                    <Image src={movie?.poster} alt={movie?.title} width={200} height={400} className="h-full w-auto object-contain" priority={true}/>
                                    </div>
                                    <p className="line-clamp-3">{movie?.plot}</p>
                                </CardContent>
                                <CardFooter></CardFooter>

                            </Card>
                            </div>
                        ))}


                </div>
            </div>
        {/*    body section end*/}



        </main>
    );
}
