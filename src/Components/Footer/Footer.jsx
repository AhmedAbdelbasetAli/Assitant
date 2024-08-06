// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white pt-3 pb-3 footer">
      <div className="row p-3">
        <div className="col mb-4">
          <h3>CONTACT US</h3>
          <p><strong>Phone:</strong> +36-70-742-8038</p>
          <p><strong>Email:</strong> info@assistant.hu</p>
          <p><strong>Office Hours:</strong> Monday–Friday, 9am–5pm CET</p>
          <p><strong>Address:</strong> Budapest, Akácfa u. 25, 1072</p>
        </div>
        <div className="col mb-4">
          <h3>BUSINESS SERVICES</h3>
          <ul className="list-unstyled">
            <li><p><Link to="/services/business#company-formation" className="footer-link">Company Formation</Link></p></li>
            <li><p><Link to="/services/business#accounting-finance" className="footer-link">Accounting and Finance</Link></p></li>
            <li><p><Link to="/services/business#virtual-office" className="footer-link">Virtual Office</Link></p></li>
            <li><p><Link to="/services/business#business-planning" className="footer-link">Business Planning</Link></p></li>
            <li><p><Link to="/services/business#business-solutions" className="footer-link">Business Solutions</Link></p></li>
          </ul>
        </div>
        <div className="col mb-4">
          <h3>IMMIGRATION SERVICES</h3>
          <ul className="list-unstyled">
            <li><p><Link to="/services/immigration#residence-permit" className="footer-link">Residence Permit</Link></p></li>
            <li><p><Link to="/services/immigration#business-immigration" className="footer-link">Business Immigration</Link></p></li>
            <li><p><Link to="/services/immigration#golden-visa" className="footer-link">Golden Visa</Link></p></li>
            <li><p><Link to="/services/immigration#investment-immigration" className="footer-link">Hungarian Investment Immigration Program</Link></p></li>
            <li><p><Link to="/services/immigration#work-permit" className="footer-link">Work Permit</Link></p></li>
            <li><p><Link to="/services/immigration#family-visas" className="footer-link">Family Visas</Link></p></li>
            <li><p><Link to="/services/immigration#citizenship" className="footer-link">Hungarian Citizenship</Link></p></li>
          </ul>
        </div>
        <div className="col mb-4">
          <h3>INVEST IN HUNGARY</h3>
          <ul className="list-unstyled">
            <li><p><Link to="/services/invest#franchise-opportunities" className="footer-link">Franchise Opportunities</Link></p></li>
            <li><p><Link to="/services/invest#real-estate-residence-program" className="footer-link">Real Estate Residence Program (RERP)</Link></p></li>
            <li><p><Link to="/services/invest#property-investment" className="footer-link">Property Investment</Link></p></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
