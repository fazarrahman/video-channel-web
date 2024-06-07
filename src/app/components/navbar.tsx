"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('accessToken');
        setIsAuthenticated(false);
        router.push('/');
    }
    return (
        <nav className="absolute top-4 left-12 right-12 z-50">
            <div className="rounded-md flex justify-between items-center py-3 px-10 bg-blue-950 text-white">
                <div className="flex md:mr-auto space-x-5 items-center justify-center">
                    <div className="md:hidden">
                        <button id="menu-toggle" className="text-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            onClick={() => setMenuOpen(!menuOpen)}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <Link href="#" className="text-yellow-400">channelName</Link>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                        <Link href="/" className="text-yellow-400 hover:text-white text-sm">Home</Link>
                    </div>
                </div>

                <div>
                    {isAuthenticated ? (
                        <Link href="#" onClick={handleSignOut} className="bg-yellow-400 text-black 
                        hover:text-white py-2 px-4 text-xs rounded-3xl font-semibold">Sign Out
                        </Link>
                    ) : (
                        <Link href="/signin" className="bg-yellow-400 text-black 
                        hover:text-white py-2 px-4 text-xs rounded-3xl font-semibold">Sign In
                        </Link>
                    )}

                </div>
            </div>
            {menuOpen &&
                <div className="md:hidden bg-blue-800">
                    <Link href="/" className="block px-8 py-2 text-yellow-400 hover:text-white">Home</Link>
                </div>
            }
        </nav>
    );
}

export default Navbar;