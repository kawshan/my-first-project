import {NextResponse} from "next/server";
import clientPromise from "@/lib/apis/mongodb";
import bcrypt from "bcrypt";

export const POST = async (req)=>{


    try {
        const {name,email,password} = await req.json();

        if (!name || !email || !password){
            return NextResponse.json(
                {error:"name email and password are required"},
                {status:400}
            );
        }

        //todo you can do further validation

        const client = await clientPromise();
        const db = client.db("sample_mflix");

        const existingUser = await db.collection("users").findOne({email});
        if (existingUser){
            return NextResponse.json(
                {error:"user with this email already exists"},{status:409}
            );
        }

        const hashedPassword = await bcrypt.hash(password,10)
        console.log(`hashed Password`,hashedPassword);

        const result = await db.collection("users").insertOne({
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),

        });

        if (result && result.acknowledged){
            console.log("mongo response",result)
            return NextResponse.json({
                success:true,
                user:{
                    userId:result.insertedId,
                    name,
                    email
                },
            });
        }else {
            return NextResponse.json(
                {error:"user registration failed"},
                {status:500}
            );
        }


    }catch (error){
        console.log("mongo db Error:", error);
        return NextResponse.json(
            {error:"internal server error"},
            {status:500}
        );
    }



}