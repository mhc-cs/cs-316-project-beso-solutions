"use client"; // This is a client component

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './styles/Topnav.css';

const Topnav: React.FC = () => {
  const router = useRouter();

  return (
    <div className="topnav">
      <a className="active" href="/Home">Home</a>
      <Link href="/AboutUs">About Us</Link>
      <Link href="/Products">Products</Link>
      <Link href="/Shipping">Shipping</Link>
      <Link href="/Sizing">Sizing</Link>
      <Link className="logo-image" href="/Home"></Link>
      <Link className="split" href="/ProductUpload">Input Products</Link>
      <Link className="split" href="/Cart">Cart</Link>
      <Link className="split" href="/SignIn">Sign In</Link>
    </div>
  );
}

export default Topnav;