"use client"; // This is a client component

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './styles/Topnav.css';

function makeHomeActive() {
  const element1 = document.getElementById("top");
  const element2 = document.getElementById("home");
  element1.classList.remove("active");  // Remove mystyle class
  element2.classList.add("active");  // Add newone class
}
function makeAboutActive() {
  const element1 = document.getElementById("top");
  const element2 = document.getElementById("about");
  element1.classList.remove("active");  // Remove mystyle class
  element2.classList.add("active");  // Add newone class
}
function makeProductsActive() {
  const element1 = document.getElementById("top");
  const element2 = document.getElementById("products");
  element1.classList.remove("active");  // Remove mystyle class
  element2.classList.add("active");  // Add newone class
}
function makeShippingActive() {
  const element1 = document.getElementById("top");
  const element2 = document.getElementById("shipping");
  element1.classList.remove("active");  // Remove mystyle class
  element2.classList.add("active");  // Add newone class
}
function makeSizingActive() {
  const element1 = document.getElementById("top");
  const element2 = document.getElementById("sizing");
  element1.classList.remove("active");  // Remove mystyle class
  element2.classList.add("active");  // Add newone class
}

const Topnav: React.FC = () => {
  const router = useRouter();

  return (
    <div id="top" className="topnav">
      <Link id="home" className="active" href="/Home" onClick={() => makeHomeActive()}>Home</Link>
      <Link id="about" href="/AboutUs" onClick={() => makeAboutActive()}>About Us</Link>
      <Link id="products" href="/Products" onClick={() => makeProductsActive()}>Products</Link>
      <Link id="shipping" href="/Shipping" onClick={() => makeShippingActive()}>Shipping</Link>
      <Link id="sizing" href="/Sizing" onClick={() => makeSizingActive()}>Sizing</Link>
      <Link className="logo-image" href="/Home" onClick={() => makeHomeActive()}></Link>
      <Link className="split" href="/Cart" onClick={() => makeHomeActive()}>Cart</Link>
      <Link className="split" href="/SignIn" onClick={() => makeHomeActive()}>Sign In</Link>
    </div>
  );
}

export default Topnav;