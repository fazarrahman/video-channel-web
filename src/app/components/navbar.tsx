import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-4 left-12 right-12 z-50">
            <div className="rounded-md flex justify-between items-center py-3 px-10 bg-blue-950 text-white">
                <div>
                    <Link href="/" className="text-yellow-400 hover:text-white text-sm">Home</Link>
                </div>
                <div>
                    <Link href="/signin" className="bg-yellow-400 text-black hover:text-white py-2 px-4 text-xs rounded-3xl font-semibold">Sign In</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;