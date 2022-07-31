import React from "react";
import './style.css'
import logo from "../../asset/logo.png"
import { Link } from "react-router-dom";

const Footer = (props) => {
    const {navList, info, iconFooter} = props;

    return ( 
        <div className="footer">
            <div className="info">
                {info.map((item) => (
                    <>
                        <p>{item.alamat}</p>
                        <p>{item.email}</p>
                        <p>{item.nomor}</p>
                    </>
                ))}     
            </div>
            <div className="nav-footer">
                {navList.map((item) => (
                    <a href={item.url}>{item.text}</a>
                ))}
            </div>
            <div className="icons">
                <h4>Connect With Us</h4>
                {iconFooter.map((url) => (
                    <img src={url} alt="icon"></img>
                ))}
            </div>
            <div className="copyright">
                <h4>Copyright Binar 2022</h4>
                <Link to={'/'}><img src={logo} alt="logo"></img></Link>
            </div>
        </div>
     );
}
 
export default Footer;