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
import Topnav from "../components/Topnav";
import Login from "../components/Login";
import test from "node:test";

export default function Page() {

  return (
  <div>
    <header>
        <Topnav setActiveLink="login"/>
    </header>
    <body style={{paddingTop: '50px'}}>
        <Login/>

        <Footer/>

    </body>

  </div>
  );
}