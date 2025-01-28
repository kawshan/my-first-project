"use client"
import {useState} from 'react';
import {Loader2} from "lucide-react"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
// import {registerUser} from "@/lib/apis/server";
import {useToast} from "@/hooks/use-toast"
// import {ToastAction} from "@/components/ui/toast";
import {signUp} from "@/lib/auth-client";


const DEFAULT_ERROR = {
    error: false,
    message: "",
}


// keep this as a client component (functional component)
function RegisterForm() {

    const [error, setError] = useState(DEFAULT_ERROR);
    const [isLoading, setLoading] = useState(false);
    const {toast} = useToast()


    const handleSubmitForm = async (event) => {
        event?.preventDefault();
        const formData = new FormData(event?.currentTarget);
        const name = formData.get("name").toString();
        const email = formData.get("email").toString();
        const password = formData.get("password") ?? "";
        const confirmPassword = formData.get("confirm-password") ?? "";


        console.log("form submitted", {name, email, password, confirmPassword});

        // if (name&&email&&password&&confirmPassword){
        if (password == confirmPassword) {
            setError(DEFAULT_ERROR)
            // setLoading(true);
            // const registerResp  = await registerUser({name,email,password,})
            // setLoading(false);
            // if (registerResp?.error){
            //     setError({error: true,message: registerResp.error})
            // }else {
            //     toast({
            //         variant: "success",
            //         title: "registration successful",
            //         description: "Please continue with login",
            //         action: <ToastAction altText="login" className="hover:bg-green-700/90">Login</ToastAction>,
            //     })
            // }

            const {data, ctx} = await signUp.email({
                email: email,
                password: password,
                name: name,
                image: undefined,
            }, {
                onRequest: () => {
                    // console.log("on request",ctx)
                },
                onSuccess: (ctx) => {
                    console.log("onsuccess", ctx)
                },
                onError: (ctx) => {
                    console.log("onerror", ctx)
                    if (ctx){
                        setError({error: true,message: ctx.error.message})
                    }
                }
            });

            if (data) {
                console.log("data", data)
            }


        } else {
            setError({error: true, message: "password dosent match"})
        }
        // }

        // console.log("error",error);

    }


    return (
        <div className="flex justify-center items-center min-h-screen">
            <Card className="bg-blue-50/90 w-[350px] ">
                <CardHeader>
                    <CardTitle className="text-center">Create an Account</CardTitle>
                    <CardDescription className="text-xs text-center">Enter Your Information To Get Started</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmitForm}>
                    <CardContent>
                        <div className="flex flex-col space-y-4">


                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" placeholder="John wick"></Input>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" name="email" placeholder="John@example.com"></Input>
                            </div>


                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" name="password"
                                       placeholder="enter your password"></Input>
                            </div>


                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input id="confirm-password" type="password" name="confirm-password"
                                       placeholder="enter password again to comfirm"></Input>
                            </div>

                            {/*form errors*/}
                            <div className="flex justify-center">
                                {error?.error &&
                                    <span className="text-red-600 text-xs text-center animate-pulse duration-1000">{error.message}</span>}
                            </div>


                            <div className="flex justify-center gap-1 text-xs">
                                Already have an account ?
                                <Link className="text-blue-600 hover:underline" href="/login">Login</Link>
                            </div>


                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button className="flex-1" type="submit" disabled={isLoading}>
                            {isLoading && <Loader2 className="animate-spin"/>}
                            Register
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}

export default RegisterForm;