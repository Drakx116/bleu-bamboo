import notfound from '../assets/images/notfound.png';

import '../assets/scss/pages/not-found.scss';
import Button from "../components/Global/Button";

const NotFound = () => {
  return (
    <div className="container">
      <span id="not-found-span"> Oups, mauvaise destination </span>
      <h1 id="not-found-title"> Erreur 404 </h1>

      <div id="not-found-content">
        <div id="illustration">
          <img src={ notfound } alt="Image Erreur 404" />
        </div>

        <div id="text-content">
          <span>
            Désolé, il semblerait que cette page soit introuvable. <br />
            Cliquez sur le bouton ci-dessous pour retourner en lieu sûr
          </span>
          <a href="/"><Button text="Retour à l'accueil" /></a>

          <span> Ou contactez nous en cas de question </span>

          <Button text="Nous contacter" />
        </div>
      </div>

    </div>
  );
};

export default NotFound;
