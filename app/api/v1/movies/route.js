import {NextResponse} from "next/server";
import {db} from "@/lib/apis/mongodb"


export const GET  = async (req)=>{
    //get movies from mongodb
    try{
        //fetch movies from database
        const movies = await  db
            .collection("movies_n")
            .find({})
            .sort({metacritic:-1})
            .limit(10)
            .toArray();

        console.log("M flix movies",movies);
        return NextResponse.json(movies);

    }catch (error){
        console.log("mongodb Error:", error);
    }



}