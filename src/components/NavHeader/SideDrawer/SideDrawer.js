import React from "react";
import "./SideDrawer.css";
import { Button } from '@mui/material';

const sideDrawer = props =>{
    let drawerClasses = ['side-drawer'];
    if(props.show) {
        drawerClasses = ['side-drawer open'];
    }
    return(

    <nav className={drawerClasses}>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/safaris">Safaris</a></li>
        <li><a href="/service">Service</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
        <li className="shop"><a href="/bazenga-shop" 
            style={{
                color:"orange",
                fontWeight:"bold",
                fontFamily:"Cursive",
                textDecoration:"underline",
                fontSize:'large'
                }} >Bazenga Online Shop</a></li>

          
           <Button variant="contained"
           style={{
            margin:"10px",
            padding:"4px",
            width:"50%",
            marginLeft: "2rem"
           }}>Login</Button>

        </ul>
    </nav>
    )
};

export default sideDrawer;