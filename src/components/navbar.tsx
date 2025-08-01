// components/Navbar.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          {/* Home хуудас руу шилжих холбоос */}
          <Link href="/">
            <Image
              src="/assets/coup2.png"
              alt="Logo"
              width={270}
              height={50}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/" className="nav-link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="nav-link-item">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
