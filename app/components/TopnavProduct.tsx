"use client"; // This is a client component

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './styles/Topnav.css';

let current = "home";
interface TopnavProps {
  setActiveLink: string; // Declare setActiveLink as string
}
const Topnav: React.FC<TopnavProps> = ({setActiveLink}) => {
  const router = useRouter();
    return(
      <div id="top" className="topnav">
        <Link id="home" href="/Home">Home</Link>
        <Link id="about"href="/AboutUs">About Us</Link>
        <Link id="products" className="active" href="/Products">Products</Link>
        <Link id="shipping" href="/Shipping">Shipping</Link>
        <Link id="sizing" href="/Sizing">Sizing</Link>
        <Link className="logo-image" href="/Home"></Link>
        <Link className="split" href="/Cart">Cart</Link>
        <Link className="split" href="/SignIn">Sign In</Link>
        <Link className="split" href="/ProductUpload">Input Products</Link>
      </div>
    );
}

export default Topnav;