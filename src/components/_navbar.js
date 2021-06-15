import logo from '../assets/images/rounded-logo.png';
import cart from '../assets/images/svg/user.svg';
import user from '../assets/images/svg/cart.svg';

import '../assets/scss/_navbar.scss';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="navbar-logo">
        <a href="#">
          <img src={ logo } alt="Bleu Bamboo"/>
        </a>
      </div>
      <div id="navbar-container">
        <div className="navbar-content">
          <ul>
            <li><a href="#"> Mes bons produits </a></li>
            <li><a href="#"> À propos de nous </a></li>
            <li><a href="#"> Contact </a></li>
          </ul>
        </div>
        <div className="navbar-content">
          <ul>
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
