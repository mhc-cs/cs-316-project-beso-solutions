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
import ProductList from '../components/ProductList';
import Footer from "../components/Footer";
import Topnav from "../components/TopnavProduct"

export default function Page() {

  let [products, setProducts] = useState<any[]>([]);
  let [selectedCategory, setSelectedCategory] = useState("");
  let [selectedSize, setSelectedSize] = useState("");
  let [selectedInseam, setSelectedInseam] = useState("");
  let [selectedColor, setSelectedColor] = useState("");

  let allProducts: any[];
  
  const url = 'http://cs-vm-06.cs.mtholyoke.edu:31600/api/';

  
  useEffect(() => {
    getAllProducts();
  }, [selectedCategory, selectedSize, selectedInseam, selectedColor]);

  const getAllProducts = () => {
    // Construct query parameters based on selected criteria
    const queryParams = {
      category: selectedCategory,
      size: selectedSize,
      inseam: selectedInseam,
      color: selectedColor
    };

    axios.get(`${url}search`, { params: queryParams })
    .then((response) => {
      const allProducts = response.data.products.allProducts;
      setProducts(allProducts);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  // Callback function to receive selected category from MenuCategory
  const handleCategorySelect = (category:string) => {
    setSelectedCategory(category);
  }
  // Callback function to receive selected category from MenuSize
  const handleSizeSelect = (size:string) => {
    setSelectedSize(size);
  }
  // Callback function to receive selected category from MenuInseam
  const handleInseamSelect = (inseam:string) => {
    setSelectedInseam(inseam);
  }
  // Callback function to receive selected category from MenuColor
  const handleColorSelect = (color:string) => {
    setSelectedColor(color);
  }
  // Function to handle update button click
  const handleUpdateButtonClick = () => {
    getAllProducts(); // Fetch products based on selected criteria
  }

  return (
  <div>
    <body>

      <Topnav setActiveLink="products"/>

      <section>
        <div className="row">
          <div className="column30">
            <div className="sidenav">
              <a>Filter</a>

              <div className="app">
                {/* Pass handle__Select as a prop to Menu-- */}
                <MenuCategory onSelect={handleCategorySelect}/>
                <MenuSize onSelect={handleSizeSelect}/>
                <MenuInseam onSelect={handleInseamSelect}/>
                <MenuColor onSelect={handleColorSelect}/>

                <a></a>

                {/* Button to update products */}
                <button onClick={handleUpdateButtonClick}>Update Products</button>
              </div>
              <a></a>
            </div>
          </div>
          <ProductList products={products}/>

          <div className="main">
            <h1 className="main_heading">Products</h1>
            <div className="cards">
              <div className="cards_inner">
                {products.map(product => (
                  <div className="card" key={product["id"]}>
                    {/*<img src={product.image} alt={product.name} />*/}
                    <h1>{product["name"]}</h1>
                    <p className="price">${product["price"]}</p>
                    <p>{product["description"]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          

        </div>
        <div></div>
      </section>
      
      <Footer/>

    </body>

  </div>
  );
}