"use client"; // This is a client component

import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { createFactory, useEffect, useState } from 'react';
import Axios from 'axios';
import Link from 'next/link';
import MenuSize from '../components/MenuSize';
import MenuCategory from '../components/MenuCategory';
import MenuInseam from '../components/MenuInseam';
import MenuColor from '../components/MenuColor';
import Select from 'react-select'


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

      Axios.post('http://cs-vm-06.cs.mtholyoke.edu:31600/api/upload', {
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

      </div>

      <div className="App">
        <header className="App-header"> 
          <div className="logIn-form">
              <form onSubmit={handleSubmit}>
                  <p>First Name</p>

                  <input
                    className = "Name"
                    type="text"
                    placeholder="Product name ..."
                    onChange={(e) => {setName(e.target.value)}}
                  />

                  <p> Company Role</p>

                  <input 
                    className = "Description"
                    type="text"
                    placeholder = "Description...."
                    onChange={(e) => {setDescription(e.target.value)}}
                  />

                  <input 
                    className = "Category"
                    type="text"
                    placeholder = "Category...."
                    onChange={(e) => {setCategory(e.target.value)}}
                  />
                  <input 
                    className = "Material"
                    type="text"
                    placeholder = "Material...."
                    onChange={(e) => {setMaterial(e.target.value)}}
                  />
                  <input 
                    className = "Color"
                    type="text"
                    placeholder = "Color...."
                    onChange={(e) => {setColor(e.target.value)}}
                  />
                  <input 
                    className = "Size"
                    type="text"
                    placeholder = "Size...."
                    onChange={(e) => {setSize(e.target.value)}}
                  />
                  <input 
                    className = "Inseam"
                    type="text"
                    placeholder = "Inseam...."
                    onChange={(e) => {setInseam(e.target.value)}}
                  />
                  <input 
                    className = "Price"
                    type="text"
                    placeholder = "Price...."
                    onChange={(e) => {setPrice(e.target.value)}}
                  />
                  <input 
                    className = "Stock"
                    type="text"
                    placeholder = "Stock...."
                    onChange={(e) => {setStock(e.target.value)}}
                  />

                  <button type="submit">Submit</button>
              </form>
          </div>
        </header>
      </div>
      
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