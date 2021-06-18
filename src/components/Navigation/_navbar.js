import { useState } from "react";

import { toggle, handleResize } from "../../assets/js/navbar";

import logo from '../../assets/images/rounded-logo.png';
import cart from '../../assets/images/svg/cart.svg';
import close from '../../assets/images/svg/close.svg';
import hamburger from '../../assets/images/svg/hamburger.svg';
import heart from '../../assets/images/svg/heart.svg';
import user from '../../assets/images/svg/user.svg';

import '../../assets/scss/_navbar.scss';

const Navbar = () => {
  window.onresize = () => {
    if (handleResize(isOpened)) {
      setOpened(false);
    }
  }

  const [ isOpened, setOpened ] = useState(false);

  const toggleNavbar = () => {
    toggle(isOpened);

    return setOpened(!isOpened);
  }

  return (
    <nav id="navbar">
      <div id="navbar-logo">
        <a href="/">
          <img src={ logo } alt="Bleu Bamboo"/>
        </a>
        <span className="navbar-action" id="opened" onClick={ () => toggleNavbar() }>
          <span id="hamburger-label"> Menu </span>
          <img className="navbar-toggle" id="hamburger" src={ hamburger } alt=""/>
        </span>
        <span className="navbar-action" id="closed" onClick={ () =>  toggleNavbar() }>
          <img className="navbar-toggle" id="arrow-close" src={ close } alt=""/>
        </span>
      </div>
      <div id="navbar-container">
        <div className="navbar-content">
          <ul>
            <li><a href="/products"> Mes bons produits </a></li>
            <li><a href="#"> À propos de nous </a></li>
            <li><a href="#"> Contact </a></li>
          </ul>
        </div>
        <div className="navbar-content">
          <ul>
            <li>
              <a href="#">
                <img src={ heart } alt="Wishlist"/>
                <span> Wishlist </span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={ cart } alt="Icône panier"/>
                <span> Mes achats </span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={ user } alt="Icône utilisateur"/>
                <span> Mon compte </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
