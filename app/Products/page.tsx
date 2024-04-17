"use client"; // This is a client component

import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import MenuSize from '../components/MenuSize';
import MenuCategory from '../components/MenuCategory';
import MenuInseam from '../components/MenuInseam';
import MenuColor from '../components/MenuColor';
import Select from 'react-select'


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function Page() {

  return (
  <div>
    <body>
      <div className="topnav">

        <Link href="Home">Home</Link>
        <Link href="AboutUs">About Us</Link>
        <Link className="active" href="Products">Products</Link>
        <Link href="Shipping">Shipping</Link>
        <Link href="Sizing">Sizing</Link>

        <Link className="logo-image" href="Home"></Link>

        <Link href="Cart" className="split">Cart</Link>
        <Link href="Sign In" className="split">Sign In</Link>
        <Link href="ProductUpload" className="split">Input New Products</Link>

      </div>

      <div className="sidenav">
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#">Filter</a>

        <div className="app">
          <MenuCategory />
        </div>

        <div className="app">
          <MenuSize />
        </div>

        <div className="app">
          <MenuInseam />
        </div>

        <div className="app">
          <MenuColor />
        </div>

      </div>

      <section>
        <h1>Products</h1>
        <h1>Products</h1>
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