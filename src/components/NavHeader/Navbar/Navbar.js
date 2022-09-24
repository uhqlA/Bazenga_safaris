import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navbar.css'
import Logo from '../../../Images/logo.jpeg'

const Navbar = props => (
    <header className="navbar">
        <nav className= "navbar_navigation">
            <div className="navbar_button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <Router>
            <Link to="/">
            <img className ="logo"
            src={Logo} alt=""
            />
            </Link>
            <span style={{
                color:"orange",
                marginLeft: "5px",
                fontFamily:"Cursive",
                fontWeight:"bold",
                fontSize:"small"
            }}>Over Landing Across Africa </span>
            </Router>

            <div className="spacer"/>
            <div className="navbar_navigation_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/safaris">Safaris</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/bazenga-shop" 
                    style={{
                        color:"orange" , hover:"green" ,
                        marginLeft: "2rem",
                        fontWeight:"bold",
                        fontFamily:"Cursive, Lucida Handwriting",
                        textDecoration:"underline"
                    }} >Bazenga Online Shop</a></li>

                    {/* <button style={{
                        backgroundColor:"green",
                        marginLeft:"4rem",
                        borderRadius:"10px",
                        border: ""
                    }}> Login </button> */}

                    <button className='btn'>Login</button>

                </ul>
            </div>
        </nav>
    </header>

);
export default Navbar;