import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>©2023 Yourcompany</span>
        <div className='title'>Landing</div>

        <button className="cta-button">Purchase now</button>
      </div>
      <hr />
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <div className="social-icons">
          <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
          <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
          <a href="https://x.com/?lang=en"><i className="fa fa-twitter"></i></a>
          <a href="https://youtube.com/"><i className="fa fa-youtube"></i></a>
          <a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;