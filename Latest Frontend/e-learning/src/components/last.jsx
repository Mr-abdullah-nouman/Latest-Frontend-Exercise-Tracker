// This is the footer component
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4 text-center ">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3">
          <h4>About us</h4>
          <p>We are a passionate team dedicated to helping you achieve your fitness goals.</p>
        </div>
        <div className="col-md-4 mb-3">
          <h4>Contact</h4>
          <p>Email: info@fitnessapp.com</p>
          <p>Phone: +92 (555) 555-5555</p>
        </div>
        <div className="col-md-4 mb-3">
          <h4>Follow Us</h4>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-twitter"></i>
                Twitter
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-facebook"></i>
                Facebook
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-instagram"></i>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-muted small text-center mb-0">
      &copy; Fitness App 2023. All rights reserved.
    </div>
  </footer>
  
  );
};

export default Footer;

