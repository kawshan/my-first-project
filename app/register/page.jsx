import React from 'react';
import RegisterForm from "@/app/register/register-form";

// keep this as a server component
function Page(props) {
    return (
        <div className="container mx-auto">
            <RegisterForm></RegisterForm>
        </div>
    );
}

export default Page;