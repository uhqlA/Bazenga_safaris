import React from "react";
import "./SideDrawer.css";

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
                color:"blue",
                fontWeight:"bold",
                fontFamily:"Cursive",
                fontSize:'small'
                }} >Bazenga Online Shop</a></li>

           <li><a href="/login"> 
            <button style={{
                        backgroundColor:"green",
                        borderRadius:"10px"
                    }}> Login </button>  </a></li>

        </ul>
    </nav>
    )
};

export default sideDrawer;