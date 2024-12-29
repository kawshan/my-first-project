import {NextResponse} from "next/server";

const MOVIES = [
    {id:1,title:"harry potter 1"},
    {id:2,title:"load of the rings"},
    {id:3,title:"jhon wick"},
    {id:4,title:"harry potter 2"},
    {id:5,title:"harry potter 3"},
    {id:6,title:"harry potter 4"},
    {id:7,title:"harry potter 5"},
    {id:8,title:"harry potter 6"},
]



export const GET  = async (req)=>{
    return NextResponse.json({success:true,movies:MOVIES});
}