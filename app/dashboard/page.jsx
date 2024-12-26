import {getMovies} from "@/lib/apis/server";

export default async function DashboardPage() {

    const movies = await getMovies();

    console.log("movies \n"+movies);

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
                    <div className="h-96 bg-green-400">div 1</div>
                    <div className="h-96 bg-yellow-400">div 2</div>
                    <div className="h-96 bg-blue-400">div 3</div>
                    <div className="h-96 bg-orange-400">div 4</div>
                    <div className="h-96 bg-red-400">div 5</div>
                    <div className="h-96 bg-purple-400">div 6</div>
                    <div className="h-96 bg-lime-400">div 6</div>
                    <div className="h-96 bg-cyan-400">div 6</div>
                </div>
            </div>
        {/*    body section end*/}



        </main>
    );
}
