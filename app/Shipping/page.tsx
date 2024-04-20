import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Select from 'react-select';


export default function Page() {

  return (
  <div>
    <body>
      <div className="topnav">

        <Link href="Home">Home</Link>
        <Link href="AboutUs">About Us</Link>
        <Link href="Products">Products</Link>
        <Link className="active" href="Shipping">Shipping</Link>
        <Link href="Sizing">Sizing</Link>

        <Link className="logo-image" href="Home"></Link>

        <Link href="Cart" className="split">Cart</Link>
        <Link href="Sign In" className="split">Sign In</Link>

      </div>

      <section>
        <h1>Shipping Details</h1>
        <p>
          Shipping typically takes 3-5 business days. Estimated number of business days it takes 
          until you will receive your order after placing it on the website. 
          Business days do not include Saturdays, Sundays, or US holidays. 
          This time includes processing and in-transit time for your order. 
        </p>
        <p>
          For certain extended delivery zip codes, the order may arrive outside of the estimated timeframe. 
        </p>
        <p>
          During holiday periods and certain promotional events, customers can expect an additional 3-5 days of processing time.
        </p>
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