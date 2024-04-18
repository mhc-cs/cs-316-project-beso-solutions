import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Select from 'react-select';


export default function Page() {

  return (
  <div>
    <body>
      <div className="topnav">

        <Link href="Home">Home</Link>
        <Link href="AboutUs">About Us</Link>
        <Link href="Products">Products</Link>
        <Link href="Shipping">Shipping</Link>
        <Link className="active" href="Sizing">Sizing</Link>

        <Link className="logo-image" href="Home"></Link>

        <Link href="Cart" className="split">Cart</Link>
        <Link href="Sign In" className="split">Sign In</Link>

      </div>

      <section>
        <h1>Sizing Details</h1>
        <p>
            Our sizes will be based on US sizes as per the chart ranging from 00-20.
        </p>
        <p></p>
        <p align="center">26’ inseam 4’11</p>
        <p align="center">27” inseam 5’1</p>
        <p align="center">28” inseam 5’2</p>
        <p align="center">29” inseam 5’3</p>
        <p align="center">30” inseam 5’4</p>

        <table id="sizing">
          <tr>
            <th>Jean Size (W)</th>
            <th>US Misses Size</th>
            <th>International Size</th>
            <th>Waist (inches)</th>
            <th>Hip (inches)</th>
          </tr>
          <tr>
            <td>23</td>
            <td>00</td>
            <td>XXS</td>
            <td>23.5"-24.5"</td>
            <td>33"-34.5"</td>
          </tr>
          <tr>
            <td>24</td>
            <td>0</td>
            <td>XXS</td>
            <td>24.5"-25.5"</td>
            <td>34"-35.5"</td>
          </tr>
          <tr>
            <td>25/26</td>
            <td>2</td>
            <td>XS</td>
            <td>25.5"-27.5"</td>
            <td>34.5"-36.5"</td>
          </tr>
          <tr>
            <td>27</td>
            <td>4</td>
            <td>XS</td>
            <td>27.5"-28.5"</td>
            <td>37"-38.5"</td>
          </tr>
          <tr>
            <td>28</td>
            <td>6</td>
            <td>S</td>
            <td>28.5"-29.5"</td>
            <td>38"-39.5"</td>
          </tr>
          <tr>
            <td>29</td>
            <td>8</td>
            <td>S</td>
            <td>29.5"-30.5"</td>
            <td>39"-40.5"</td>
          </tr>
          <tr>
            <td>30</td>
            <td>10</td>
            <td>M</td>
            <td>30.5"-31.5"</td>
            <td>40"-41.5"</td>
          </tr>
          <tr>
            <td>31</td>
            <td>12</td>
            <td>M</td>
            <td>31.5"-32.5"</td>
            <td>41"-42.5"</td>
          </tr>
          <tr>
            <td>32</td>
            <td>14</td>
            <td>L</td>
            <td>32.5"-33.5"</td>
            <td>42"-43.5"</td>
          </tr>
          <tr>
            <td>33</td>
            <td>16</td>
            <td>L</td>
            <td>33.5"-34.5"</td>
            <td>43"-44.5"</td>
          </tr>
          <tr>
            <td>34</td>
            <td>18</td>
            <td>XL</td>
            <td>34.5"-36.5"</td>
            <td>44.5"-46.5"</td>
          </tr>
          <tr>
            <td>36</td>
            <td>20</td>
            <td>XL</td>
            <td>36.5"-38.5"</td>
            <td>46.5"-48.5"</td>
          </tr>
        </table>
      </section>
      
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