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
import test from "node:test";

export default function Page() {

  const [products, getProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedInseam, setSelectedInseam] = useState("");
  const [selectedColor, setSelectedColor] = useState("");


    // Callback function to receive selected category from MenuCategory
    const handleCategorySelect = (e) => {
        setSelectedCategory(e.target.value);
    }
    // Callback function to receive selected category from MenuSize
    const handleSizeSelect = (e) => {
        setSelectedSize(e.target.value);
    }
    // Callback function to receive selected category from MenuInseam
    const handleInseamSelect = (e) => {
        setSelectedInseam(e.target.value);
    }
    // Callback function to receive selected category from MenuColor
    const handleColorSelect = (e) => {
        setSelectedColor(e.target.value);
    }
  
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
    const paramsQ = new URLSearchParams();
    paramsQ.append('category',selectedCategory)
    paramsQ.append('size', selectedSize)
    paramsQ.append('inseam', selectedInseam)
    paramsQ.append('color', selectedColor)

    axios.get(`${url}search`, { params: paramsQ })
    .then((response) => {
      const allProducts = response.data.products.allProducts;
      setProducts(allProducts);
    })
    .catch(error => console.error(`Error: ${error}`));
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
      <div>
        
        <select value={selectedCategory} onChange={handleCategorySelect}>
            <option value=""></option>
            <option value="Jean">Jean</option>
            <option value="Shirt">Shirt</option>
            <option value="Cargo">Cargo</option>
        </select>
        <p>{`You selected ${selectedCategory}`}</p>
        <select value={selectedSize} onChange={handleSizeSelect}>
            <option value=""></option>
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
        </select>
        <p>{`You selected ${selectedSize}`}</p>
        <select value={selectedColor} onChange={handleColorSelect}>
            <option value=""></option>
            <option value="dark wash">dark wash</option>
            <option value="light wash">light wash</option>
            <option value="med wash">med wash</option>
        </select>
        <p>{`You selected ${selectedColor}`}</p>
        <select value={selectedInseam} onChange={handleInseamSelect}>
            <option value=""></option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
        </select>
        <p>{`You selected ${selectedInseam}`}</p>
        <button onClick={handleUpdateButtonClick}>Update Products</button>
        </div>
        <div className="row">
          <div className="column30">
            <div className="sidenav">
              <a>Filter</a>

              <div className="app">

                {/* Pass handle__Select as a prop to Menu-- */}
                <MenuCategory onSelect={handleCategorySelect}/>
                <p>{`You selected ${selectedCategory}`}</p>
                <MenuSize onSelect={handleSizeSelect}/>
                <p>{`You selected ${selectedSize}`}</p>
                <MenuInseam onSelect={handleInseamSelect}/>
                <p>{`You selected ${selectedInseam}`}</p>
                <MenuColor onSelect={handleColorSelect}/>
                <p>{`You selected ${selectedColor}`}</p>

                <a></a>

                {/* Button to update products */}
                <button onClick={handleUpdateButtonClick}>Update Products</button>
              </div>
              <a></a>
            </div>
          </div>

          <div className="main">
            <h1 className="main_heading">Products</h1>
            <ProductList products={products}/>
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