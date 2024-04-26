//"use client"; // This is a client component

import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Select from 'react-select';
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



export default async function Page() {

  return (
  <div>
    <header><Topnav setActiveLink="home"/></header>
    <body>
      {/*<Topnav setActiveLink="home"/>*/}

      <div className="bg-container">
        <div className="bg">
          <div className="bg-text">
            <h1 style={{color: 'white', textShadow: '1px 1px 2px black'}}>Missi Petite</h1>
            <p style={{color: 'white', textShadow: '1px 1px 2px black', textAlign:'center'}}>Clothing for Petite Women</p>
          </div>
        </div>
      </div>

      <h1>Products New In</h1>
      <div className="main">
        <div className="cards">
          <div className="cards_inner">
            <div className="card">
              <h1>Tailored Jeans 1</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
            <div className="card">
              <h1>Tailored Jeans 2</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
            <div className="card">
              <h1>Tailored Jeans 3</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
            <div className="card">
              <h1>Tailored Jeans 4</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
            <div className="card">
              <h1>Tailored Jeans 5</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h1>Products New In</h1>
        <div className="card">
          <img src="images/IMG_6339.jpg" alt="Denim Jeans"></img>
          <h1>Tailored Jeans 1</h1>
          <p className="price">$19.99</p>
          <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <p><button>Add to Cart</button></p>
        </div>
        <div className="card">
          <img src="images/IMG_6339.jpg" alt="Denim Jeans"></img>
          <h1>Tailored Jeans 1</h1>
          <p className="price">$19.99</p>
          <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <p><button>Add to Cart</button></p>
        </div>
        <div className="card">
          <img src="images/IMG_6339.jpg" alt="Denim Jeans"></img>
          <h1>Tailored Jeans 1</h1>
          <p className="price">$19.99</p>
          <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
          <p><button>Add to Cart</button></p>
        </div>

        <div className="row">
          <div className="column3">
            <div className="card">
              <img src="images/IMG_6339.jpg" alt="Denim Jeans"></img>
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

      
      {/*<footer className="footer">
        <ul>
          <a className="text-footer">Copyright ©-All rights are reserved|</a>
          <a>Social Media Here</a>
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-instagram"></a>
        </ul>
  </footer>*/}
    <Footer/>

    </body>

  </div>
  );
} 
