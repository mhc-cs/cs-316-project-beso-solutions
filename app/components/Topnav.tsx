"use client"; // This is a client component

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './styles/Topnav';

let current = "home";
interface TopnavProps {
  setActiveLink: string; // Declare setActiveLink as string
}

const Topnav: React.FC<TopnavProps> = ({setActiveLink}) => {
  const router = useRouter();

  if(setActiveLink === "home"){
    return(
      <div id="top" className="topnav">
        <Link id="home" className="active" href="/Home">Home</Link>
        <Link id="about" href="/AboutUs">About Us</Link>
        <Link id="products" href="/Products">Products</Link>
        <Link id="shipping" href="/Shipping">Shipping</Link>
        <Link id="sizing" href="/Sizing">Sizing</Link>
        <Link className="logo-image" href="/Home"></Link>
        <Link className="split" href="/Cart">Cart</Link>
        <Link className="split" href="/Login">Login</Link>
      </div>
    );
  } else if(setActiveLink === "about"){
    return(
      <div id="top" className="topnav">
        <Link id="home" href="/Home">Home</Link>
        <Link id="about" className="active" href="/AboutUs">About Us</Link>
        <Link id="products" href="/Products">Products</Link>
        <Link id="shipping" href="/Shipping">Shipping</Link>
        <Link id="sizing" href="/Sizing">Sizing</Link>
        <Link className="logo-image" href="/Home"></Link>
        <Link className="split" href="/Cart">Cart</Link>
        <Link className="split" href="/Login">Sign In</Link>
      </div>
    );
  } else if(setActiveLink === "products"){
    return(
      <div id="top" className="topnav">
        <Link id="home" href="/Home">Home</Link>
        <Link id="about"href="/AboutUs">About Us</Link>
        <Link id="products" className="active" href="/Products">Products</Link>
        <Link id="shipping" href="/Shipping">Shipping</Link>
        <Link id="sizing" href="/Sizing">Sizing</Link>
        <Link className="logo-image" href="/Home"></Link>
        <Link className="split" href="/Cart">Cart</Link>
        <Link className="split" href="/Login">Sign In</Link>
      </div>
    );
  } else if(setActiveLink === "shipping"){
    return(
      <div id="top" className="topnav">
        <Link id="home" href="/Home">Home</Link>
        <Link id="about"href="/AboutUs">About Us</Link>
        <Link id="products" href="/Products">Products</Link>
        <Link id="shipping" className="active" href="/Shipping">Shipping</Link>
        <Link id="sizing" href="/Sizing">Sizing</Link>
        <Link className="logo-image" href="/Home"></Link>
        <Link className="split" href="/Cart">Cart</Link>
        <Link className="split" href="/Login">Sign In</Link>
      </div>
    );
  } else if(setActiveLink === "sizing"){
    return(
      <div id="top" className="topnav">
        <Link id="home" href="/Home">Home</Link>
        <Link id="about"href="/AboutUs">About Us</Link>
        <Link id="products" href="/Products">Products</Link>
        <Link id="shipping" href="/Shipping">Shipping</Link>
        <Link id="sizing" className="active" href="/Sizing">Sizing</Link>
        <Link className="logo-image" href="/Home"></Link>
        <Link className="split" href="/Cart">Cart</Link>
        <Link className="split" href="/Login">Sign In</Link>
      </div>
    );
  } else if(setActiveLink === "cart"){
    return(
      <div id="top" className="topnav">
        <Link id="home" href="/Home">Home</Link>
        <Link id="about"href="/AboutUs">About Us</Link>
        <Link id="products" href="/Products">Products</Link>
        <Link id="shipping" href="/Shipping">Shipping</Link>
        <Link id="sizing" href="/Sizing">Sizing</Link>
        <Link className="logo-image" href="/Home"></Link>
        <Link className="split" href="/Cart" style={{backgroundColor:'white', color:'black'}}>Cart</Link>
        <Link className="split" href="/Login">Sign In</Link>
      </div>
    );
  } else if(setActiveLink === "login"){
    return(
      <div id="top" className="topnav">
        <Link id="home" href="/Home">Home</Link>
        <Link id="about"href="/AboutUs">About Us</Link>
        <Link id="products" href="/Products">Products</Link>
        <Link id="shipping" href="/Shipping">Shipping</Link>
        <Link id="sizing" href="/Sizing">Sizing</Link>
        <Link className="logo-image" href="/Home"></Link>
        <Link className="split" href="/Cart">Cart</Link>
        <Link className="split" href="/Login" style={{backgroundColor:'white', color:'black'}}>Sign In</Link>
      </div>
    );
  }
}

export default Topnav;