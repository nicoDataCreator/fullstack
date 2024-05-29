import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import hamburguesa from '../../../assets/burger-icon2.png';
import logobeyond from '../../../assets/logo.png'
import perfilIcon from '../../../assets/perfil.png'
import { UserLogged } from "../../../context/UserLogged"

const Nav = () => {
  const { user } = useContext(UserLogged);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  let profileLink = '/login';
  if (user) {
    if (user.roles === 'admin') {
      profileLink = '/dashboard/admin';
    } else if (user.roles === 'user') {
      profileLink = '/dashboard/user';
    }
  }

  const loginLogoutLink = user ? 'http://localhost:3000/api/logout' : '/login';
  const loginLogoutText = user ? 'Logout' : 'Login';

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
        <li><Link className="letrasnav" to={loginLogoutLink}>{loginLogoutText}</Link></li>
        <li>
          <Link className="letras-nav-icon" to={profileLink}>
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





