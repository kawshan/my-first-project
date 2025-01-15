import {NextResponse} from "next/server";
import clientPromise from "@/lib/apis/mongodb";

export const POST = async (req)=>{


    try {
        const {name,email,password} = await req.json();

        if (!name || !email || !password){
            return NextResponse.json(
                {error:"name email and password are required"},
                {status:400}
            );
        }
        const client = await clientPromise();
        const db = client.db("sample_mflix");

        const existingUser = await db.collection("users").findOne({email});
        if (existingUser){
            return NextResponse.json(
                {error:"user with this email already exists"},{status:409}
            );
        }


        return NextResponse.json({success:true,name,email});
    }catch (error){
        console.log("mongo db Error:", error);
        return NextResponse.json(
            {error:"internal server error"},
            {status:500}
        );
    }



}