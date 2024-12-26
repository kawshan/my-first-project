import {api} from "@/lib/api";

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

//me method eka kiyanna issala npm i ky karanna one
export const getMovies = async ()=>{

    try {
        const response = await api.get("movies");
        return response;
    }catch (error){
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






























