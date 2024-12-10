import LoginForm from "@/app/login/login-form";

// Server Component for SSR
export default function LoginPage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-black">
        <LoginForm />
        </div>
    )
}