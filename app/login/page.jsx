"use client"
export default function LoginPage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-black">
            <div className="w-[380px] mx-auto">

                <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
                    <form action="#" className="space-y-6">

                        <h3 className="text-center text-xl font-semibold text-gray-900 ">Sign In To EcoTech</h3>
                        {/*        email secttion start*/}
                        <div>
                            <label htmlFor="email" className="text-sm text-gray-900 block mb-2">Your Email</label>
                            <input type="email" name="email" id="email"
                                   className="bg-gray-50 border-gray-300 rounded-lg text-gray-900  focus:border-red-500 block w-full p-2.5"
                                   placeholder="Yourname@gmail.com"/>
                        </div>
                        {/*email secttion end*/}


                        <div>
                            <label htmlFor="email" className="text-sm text-gray-900 block mb-2">Your Password</label>
                            <input  name="password" id="password"
                                   className="bg-gray-50 border-gray-300 rounded-lg text-gray-900 focus:border-red-500 block w-full p-2.5"
                                   placeholder="enter your password"/>
                        </div>


                    </form>
                </div>

            </div>
        </div>
    )
}