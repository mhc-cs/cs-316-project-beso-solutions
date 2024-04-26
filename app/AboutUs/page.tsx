import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Select from 'react-select';
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";

function CartButton({}) {
  return (
    <button>
      <img src="data:images/png-clipart-bird-logo-bird-animals-logo-thumbnail.jpeg"/>
    </button>
  );
}

export default function Page() {

  return (
  <div>
    <body className="product-bg">
      <Topnav setActiveLink="about"/>

      <section>
        <h1 style={{ color: 'white' }}>About Us</h1>
        <div className="row">
          <div className="column2">
            <p style={{ color: 'white' }}>MISSI is a premier US clothing brand dedicated to catering to petite women with 
              heights ranging from 4’11 to 5’4. Specializing in various denim styles meticulously 
              crafted to perfectly complement petite frames, our garments are designed with 
              precision and passion. We take pride in sourcing high-quality materials and 
              manufacturing our products with care, ensuring exceptional quality and fit. While 
              our roots may extend to China for production, our commitment to providing petite women 
              with fashionable and flattering clothing knows no bounds.
            </p>
          </div>
          <div className="column2">
            <Image src="/images/Missi.jpg" alt="MISSI" width={500} height={500} />
          </div>
        </div>
      </section>
      
      <Footer/>

    </body>

  </div>
  );
}