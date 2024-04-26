import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Select from 'react-select';
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";


export default function Page() {

  return (
  <div>
    <body className="shipping-bg">
      <Topnav setActiveLink="shipping"/>

      <section className="container">
        <div className="textBlock">
          <h1 style={{color: 'white', textShadow: '1px 1px 2px black', paddingTop: '60px'}}>Shipping Details</h1>
          <p style={{color: 'white', textShadow: '1px 1px 2px black'}}>
            Shipping typically takes 3-5 business days. Estimated number of business days it takes 
            until you will receive your order after placing it on the website. 
            Business days do not include Saturdays, Sundays, or US holidays. 
            This time includes processing and in-transit time for your order. 
          </p>
          <p style={{color: 'white', textShadow: '1px 1px 2px black'}}>
            For certain extended delivery zip codes, the order may arrive outside of the estimated timeframe. 
          </p>
          <p style={{color: 'white', textShadow: '1px 1px 2px black'}}>
            During holiday periods and certain promotional events, customers can expect an additional 3-5 days of processing time.
          </p>
        </div>
      </section>
      
      <Footer/>

    </body>

  </div>
  );
}