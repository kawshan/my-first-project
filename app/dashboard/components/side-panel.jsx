import React from 'react';
import Link from "next/link";

const SidePanel = () => {
    return (
        <div className="flex flex-col p-4 space-y-2">
            <Link href="/dashboard" className="hover:bg-blue-50 text-sm p-2 rounded">overview</Link>
            <Link href="/dashboard/movies" className="hover:bg-blue-50 text-sm p-2 rounded">movie</Link>
            <Link href="/dashboard/add-movie" className="hover:bg-blue-50 text-sm p-2 rounded">add movie</Link>
            <Link href="/dashboard/users" className="hover:bg-blue-50 text-sm p-2 rounded">users</Link>
            <Link href="/dashboard/settings" className="hover:bg-blue-50 text-sm p-2 rounded">settings</Link>
        </div>
    );
};

export default SidePanel;