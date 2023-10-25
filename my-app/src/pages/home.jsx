import React from "react";
import Navbar from "../components/navbar/navbar";
import Landmain from '../components/Landing/landing';
import Product from '../components/products/products'
import Footer from '../components/footer/footer';
export default function home() {
    return (
        <div>
            <Navbar />
            <Landmain />
            <Product/>
            <Footer/>
        </div>
    );
}