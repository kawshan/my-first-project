import {api} from "@/lib/api";
import ky from "ky";

export const loginUser = async (loginData) => {

    console.log(loginData);

    const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        body:JSON.stringify({
            email: loginData?.email,
            password: loginData?.password,
        })
    });

    console.log("login action response "+response.json())

};


export const registerUser = async (formData)=>{

    try {
        console.log("form data" ,formData);
        const response = await api.post("register",{json:formData})
        console.log("registration response ",response);
        if (response.ok){
            return response.json();
        }else {
            return undefined;
        }

    }catch(error){
        const status = error.response.status;
        const responseBody =await error.response.json();
        if (status && responseBody){
            if (status === 409){
                return responseBody
            }
            return undefined;
        }
        return undefined;
    }



}



//me method eka kiyanna issala npm i ky karanna one
export const getMovies = async ()=>{

    try {
        const response = await api.get("movies",{cache:"no-store"});
        if (response.ok){
            return response.json();
        }else {
            return {error:true,message:"something went wrong"};
        }


    }catch (error){
        console.log("movies response",error)
        if (error){
            //handle http errors
            const status = error?.response?.status;
            const responseBody = await error?.response?.json();

            console.log("http error",status,responseBody);
        }else {
            //handle non-http errors
            console.log("unknown error",error);
        }
    }
    return undefined
}


































