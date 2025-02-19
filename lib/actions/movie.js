//movies related server actions
"use server"
import {db} from "@/lib/apis/mongodb";
import {ObjectId} from "mongodb";
export const createMovie = async (movie)=>{
    try {

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


export const updateMovie = async (id,movie)=>{
    try {
        const result = await db.collection("movies_n").updateOne({_id:ObjectId.createFromHexString(id)},{$set:movie},{upsert:true});
        console.log(`movie was updated with the id ${result.upsertedId}`);

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





















