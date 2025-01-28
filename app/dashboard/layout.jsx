export default function DashBoardLayout({children}) {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <aside className="w-64 overflow-y-auto border-r bg-white shadow-lg">Side panel</aside>
            <div className="bg-gray-500 flex flex-1 flex-col overflow-hidden">
                <header className="bg-white h-16 items-center gap-4 border-b px-6 shadow-sm">header</header>
                <main className="flex-1 overflow-y-auto bg-gray-100 p-6">{children}</main>


            </div>
        </div>
    );
}

