import React, { useState } from "react";
import { Link } from 'react-router-dom';
import hamburguesa from '../../../assets/burger-icon2.png';
import logobeyond from '../../../assets/logo.png'
import perfilIcon from '../../../assets/perfil.png'

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

      <a href="/" className="logo-anchor">
        <img className='logo' src={logobeyond} alt="logo"></img>
      </a>

      <label htmlFor="menu" onClick={toggleMenu}><img src={hamburguesa} alt="hamburguesa" width={"50px"} /></label>
      <input type="checkbox" id="menu" checked={menuOpen} readOnly />
      <ul className={menuOpen ? "menu-open" : ""} onClick={closeMenu}>
        <li><Link className="letrasnav" to='/'>Home</Link></li>
        <li><Link className="letrasnav" to='/contact'>Contact</Link></li>
        <li><Link className="letrasnav" to='/login'>Login</Link></li>
        <li>
          <Link className="letras-nav-icon" to='/dashboard/user'>
            <article className="perfil-btn">
              <img src={perfilIcon} alt="Perfil" className="perfil-icon" />
            </article>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;





