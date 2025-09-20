import Link from "next/link";
function NavBar(){
    return(
        <nav className="fixed top-0 w-full items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
        {/* diferença entre link e Link */}
        <Link href='/' className="uppercase font-bold text-md h-12 flex items-center">
        Achare
        </Link>
        </nav>
    );
}

export default NavBar;