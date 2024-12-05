import { useState } from 'react';
import './navbar.css'; // Create this file for styles
import logo from '../../assets/images/logo-DUdXW4nF.png'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
<img className='navbar-logo' src={logo} alt="" />      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li><a href="#home">Home</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#compus">Compus</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <button><a className='btn' href="#contact">Contant us</a></button>
      </ul>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;
