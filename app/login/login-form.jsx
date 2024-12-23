"use client";

// client component for client side rendering
import {useState} from "react";

export default function LoginForm({title}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")

    const validateForm = ()=>{
        if (!email){
            setEmailError("Email is Required")
            return false;
        }else {
            setEmailError("");
        }

        if (!password){
            setPasswordError("password is Required")
            return false;
        }else {
            setPasswordError("");
        }
        return true;
    }




    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm()

        if (isValid){
        //login form data submission
        console.log("form data", {email:email, password:password});
        }


    }



    return (
        <div className="w-[380px] mx-auto">

            <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
                <form className="space-y-6" onSubmit={handleSubmit}>

                    <h3 className="text-center text-xl font-semibold text-gray-900 ">{title}</h3>


                    {/*        email secttion start*/}
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Your
                            Email</label>
                        <input type="email" name="email" id="email" value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               className="bg-gray-50 border-gray-300 rounded-lg text-gray-900  focus:border-red-500 block w-full p-2.5"
                               placeholder="Yourname@gmail.com"/>

                        {emailError && <div className="text-red-600 text-sm mt-2">{emailError}</div>}
                    </div>
                    {/*email secttion end*/}


                    {/*pass word section start*/}
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your
                            Password</label>
                        <input type="password" name="password" id="password" value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               className="bg-gray-50 border-gray-300 rounded-lg text-gray-900 focus:border-red-500 block w-full p-2.5"
                               placeholder="enter your password"/>
                        {passwordError&& <div className="text-red-600 text-xs mt-2 ml-1">{passwordError}</div>}

                    </div>
                    {/*pass word section end*/}


                    {/*remember me section start*/}
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox"
                                       className="bg-gray-50 border border-gray-300 focus:ring-3  focus:ring-blue-300 h-4 w-4 rounded"/>
                            </div>
                            <div className="text-sm ml-3">
                                <label htmlFor="remember" className="font-medium text-gray-900 "> Remember Me</label>
                            </div>
                        </div>
                        {/*remember me section end*/}

                        <a className="text-sm text-blue-700 hover:underline font-medium" href="/forget-password">Lost
                            Password</a>
                    </div>

                    {/*    submit button section start */}
                    <button type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3">Sign
                        In
                    </button>


                    <div className="flex justify-center text-sm font-medium text-gray-500 space-x-1">
                        <span>Not Registered</span>
                        <a href="/register" className="text-blue-700 hover:underline">Create an account</a>
                    </div>


                </form>
            </div>

        </div>
    )
}