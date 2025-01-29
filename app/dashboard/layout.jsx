import UserNav from "@/app/dashboard/components/user-nav";

export default function DashBoardLayout({children}) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">

            {/*side panel start*/}
            <aside className="w-64 overflow-y-auto border-r bg-white shadow-lg">Side panel</aside>
            {/*side panel end*/}


            <div className=" flex flex-1 flex-col overflow-hidden">

                {/*dashboard header start*/}
                <header className="bg-white flex h-16 items-center justify-between gap-4 border-b px-6 shadow-sm">
                    <h1 className="text-2xl font-bold text-blue-800">Mflix Dashboard</h1>
                    <UserNav/>
                </header>
                {/*dashboard header end*/}


                {/*dashboard page body start*/}
                <main className="flex-1 overflow-y-auto bg-gray-100 p-6">{children}</main>
                {/*dashboard page body end*/}


            </div>
        </div>
    );
}

