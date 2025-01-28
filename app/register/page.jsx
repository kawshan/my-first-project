import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import RegisterForm from "@/app/register/register-form";
import {redirect} from "next/navigation";

// keep this as a server component
async function Page(props) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(session) {
        redirect("/dashboard")
    }


    return (
        <div className="container mx-auto">
            <RegisterForm></RegisterForm>
        </div>
    );
}

export default Page;