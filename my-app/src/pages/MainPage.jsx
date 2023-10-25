import React from "react";
import Navbarm from "../components/MainPagenav/mainpagenav";
import Landmain from '../components/Landing/landing';
import Product from '../components/products/products'
import Footer from '../components/footer/footer';
export default function home() {
    return (
        <div>
            <Navbarm />
            <Landmain />
            <Product/>
            <Footer/>
        </div>
    );
}