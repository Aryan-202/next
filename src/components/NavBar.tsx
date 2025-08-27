import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md border-b border-gray-200">
        {/* left */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="w-6 h-6 md:w-9 md:h-9" />
          <p className="hidden md:block tracking-wider">Ecommerce app</p>
        </Link>
        {/* right */}
        <div>
          right
        </div>
    </nav>
  )
}

export default NavBar;
