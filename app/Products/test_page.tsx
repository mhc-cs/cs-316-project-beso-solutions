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

const ProductsPage = () => {

  // Component State
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedInseam, setSelectedInseam] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // const upateUIValues = (uiValues) => {
  //   setSliderMax(uiValues.maxPrice);

  //   if (uiValues.filtering.price) {
  //     let priceFilter = uiValues.filtering.price;

  //     setPriceRange([Number(priceFilter.gte), Number(priceFilter.lte)]);
  //   }

  //   if (uiValues.sorting.price) {
  //     let priceSort = uiValues.sorting.price;
  //     setPriceOrder(priceSort);
  //   }
  // };

  // Side effects
  useEffect(() => {
    setLoading(true);
    let cancel;

    const fetchData = async () => {

      try {
        const paramsQ = new URLSearchParams();
        paramsQ.append('category',selectedCategory)
        paramsQ.append('size', selectedSize)
        paramsQ.append('inseam', selectedInseam)
        paramsQ.append('color', selectedColor)
        const { data } = await axios({
          method: "GET",
          url: `http://cs-vm-06.cs.mtholyoke.edu:31600/api/search`,
          params : paramsQ,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setProducts(data.data);
        setLoading(false);
        // upateUIValues(data.uiValues);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error.response.data);
      }
    };

    fetchData();

    return () => cancel();
  }, [selectedCategory, selectedSize, selectedInseam, selectedColor]);


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

  return (
    <div>
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
                  <option value="med wash">medium wash</option>
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

  
              <div className="main">
                <div className="cards">
                  <div className="cards_inner">
                    <div className="card">
                      <h1>Tailored Jeans 1</h1>
                      <p className="price">$49.99</p>
                      <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                      <p><button>Add to Cart</button></p>
                    </div>
                    <div className="card">
                      <h1>Tailored Jeans 2</h1>
                      <p className="price">$35.99</p>
                      <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                      <p><button>Add to Cart</button></p>
                    </div>
                    <div className="card">
                      <h1>Tailored Shorts 1</h1>
                      <p className="price">$23.99</p>
                      <p>Some text about the shorts. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                      <p><button>Add to Cart</button></p>
                    </div>
                    <div className="card">
                      <h1>Tailored Shorts 2</h1>
                      <p className="price">$19.99</p>
                      <p>Some text about the shorts. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                      <p><button>Add to Cart</button></p>
                    </div>
                    <div className="card">
                      <h1>Tailored Jeans 3</h1>
                      <p className="price">$59.99</p>
                      <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                      <p><button>Add to Cart</button></p>
                    </div>
                    <div className="card">
                      <h1>Tailored Cargo Pants 1</h1>
                      <p className="price">$32.99</p>
                      <p>Some text about the cargo pants. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                      <p><button>Add to Cart</button></p>
                    </div>
                    <div className="card">
                      <h1>Tailored Cargo Pants 2</h1>
                      <p className="price">$41.99</p>
                      <p>Some text about the cargo pants. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                      <p><button>Add to Cart</button></p>
                    </div>
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
};

export default productsPage;