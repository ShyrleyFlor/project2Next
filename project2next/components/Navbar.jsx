"use client";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-400 mb-4 p-3 flex flex-wrap justify-between items-center px-10">
      <Link href="/" className="font-bold text-black">Home</Link>

      <ul>
        <li>
          <Link href="/about" className="font-bold text-black">About</Link>
        </li>
        <li>
          <Link href="/notfound" className="font-bold text-black">Not Found</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;