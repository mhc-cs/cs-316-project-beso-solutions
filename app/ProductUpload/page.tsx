"use client"; // This is a client component

import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Link from 'next/link';
import MenuSize from '../components/MenuSize';
import MenuCategory from '../components/MenuCategory';
import MenuInseam from '../components/MenuInseam';
import MenuColor from '../components/MenuColor';
import Select from 'react-select'


function App() {
    const [name, setName] = useState("")
    const [role, setRole] = useState("")
  
    const handleSubmit = (e) => {
        e.preventDefault();
  
        Axios.post('http://cs-vm-06.cs.mtholyoke.edu:31600/api/upload', {
            fullName: name,
            companyRole: role
        })
    }
}

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

      </div>

      <section>
        <h1>Input New Products</h1>
        <h1>Input New Products</h1>
      </section>

      <header className="App-header"> 
        <div className="logIn-form">
            <form onSubmit={handleSubmit}>
                <p>First Name</p>

                <input
                  className = "Name"
                  type="text"
                  placeholder="First name ..."
                  onChange={(e) => {setName(e.target.value)}}
                />

                <p> Company Role</p>

                <input 
                  className = "Role"
                  type="text"
                  placeholder = "Role...."
                  onChange={(e) => {setRole(e.target.value)}}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
      </header>

      
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