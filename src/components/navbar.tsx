import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Image src="/assets/coup2.png" alt="Logo" width={270} height={50} />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
