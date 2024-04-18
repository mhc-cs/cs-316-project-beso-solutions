import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Select from 'react-select';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


export default function Page() {

  return (
  <div>
    <body>
      <div className="topnav">

        <Link className="active" href="Home">Home</Link>
        <Link href="AboutUs">About Us</Link>
        <Link href="Products">Products</Link>
        <Link href="Shipping">Shipping</Link>
        <Link href="Sizing">Sizing</Link>

        <Link className="logo-image" href="Home"></Link>

        <Link href="Cart" className="split">Cart</Link>
        <Link href="Sign In" className="split">Sign In</Link>

      </div>

      <div className="bg"></div>

      <section>
        <h1>Products New In</h1>
        <div className="row">
          <div className="column3">
            <div className="card">
              <img src="images/sticker-design-with-blue-t-shirt-isolated_1308-79625.jpg" alt="Denim Jeans"></img>
              <h1>Tailored Jeans 1</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="column3">
            <div className="card">
              <img src="images/sticker-design-with-blue-t-shirt-isolated_1308-79625.jpg" alt="Denim Jeans"></img>
              <h1>Tailored Jeans 2</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="column3">
            <div className="card">
              <img src="images/sticker-design-with-blue-t-shirt-isolated_1308-79625.jpg" alt="Denim Jeans"></img>
              <h1>Tailored Jeans 3</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <ul>
          <a className="text-footer">Copyright ©-All rights are reserved|</a>
          <a>Social Media Here</a>
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-instagram"></a>
        </ul>
      </footer>

    </body>

  </div>
  );
}


// Avoid caching, so that hot udates work as expected
export const dynamic = 'force-dynamic' 

// This function should be called once 
async function getData(search:string[]) {
    const res = await fetch('http://cs-vm-06.cs.mtholyoke.edu:31600/search?parametername:balha blah balh')
    if (!res.ok) {
       throw new Error('Failed to fetch data')
    }

    return res.json()
}