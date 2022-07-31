import React, { useState } from "react";
import "./style.css"
import logo from "../../asset/logo.png"
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const {navList, sidebar, toggle} = props
    return (
        <div className="navbar-row">
            
            <Link to={'/'}><img src={logo} alt="My Logo" className="navbar-logo"></img></Link>
            <div className="nav-list">
                {navList.map((item) => (
                    <a href={item.url}>{item.text}</a>
                ))}
                <span onClick={(e) => toggle(e.preventDefault())}>{sidebar ? <GiHamburgerMenu/>: <GrClose/>}</span>
            </div>
            
        </div>
    )
}

export default Navbar;