//movies related server actions
"use server"
import clientPromise from "@/lib/apis/mongodb";
export const createMovie = async (movie)=>{
    try {
        const client = await clientPromise();
        const db = client.db("sample_mflix");

        //create movie query
        const result = await db.collection("movies_n").insertOne(movie);
        console.log(`movie was inserted with the id ${result.insertedId}`);

        if (result.acknowledged){
            return {success:true};
        }else {
            return {success:false};
        }
    }catch(error){
        console.log(`mongodb insert failed ${error}`)
        return {success:false,error};
    }
}


















