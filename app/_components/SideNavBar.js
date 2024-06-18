import React from 'react';
import Link from 'next/link';

// Side Navigation Bar for the dashboard
export default function SideNavBar({sideBarLinks}) {
    return (
        <div className="flex flex-col bg-blue-100 p-4">
            <div className="text-2xl font-bold mb-4">UCY Microgrid</div>
            <div className="flex flex-col space-y-4">
                {sideBarLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="px-4 py-2 bg-blue-200 text-black rounded hover:bg-blue-300">
                            {link.label}
                        </Link>
                ))}
            </div>
        </div>
    )
}