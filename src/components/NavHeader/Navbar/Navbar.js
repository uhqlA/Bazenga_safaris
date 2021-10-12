import React from 'react'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navbar.css'

const Navbar = props => (
    <header className="navbar">
        <nav className= "navbar_navigation">
            <div className="navbar_button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className ="logo"><a href="/">HEALTH SYSTEM</a></div>
            <div className="spacer"/>
            <div className="navbar_navigation_items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>

);
export default Navbar;