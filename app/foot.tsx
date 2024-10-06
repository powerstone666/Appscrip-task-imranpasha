'use client';
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-top']}>
        <h3>Be the first to know</h3>
        <p>Sign up for updates from mettā muse.</p>
        <div className={styles['contact-info']}>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
        <div className={styles['email-subscribe']}>
          <input type="email" placeholder="Enter your e-mail..." />
          <button>Subscribe</button>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <div className={styles['footer-section']}>
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Orders & Shipping</li>
            <li>Stories</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
          </ul>
        </div>
        <div className={styles['footer-section']}>
          <h4>Quick Links</h4>
          <ul>
            <li>Return & Refunds</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles['footer-section']}>
          <h4>Currency</h4>
          <p>USD</p>
          <p>Transactions will be completed in Euros.</p>
        </div>
      </div>

      <div className={styles['footer-legal']}>
        <p>&copy; 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
