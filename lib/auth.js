import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import {db} from "@/lib/apis/mongodb"

export const auth = betterAuth({
    database:mongodbAdapter(db),
    emailAndPassword: {
        enabled:true 
    },
})