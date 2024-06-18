import React from 'react';
import Link from 'next/link';

const navBarLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/login', label: 'Login' },
];

const NavBar = () => {
return (
    <div className="flex items-center justify-between bg-blue-100 p-4">
        <div className="flex items-center">
            <div className="text-2xl font-bold mr-4">UCY Microgrid</div>
            <div className="text-2xl font-bold">Logo</div>
        </div>
        <div className="flex space-x-4">
            {navBarLinks.map((link) => (
                <Link key={link.label} href={link.href} className="px-4 py-2 bg-blue-200 text-black rounded hover:bg-blue-300">
                    {link.label}
                </Link>
            ))}
        </div>
    </div>
);
};

export default NavBar;