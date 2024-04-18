import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Select from 'react-select';

function CartButton({}) {
  return (
    <button>
      <img src="data:images/png-clipart-bird-logo-bird-animals-logo-thumbnail.jpeg"/>
    </button>
  );
}

export default function Page() {

  return (
  <div>
    <body>
      <div className="topnav">

        <Link href="Home">Home</Link>
        <Link className="active" href="AboutUs">About Us</Link>
        <Link href="Products">Products</Link>
        <Link href="Shipping">Shipping</Link>
        <Link href="Sizing">Sizing</Link>

        <Link className="logo-image" href="Home"></Link>

        <Link href="Cart" className="split">Cart</Link>
        <Link href="SignIn" className="split">Sign In</Link>

      </div>

      <section>
        <h1>About Us</h1>
        <div className="row">
          <div className="column2">
            <p>MISSI is a premier US clothing brand dedicated to catering to petite women with 
              heights ranging from 4’11 to 5’4. Specializing in various denim styles meticulously 
              crafted to perfectly complement petite frames, our garments are designed with 
              precision and passion. We take pride in sourcing high-quality materials and 
              manufacturing our products with care, ensuring exceptional quality and fit. While 
              our roots may extend to China for production, our commitment to providing petite women 
              with fashionable and flattering clothing knows no bounds.
            </p>
          </div>
          <div className="column2">
            <img src="app/images/Missi.jpg"/>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <ul>
          <a className="text-footer">Copyright ©-All rights are reserved|</a>
          <a>Social Media Here</a>
        </ul>
      </footer>

    </body>

  </div>
  );
}