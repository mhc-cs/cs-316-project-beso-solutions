"use client"; // This is a client component

import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { createFactory, useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import MenuSize from '../components/MenuSize';
import MenuCategory from '../components/MenuCategory';
import MenuInseam from '../components/MenuInseam';
import MenuColor from '../components/MenuColor';
import Select from 'react-select'
import Topnav from '../components/TopnavProduct'
import Footer from "../components/Footer";


export default function Page() {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [material, setMaterial] = useState("")
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [inseam, setInseam] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('http://cs-vm-06.cs.mtholyoke.edu:31600/api/upload', {
        name: name,
        description: description,
        category: category,
        material: material,
        color: color,
        size: size,
        inseam: inseam,
        price: price,
        stock: stock,
    })
    .then(() => {
      // Reset form fields
      setName("");
      setDescription("");
      setCategory("");
      setMaterial("");
      setColor("");
      setSize("");
      setInseam("");
      setPrice("");
      setStock("");
    })

  }

  return (
  <div>
    <body className="product-upload-bg">
      <Topnav setActiveLink="productsUpload"/>

      <div className="App" style={{marginTop:'80px'}}>
        <header className="App-header"> 
          <div className="product-form">
              <form onSubmit={handleSubmit}>
                  <p>Input New Products</p>
                    
                  <input
                    id = "Name"
                    type="text"
                    placeholder="Product name ..."
                    onChange={(e) => {setName(e.target.value)}}
                  />
                  <input 
                    id = "Description"
                    type="text"
                    placeholder = "Description...."
                    onChange={(e) => {setDescription(e.target.value)}}
                  />
                  <input 
                    id = "Category"
                    type="text"
                    placeholder = "Category...."
                    onChange={(e) => {setCategory(e.target.value)}}
                  />
                  <input 
                    id = "Material"
                    type="text"
                    placeholder = "Material...."
                    onChange={(e) => {setMaterial(e.target.value)}}
                  />
                  <input 
                    id = "Color"
                    type="text"
                    placeholder = "Color...."
                    onChange={(e) => {setColor(e.target.value)}}
                  />
                  <input 
                    id = "Size"
                    type="text"
                    placeholder = "Size...."
                    onChange={(e) => {setSize(e.target.value)}}
                  />
                  <input 
                    id = "Inseam"
                    type="text"
                    placeholder = "Inseam...."
                    onChange={(e) => {setInseam(e.target.value)}}
                  />
                  <input 
                    id = "Price"
                    type="text"
                    placeholder = "Price...."
                    onChange={(e) => {setPrice(e.target.value)}}
                  />
                  <input 
                    id = "Stock"
                    type="text"
                    placeholder = "Stock...."
                    onChange={(e) => {setStock(e.target.value)}}
                  />

                  <button type="submit">Submit</button>
              </form>
          </div>
        </header>
      </div>
      
      <Footer/>

      <footer className="footer">
        <ul>
          <a className="text-footer">Copyright ©-All rights are reserved  | </a>
          <a>Social Media Here</a>
        </ul>
      </footer>

    </body>

  </div>
  );
}