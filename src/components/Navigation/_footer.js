import leaf from '../../assets/images/svg/leaf.svg';
import lock from '../../assets/images/svg/lock.svg';
import love from '../../assets/images/svg/love.svg';
import natural from '../../assets/images/svg/natural.svg';
import truck from '../../assets/images/svg/truck.svg';
import facebook from '../../assets/images/svg/facebook.svg';
import instagram from '../../assets/images/svg/instagram.svg';
import bio from '../../assets/images/svg/cosmetique-bio.svg';
import ecocert from '../../assets/images/svg/ecocert.svg';
import fortheplanet from '../../assets/images/fortheplanet.png';

import '../../assets/scss/global/_footer.scss';
import PaymentIcons from "../Checkout/PaymentIcons";

const Footer = () => {
    return (
        <footer>
            <div id="cta-container">
                <div>
                    <img src={ natural } alt="Icône éco-responsable"/>
                    <span> Produits 100% naturels </span>
                </div>
                <div>
                    <img src={ leaf } alt="Icône feuille"/>
                    <span> Emballages biodégradables </span>
                </div>
                <div>
                    <img src={ love } alt="Icône coeur"/>
                    <span> Pensé avec amour </span>
                </div>
                <div>
                    <img src={ lock } alt="Icône cadenas"/>
                    <span> Paiement sécurisé </span>
                </div>
                <div>
                    <img src={ truck } alt="Icône camion"/>
                    <span> Livraison adaptée </span>
                </div>
            </div>
            <div id="footer-items">
                <div className="footer-item">
                    <span className="footer-item-header"> Nous </span>
                    <a href="/"> Notre histoire </a>
                    <a href="/"> Nos valeurs </a>
                    <a href="/"> Mes bons produits  </a>
                </div>
                <div className="footer-item">
                    <span className="footer-item-header"> Nos services </span>
                    <a href="/"> FAQ </a>
                    <a href="/"> Livraisons et retours </a>
                    <a href="/"> Nous contacter  </a>
                </div>
                <div className="footer-item">
                    <span className="footer-item-header"> Paiement </span>
                    <span> <PaymentIcons /> </span>
                    <span> Langue :  <b> FR </b></span>
                </div>
                <div className="footer-item">
                    <span className="footer-item-header"> Suivez nous </span>
                    <div id="footer-socials">
                        <a href="/"><img src={ instagram } alt="Instagram"/></a>
                        <a href="/"><img src={ facebook } alt="Facebook"/></a>
                    </div>
                    <div id="footer-brands">
                        <img src={ bio } alt="Bio"/>
                        <img src={ ecocert } alt="Eco Cert"/>
                        <img src={ fortheplanet } alt="1% for the planet"/>
                    </div>
                </div>
            </div>
            <div id="footer-links">
                <a href="/"> Conditions des offres </a>
                <a href="/"> Politique de confidentialité </a>
                <a href="/"> CGV </a>
                <a href="/"> CG d'évaluations des produits </a>
                <a href="/"> Cookies </a>
            </div>
            <div id="footer-hr"></div>
        </footer>
    );
}

export default Footer;
