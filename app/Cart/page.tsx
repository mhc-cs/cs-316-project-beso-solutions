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



<link rel="stylesheet" href="../font-awesome-4.7.0/css/font-awesome.min.css"/>

export default function Page() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        getCartItems();
      });

    const getCartItems = async() => {
        console.log("ITEMS")
            const paramsQ = new URLSearchParams();
            paramsQ.append('userID',"currUser")
            await axios.get('http://cs-vm-06.cs.mtholyoke.edu:31600/api/cart/items', { params: paramsQ })
            .then((response) => {;
                // console.log(response.data);
                setCartItems(response.data)
                console.log(cartItems)
            })
            
    }

    const totalPrice = () => {
        try {
          let total = 0;
          cartItems?.map((p) => {
                p.items.map((item) => {
            total = total + item.price;
                })
          });
          return total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
        } catch (error) {
          console.log(error);
        }
      };

    const checkOut = async() => {
        console.log("ITEMS")
            await axios.post('http://cs-vm-06.cs.mtholyoke.edu:31600/api/cart/checkout', {
                userID: "currUser",
            }).then((response) => {;
                console.log(response);
            })
    }

    return (
        <div>
            <header><Topnav setActiveLink="cart"/></header>
            <body>
                <h2>Checkout Form</h2>
                <p></p>
                
                <div className='cart-row'>
                    <div className='col-75'>
                        <div className='cart-container'>
                            <form action="/action_page.php">

                                <div className="cart-row">
                                    <div className="col-50">
                                        <h3>Billing Address</h3>

                                        <label id="fname"><span className="fa fa-user"></span>Full Name</label>
                                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
                                        
                                        <label id="email">Email</label>
                                        <input type="text" id="email" name="email" placeholder="john@example.com"></input>
                                        
                                        <label id="adr">Address</label>
                                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>

                                        <label id="city">City</label>
                                        <input type="text" id="city" name="city" placeholder="New York"></input>

                                        <div className="cart-row">
                                            <div className="col-50">
                                                <label id="state">State</label>
                                                <input type="text" id="state" name="state" placeholder="NY"></input>
                                            </div>
                                            <div className="col-50">
                                                <label id="zip">Zip</label>
                                                <input type="text" id="zip" name="zip" placeholder="10001"></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-50">
                                        <h3>Payment</h3>

                                        <label id="cname">Name on Card</label>
                                        <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                                        
                                        <label id="ccnum">Credit card number</label>
                                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                                        
                                        <label id="expmonth">Exp Month</label>
                                        <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>

                                        <div className="cart-row">
                                            <div className="col-50">
                                                <label id="expyear">Exp Year</label>
                                                <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                                            </div>
                                            <div className="col-50">
                                                <label id="cvv">CVV</label>
                                                <input type="text" id="cvv" name="cvv" placeholder="352"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <input type="submit" value="Continue to checkout" className="btn"></input>
                            </form>
                        </div>
                    </div>
                    <div className="col-25">
                        <div className="cart-container">
                            <h4>Cart <span className="price" style={{color:'black'}}> <b>{cartItems?.length}</b></span></h4>
                            
                            <div className="col-md-7  p-0 m-0">
                            {cartItems?.map((p) => (
                                p.items.map((item) => (
                                    <div className="row card flex-row" key={item._id}>
                                <div className="col-md-4">
                                    <p>{item.name}</p>
                                    <p>Price : {item.price}</p>
                                </div>
                                </div>
                            ))    
                        ))}
                            </div>
                            
                            <hr></hr>
                            <p>Total <span className="price" style={{color:"black"}}><b>{totalPrice()}</b></span></p>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}