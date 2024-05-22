import React, { useState } from "react";
import { Link } from 'react-router-dom';
import hamburguesa from '../../../assets/hamburgermenu.png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
    <label htmlFor="menu" onClick={toggleMenu}><img src={hamburguesa} alt="hamburguesa" width={"50px"} /></label>
    <input type="checkbox" id="menu" checked={menuOpen} readOnly />
    <ul className={menuOpen ? "menu-open" : ""} onClick={closeMenu}>
      <li><Link className="letrasnav" to='/'>Home</Link></li>
      <li><Link className="letrasnav" to='/contact'>Contact</Link></li>
      <li><Link className="letrasnav" to='/login'>Login</Link></li>
      <li><Link className="letrasnav" to='/signup'>Signup</Link></li>
    </ul>
  </nav>
  );
};

export default Nav;
