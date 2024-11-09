"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#02066f] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-3xl">
          Portfolio
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-white text-2xl" onClick={handleToggle}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-[#ffcb00]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="text-white hover:text-[#ffcb00]">
              About
            </Link>
          </li>
          <li>
            <Link href="/Projects" className="text-white hover:text-[#ffcb00]">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/Reviews" className="text-white hover:text-[#ffcb00]">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="text-white hover:text-[#ffcb00]">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-[#02066f] space-y-4 p-6 z-50">
            <li>
              <Link
                href="/"
                className="text-white hover:text-[#ffcb00]"
                onClick={handleToggle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-white hover:text-[#ffcb00]"
                onClick={handleToggle}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Projects"
                className="text-white hover:text-[#ffcb00]"
                onClick={handleToggle}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/Reviews"
                className="text-white hover:text-[#ffcb00]"
                onClick={handleToggle}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="text-white hover:text-[#ffcb00]"
                onClick={handleToggle}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
