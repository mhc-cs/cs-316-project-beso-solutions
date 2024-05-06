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
import Topnav from "../components/TopnavProduct";
import test from "node:test";

export default function Page() {

  const [products, setProducts] = useState([]);
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

  const getAllProducts = async () => {
    // Construct query parameters based on selected criteria
    const paramsQ = new URLSearchParams();
    paramsQ.append('category',selectedCategory)
    paramsQ.append('size', selectedSize)
    paramsQ.append('inseam', selectedInseam)
    paramsQ.append('color', selectedColor)
      axios.get(`${url}search`, { params: paramsQ })
        .then((response) => {;
            console.log("full");
            setProducts(response.data)
            console.log("updated");
            console.log(products);
        })
        .catch(error => console.error(`Error: ${error}`));

  }

const addToCart = async(p) => {

        await axios.post('http://cs-vm-06.cs.mtholyoke.edu:31600/api/cart', {
            userID: "currUser",
            itemName: p.name,
            itemColor: p.colors[0].color,
            itemSize: p.colors[0].sizes[0].size,
            itemInseam: p.colors[0].sizes[0].inseams[0].inseam,
            itemQuantity: 1,
            itemPrice: p.colors[0].sizes[0].inseams[0].price
        })
    
      }

  // Function to handle update button click
  const handleUpdateButtonClick = () => {
    getAllProducts(); // Fetch products based on selected criteria
    <ProductList products={products}/>
  }

  return (
  <div style={{backgroundColor:"white"}}>
    <header>
      <Topnav setActiveLink="products"/>
    </header>
    <body style={{paddingTop: '50px'}}>
      <h1 style={{textAlign:'center'}}>Products</h1>

      <section>
        <div className="row">
          <div className="column30">
            <div className="sidenav">
              <a>Filter Products</a>
              <select style={{}} value={selectedCategory} onChange={handleCategorySelect}>
                <option value="">Select Category...</option>
                <option value="jean">Jeans</option>
                <option value="short">Shorts</option>
                <option value="cargo">Cargo</option>
              </select>
              {/*<p>{`You selected ${testValue}`}</p>*/}
              <select value={selectedSize} onChange={handleSizeSelect}>
                <option value="">Select Size...</option>
                <option value="00">00</option>
                <option value="0">0</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="20">20</option>
              </select>
              {/*<p>{`You selected ${selectedSize}`}</p>*/}
              <select value={selectedColor} onChange={handleColorSelect}>
                <option value="">Select Color...</option>
                <option value="dark wash">dark wash</option>
                <option value="light wash">light wash</option>
                <option value="medium wash">medium wash</option>
              </select>
              {/*<p>{`You selected ${selectedColor}`}</p>*/}
              <select value={selectedInseam} onChange={handleInseamSelect}>
                <option value="">Select Inseam...</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
              </select>
              {/*<p>{`You selected ${selectedInseam}`}</p>*/}
              <button onClick={handleUpdateButtonClick}>Search</button>

              <a></a>
            </div>
          </div>
          </div>
          <div className="container mt-3 category">
 
  <p style={{backgroundColor:"white"}}>{products?.length} Products Found </p>
  <div className="main" style={{backgroundColor:"white"}}>
    <div className="cards">
      <div className="cards_inner">
        {products?.map((p) => (
          <div className="card" key={p._id}>
            <img
              src={`/api/v1/product/product-photo/${p._id}`}
              className="card-img-top"
              alt={p.name}
            />
            <h1 className="card-title">{p.name}</h1>
            <h5 className="price">
              {p.colors[0].sizes[0].inseams[0].price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h5>
            <p className="card-text ">
              {p.description.substring(0, 60)}...
            </p>
            <div className="card-name-price">
            {/* <button >More Details</button>
              <button >ADD TO CART</button> */}
              <button
                className="btn btn-info ms-1"
              //   onClick={() => navigate(`/product/${p.slug}`)}
              >
                More Details
              </button>
              {/* <button
            className="btn btn-dark ms-1"
            onClick={addToCart(p)}
          >
              
            ADD 2 CART
          </button> */}
          <button onClick={() => addToCart(p)}>ADD TO CART</button>
            </div>
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