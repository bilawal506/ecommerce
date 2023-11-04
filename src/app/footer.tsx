import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{"marginTop":"40px"}}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Image src="/logo.png" width={276} height={134} alt="Your Company Logo" />
          </div>
          <div className="footer-nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">FAQs</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-info">
            <p>&copy; 2023 <i>Nexova</i></p>
            <p>Contact: Nexova@gmail.com</p>
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>    
          </div>
        </div>
        <div className="footer-subscribe">
          <h4 style={{fontSize:35}}>Subscribe to our newsletter</h4>
          <form>
            <input type="text" id="email" name="email" placeholder="Your Email Address*" style={{color:"black"}}/>
            <input type="submit" value="Subscribe Now" id="subscribe-button" className="center"/> 
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
