import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import MenuSize from './MenuSize';
import MenuCategory from './MenuCategory';
import MenuInseam from './MenuInseam';
import MenuColor from './MenuColor';
import Select from 'react-select';
import ProductList from './ProductList';
import Footer from "./Footer";
import Topnav from "./TopnavProduct"
import test from "node:test";
import { BrowserRouter as Routers, Routes , Route, Navigate } from 'react-router-dom';
 

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Login(){

    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const[emailError, setEmailError] = useState("")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const[passwordError,setPasswordError]= useState("")
    // const navigate = useNavigate();

    const onButtonClick = () =>{
        setEmailError("")
        setPasswordError("")

        if("" === email){
            setEmailError("Please enter your email")
            return
        }

        if("" === password){
            setPasswordError("Please enter a password")
            return
        }
        if(password.length<7){
            setPasswordError("password must be 8 character or longer")
            return
        }

        if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
            setEmailError("please enter a valid email address")
            return
        }
    
        if(email){
            return <Navigate to='/Home'/>
        }else{
            return <Navigate to='/Login'/>
        }
        

    }

    return(
        <div className="login-box">
        <h2>Sign In</h2>
        <form>
            <div className="user-box">
                <input value={email} placeholder='Enter email address here' onChange={ev=> setEmail(ev.target.value)} className={"user-box"}/>
                <label className='errorLabel'>{emailError}</label>
            </div>
            <div className="user-box">
                <input value={password} placeholder='Enter password here' onChange={ev=>setPassword(ev.target.value)} className={'user-box'}/>
                <label className='errorLabel'>{passwordError}</label>
            </div>
            <input onClick={onButtonClick} className={"inputButton"} type="button" value={"Submit"}/>
        </form>
        </div>     
                
    )
}

export default Login