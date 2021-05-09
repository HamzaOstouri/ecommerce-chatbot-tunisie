import React, { Component } from 'react'  
// import { Link } from 'react-router-dom';  
import './Footer.css'
// class Footer extends Component {  
function Footer(){
    // render() {  
        return (  
            
        <div className="footer">
        <div className="footer__left">
            <a href="https://www.amazon.com/stores/page/B6471A4E-C2FA-415C-B031-3B14162F2885">
            <h2>Connaitre plus</h2>
            </a>
            <h3>Careers</h3>
            <h3>Blog</h3>
            <h3>About Amazon</h3>
            <h3>Investor Relations</h3>
            <h3>Amazon Devices</h3>
            <h3>Amazon Tours</h3>
        </div>
        <div className="footer__middle">
            <h2>Make Money with Us</h2>
            <h3>Sell products on Amazon</h3>
            <h3>Sell apps on Amazon</h3>
            <h3>Become an Affiliate</h3>
            <h3>Advertise Your Products</h3>
            <h3>Self-Publish with Us</h3>
            <h3>Host an Amazon Hub</h3>
            <h3>See More Make Money with Us</h3>
        </div>
        <div className="footer__right">
            <h2>Amazon Payment Products</h2>
            <h3>Amazon Business Card</h3>
            <h3>Shop with Points</h3>
            <h3>Reload Your Balance</h3>
            <h3>Amazon Currency Converter</h3>
        </div>

       
        </div>
    );
        
}  
  
export default Footer