import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className=" sm:block text-xl font-bold">Aryan's Portfolio</span>
      </div>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
        <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
        <Link href="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
        <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
      </div>
      
    </nav>
  )
}

export default NavBar;
