import { useEffect, useState } from "react";

import DirtyToClean from "../components/Comparision/DirtyToClean";
import Button from "../components/Global/Button";
import Newsletter from "../components/Global/_newsletter";
import HomePageProducts from "../components/Products/_homepage";
import commerce from "../lib/commerce";

import tom from '../assets/images/tom.png';
import homeCase from '../assets/images/home-case.png';
import blueEco from '../assets/images/blue-eco.png';
import blueFeather from '../assets/images/blue-feather.png';
import blueHeart from '../assets/images/blue-heart.png';
import blueLeaf from '../assets/images/blue-leaf.png';

import '../assets/scss/pages/homepage.scss';

const Home = () => {
  const [ products, setProducts ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    commerce.products.list()
      .then(response => {
        setProducts(response.data.slice(0, 6));
        setLoaded(true);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div id="container">
      <DirtyToClean />

      <div id="jumbotron">
        <span id="jumbotron-title"><span className="light">Voyager sans impact pour l'environnement, </span> c'est possible !</span>
        <a href="/products">
          <Button text="Je découvre les produits" marginTop={ "2em" } />
        </a>
        <span id="jumbotron-summary">
          <span id="header"> Depuis notre création : </span>
          <div id="summary-data">
            <div className="item">
              <span className="number"> 10 256</span>
              <span className="text"> Kilos de déchets qui ont été évités </span>
            </div>
            <div className="item">
              <span className="number"> 60 </span>
              <span className="text"> Personnes qui ont adopté le kit </span>
            </div>
            <div className="item">
              <span className="number"> 6 000 </span>
              <span className="text"> Mètres carrés de littoraux dépollués </span>
            </div>
          </div>
        </span>
      </div>

      <section id="tom-presentation">
        <div id="image">
          <img src={ tom } alt="Tom Frager" />
        </div>
        <div id="text">
          <h2> Une petite trousse avec une grande histoire </h2>
          <p>
            <span id="yellow">
              Tom Frager </span>, surfeur et musicien, voyage à travers le globe
              pour des compétitions de surf, des surf trips, des concerts,
              des missions humanitaires et des projets écologiques.
              <br />
              Fort de ces expériences, il est frappé par le paradoxe de
              l’explosion du <b> tourisme </b> : c'est autant un énorme levier économique
              pour les pays en développement qu’<b>un désastre en terme d’écologie</b>.
          </p>
          <Button text="Je découvre l'histoire de la marque" />
        </div>
      </section>

      <section id="case-presentation">
        <div id="text">
          <h2> La trousse de toilette nomade </h2>
          <span id="info"> Compatible avec notre mode de voyage actuel </span>
          <p>
            <span id="blue"> Bleu bamboo </span> propose une solution d'hygiène de voyage à travers une trousse de toilette
            composée de <b> produits bio, d'ingrédients naturels, made in en France </b> et n'ayant aucun impact
            sur l'environnement.
            <br /><br/>
            Les contenants sont <b> éco-responsables </b> : réutilisables, biodégradable, compostable, voir inexistants.
          </p>
          <Button text="Je remplis ma trousse" />
        </div>
        <div id="image">
          <img src={ homeCase } alt="Trousse de voyage" />
        </div>
        <div id="icons">
          <div>
            <img src={ blueLeaf } alt="Icône bleue de feuille"/>
            <span> Produits 100% naturels </span>
          </div>
          <div>
            <img src={ blueEco } alt="Icône bleue écologique"/>
            <span> Emballages biodégradables </span>
          </div>
          <div>
            <img src={ blueFeather } alt="Icône bleue plume"/>
            <span> Compacte & légère </span>
          </div>
          <div>
            <img src={ blueHeart } alt="Icône bleue coeur"/>
            <span> Pensé avec amour </span>
          </div>
        </div>
      </section>

      <HomePageProducts loaded={ loaded } products={ products } />

      <Newsletter />
    </div>
  );
}

export default Home;
