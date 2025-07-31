// components/navbar.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <Image src="/assets/coup2.png" alt="Logo" width={270} height={50} />
        </div>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link href="#home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <button
            className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
      {/* Mobile backdrop */}
      <div
        className={`mobile-backdrop ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}
