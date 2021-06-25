import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

import commerce from "../lib/commerce";

import Loading from "../components/Global/Loading";
import Button from "../components/Global/Button";

import comb from '../assets/images/comb.png';
import products from '../assets/images/product.jpg';
import shampoo from '../assets/images/shampoo.png';
import sea from '../assets/images/sea.jpg';
import truck from '../assets/images/svg/truck.svg';

import cosmetic from '../assets/images/svg/cosmetique-bio.svg';
import ecocert from '../assets/images/svg/ecocert.svg';
import percent from '../assets/images/fortheplanet.png';

import '../assets/scss/pages/single-product.scss';

const SingleProduct = () => {
  const { slug } = useParams();
  const [ loaded, setLoaded ] = useState(false);
  const [ product, setProduct ] = useState({});

  useEffect(() => {
    commerce.products.retrieve(slug, { type: 'permalink' })
      .then(response => {
        setProduct(response);
        setLoaded(true);
      })
      .catch(error => console.log(error));
  }, [ slug ]);

  const Product = () => {
    const image = product.media.source;

    return (
      <div className="container">
        <div id="single-product">
          <div id="product-preview">
            <img src={ image } alt={ product.name } />
            <div id="product-face">
              <button className="active"> Face </button> ~ <button> Dos </button>
            </div>
            <div id="product-shipping">
              <span id="price"> 5.00€ </span>
              <div id="quantity">
                <button disabled> - </button>
                <span> 1 </span>
                <button> + </button>
              </div>
            </div>

            <Button text="J'ajoute à ma trousse" marginTop="1em" />
            <span id="product-engagement"> 1 € sera reversé à <span id="percent"> 1% for the planet </span> </span>
          </div>

          <div id="product-container">
            <div id="product-content">
              <div id="product-heading">
                <h1> { product.name } </h1>
                <div className="hr"> </div>
                <q> Elle me suit, à chaque voyage loin d’ici ... ♫ </q>

                <div id="shipping-details">
                  <img src={ truck } alt="Icône Camion"/>
                  <span> Livraison sous 3 à 5 jours ouvrés </span>
                  <a href="/"> Détails de la livraison </a>
                  <Button type="info" text="J'ajoute à ma wishlist" marginTop={ "2em" } />
                </div>
              </div>

              <img className="illustration" src={ products } alt="Illustration Produit"/>

              <section id="product-origin">
                <h2> L'origine </h2>
                { parse(product.description) }
              </section>

              <section>
                <h2> Le résultat </h2>
                <p> Des eaux moins polluées, un moindre impact sur l’environnement, un geste pour notre mère nature. </p>
              </section>

              <img className="illustration" src={ sea } alt="Illustration Mer"/>

              <section id="section-about">
                <div id="branding">
                  <span id="eco"><span id="percentage"> 100% </span> éco </span>
                  <div id="labels">
                    <img src={ cosmetic } alt="Icône Bio"/>
                    <img src={ ecocert } alt="Icône Ecocert"/>
                    <img src={ percent } alt="Icône 1% For The Planet"/>
                  </div>
                </div>
                <div id="composition">
                  <div className="part">
                    <span id="heading"> Fabrication </span>
                    <span id="data"> France </span>
                  </div>
                  <div className="part">
                    <span id="heading"> Matières </span>
                    <span id="data">
                    <ul>
                      <li> Bambou </li>
                      <li> Caoutchouc Naturel </li>
                    </ul>
                  </span>
                  </div>
                  <div className="part">
                    <span id="heading"> Impact Environnemental</span>
                    <span id="data"> 0.02G CO2</span>
                  </div>
                  <div className="part">
                    <span id="heading"> Responsable </span>
                    <span id="data"> 100% Recyclable </span>
                  </div>
                </div>
              </section>

              <section>
                <h2> Les inséparables </h2>
                <p> Ensemble c’est mieux
                  Une brosse, un peigne et du shampoing solide... Le trio parfait pour une chevelure soignée. </p>
                <div id="related-products">
                  <div className="product">
                    <img src={ comb } alt="Peigne"/>
                    <a href="/products/bamboo-comb"> Peigne en bamboo </a>
                    <span id="price"> 5.00€ </span>
                  </div>
                  <div className="product">
                    <img src={ shampoo } alt="Shampoing solide"/>
                    <a href="/products/solid-shampoo"> Shampoing solide </a>
                    <span id="price"> 5.00€ </span>
                  </div>
                </div>
              </section>

              <section>
                <h2> Les avis </h2>
                <p> Aucun avis pour le moment. </p>
              </section>
            </div>
          </div>

          <div className="footer"> </div>
        </div>
      </div>
    );
  };

  return loaded ? <Product /> : <Loading />;
}

export default SingleProduct;
