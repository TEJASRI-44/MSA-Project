import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Medical Store</h3>
        <p>Your trusted source for affordable and quality medicines.</p>
        <p>Address: 123 Health Avenue, City, Country</p>
        <p>Contact: +91 9876543210</p>
        <p>Email: support@medicalstore.com</p>
      </div>

      <div className="footer-links">
        <h3>Customer Service</h3>
        <ul>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#returns">Returns</a></li>
          <li><a href="#shipping">Shipping</a></li>
          <li><a href="#support">Contact Support</a></li>
        </ul>
      </div>

      <div className="footer-policy">
        <h3>Policies</h3>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#refund">Refund Policy</a></li>
        </ul>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="payment-icons">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
