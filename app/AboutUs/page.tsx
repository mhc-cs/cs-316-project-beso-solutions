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
    <body className="aboutUs-bg">
      <Topnav setActiveLink="about"/>

      <section className="container">
        <div className="textBlock">
          <h1 style={{color: 'white', textShadow: '1px 1px 2px black', paddingTop: '60px'}}>About Us</h1>
          <p style={{color: 'white', textShadow: '1px 1px 2px black'}}>
          MISSI is a premier US clothing brand dedicated to catering to petite women with 
              heights ranging from 4’11 to 5’4. Specializing in various denim styles meticulously 
              crafted to perfectly complement petite frames, our garments are designed with 
              precision and passion. We take pride in sourcing high-quality materials and 
              manufacturing our products with care, ensuring exceptional quality and fit. While 
              our roots may extend to China for production, our commitment to providing petite women 
              with fashionable and flattering clothing knows no bounds. 
          </p>
          <p style={{color: 'white', textShadow: '1px 1px 2px black'}}>
            For certain extended delivery zip codes, the order may arrive outside of the estimated timeframe. 
          </p>
          <p style={{color: 'white', textShadow: '1px 1px 2px black'}}>
            During holiday periods and certain promotional events, customers can expect an additional 3-5 days of processing time.
          </p>
        </div>
      </section>

      {/*<section>
        <h1 style={{ color: 'black', paddingTop:'75px'}}>About Us</h1>
        <div className="row">
          <div className="column2">
            <p style={{ color: 'black' }}>MISSI is a premier US clothing brand dedicated to catering to petite women with 
              heights ranging from 4’11 to 5’4. Specializing in various denim styles meticulously 
              crafted to perfectly complement petite frames, our garments are designed with 
              precision and passion. We take pride in sourcing high-quality materials and 
              manufacturing our products with care, ensuring exceptional quality and fit. While 
              our roots may extend to China for production, our commitment to providing petite women 
              with fashionable and flattering clothing knows no bounds.
            </p>
          </div>
          <div className="column2">
            <Image src="/images/Banner.jpg" alt="MISSI" width={500} height={500} />
          </div>
        </div>
      </section>*/}
      
      <Footer/>

    </body>

  </div>
  );
}