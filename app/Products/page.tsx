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
import Select from 'react-select';
import ProductList from '../components/ProductList'

export default function Page() {

  const [products, getProducts] = useState('');
  
  const url = 'http://cs-vm-06.cs.mtholyoke.edu:31600/./app/api/';

  
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios.get(`${url}search`)
    .then((response) => {
      const allProducts = response.data.products.allProducts;
      getProducts(allProducts);
    })
    .catch(error => console.error(`Error: ${error}`));
  }


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

      <section>
        <h1>Products</h1>
        <div className="row">
          <div className="column30">
            <div className="sidenav">
              <a>Filter</a>

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
              <a></a>

            </div>
          </div>
          <ProductList products={products}/>
          <div>
            
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