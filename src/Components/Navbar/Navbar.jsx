import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const Navbar = () => {
    const [language, setLanguage] = useState('EN'); // Set default language to English

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-2 fw-bold">
            <div className="container-fluid">
                <Link className="navbar-brand ps-md-5" to="/">
                    <img src="/mainLogo.jpg" alt="Logo" style={{ height: '55px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav fs-5">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/about">ABOUT US</Link>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <Link className="nav-link dropdown-toggle" to="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                SERVICES
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <li><Link className="dropdown-item" to="/services/business">Business Services</Link></li>
                                <li><Link className="dropdown-item" to="/services/immigration">Immigration Services</Link></li>
                                <li><Link className="dropdown-item" to="/services/invest">Invest in Hungary</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/contact">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
