import DirtyToClean from "../components/Comparision/DirtyToClean";
import Button from "../components/Global/Button";

import '../assets/scss/pages/homepage.scss';

const Home = () => {
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
    </div>
  );
};

export default Home;
