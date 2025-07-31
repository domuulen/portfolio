import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <p>I am a passionate software developer with experience in React, Next.js, and Node.js.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

