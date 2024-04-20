"use client"; // This is a client component

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './styles/Topnav.css';

const Topnav: React.FC = () => {
  const router = useRouter();

  return (
    <div className="topnav">
      <a href="/Home" className={router.pathname === './Home' ? 'active' : ''}>Home</a>
      <Link href="/AboutUs" className={router.pathname === '/AboutUs' ? 'active' : ''}>About Us</Link>
      <Link href="/Products" className={router.pathname === '/Products' ? 'active' : ''}>Products</Link>
      <Link href="/Shipping" className={router.pathname === '/Shipping' ? 'active' : ''}>Shipping</Link>
      <Link href="/Sizing" className={router.pathname === '/Sizing' ? 'active' : ''}>Sizing</Link>
      <Link className="logo-image" href="/Home"></Link>
      <Link href="/Cart" className={router.pathname === '/Cart' ? 'active split' : 'split'}>Cart</Link>
      <Link href="/SignIn" className={router.pathname === '/SignIn' ? 'active split' : 'split'}>Sign In</Link>
    </div>
  );
}

export default Topnav;