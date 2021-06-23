import animals from '../assets/images/sea-animals.png';
import crosses from '../assets/images/crosses.png';
import eye from '../assets/images/eye.png';
import home from '../assets/images/home.png';
import storyCase from '../assets/images/story-case.png';
import surfer from '../assets/images/surfer.png';

import '../assets/scss/pages/story.scss';
import Button from "../components/Global/Button";

const Story = () => {
  return (
    <div className="container">
      <div id="above-container">
        <div id="above-content">
          <section className="above-section">
            <h2> TOM </h2>
            <p> Je suis né au Sénégal, puis j’ai grandi à Bamako au Mali.
              C’est à l’âge de 12 ans qu’avec ma famille on a traversé l’Atlantique
              pour atterrir en Guadeloupe pour suivre la carrière de mon père.
              Il bossait dans les énergies renouvelables.
            </p>
          </section>
          <section className="above-section">
            <h2><img id="crosses" src={ crosses } alt="" /></h2>
            <p> Mon père a commencé par installer des pompes à eau dans des villages africains.
              Et puis il s’est dirigé vers les énergies renouvelables comme le solaire et l’éolien.
              La nature du métier de mon père nous a permis, à moi et ma famille,
              dès le plus jeune âge d’être sensibilisés au respect de l’environnement
              et à la préservation des ressources comme l’eau et l’électricité.
            </p>
          </section>
          <section className="above-section">
            <h2>
              <img id="eye" src={ eye } alt=""/>
              Le déclic
            </h2>
            <p> Durant mes nombreux voyages à travers le globe, pour des compétitions de surf,
              des concerts, des missions humanitaires ou des projets écologiques.
            <br /> <br />
             J’ai été frappé par le paradoxe de <b> l’explosion du tourisme </b> : qui est autant un énorme levier économique
              pour les pays en développement qu’<b>un désastre en terme d’écologie</b>.
            </p>
          </section>
        </div>
        <div id="above-footer">
          <img id="surfer" src={ surfer } alt=""/>
          <img id="home" src={ home } alt=""/>
        </div>
      </div>
      <div id="bottom-container">
        <section id="bottom-section">
          <div id="bottom-section-content">
            <div id="illustration">
              <img id="image" src={ animals} alt=""/>
            </div>
            <div id="text">
              <p>
                En effet, la plupart des  <b> voyageurs transportent avec eux depuis leur pays d'origine </b>
                une trousse de toilette contenant des produits cosmétiques dont les contenants
                une fois <b> sont jetés dans le pays de destination</b>.
                <br/><br/>
                Même si le recyclage est de plus en plus développé et efficace,
                <b> beaucoup de pays n'ont pas encore de solution de recyclage pérenne</b>.
                <br/><br/>
                Au delà de ses ingrédients nocifs, le flacon de shampoing d'un touriste français
                jeté dans le lodge d'un village reculé d'Asie, a de très fortes chances de se retrouver dans l'océan,
                ce qui a bien entendu <b> des effets très néfastes sur la faune et la flore marine sous-marine</b>.
              </p>
            </div>
          </div>

          <span> Alors je me suis demandé comment on pouvait changer ça, ensemble. </span>
        </section>
      </div>
      <div id="landing-section">
        <div id="landing-section-content">
          <div id="text">
            <span id="title"> Comment voyager responsablement à son échelle ?  </span>
            <p>
              Bleu bamboo souhaite équiper les voyageurs par une  trousse de toilette
              composée de produits bio, d'ingrédients naturels, tous fabriqués en France et
              n'ayant aucun impact sur l'environnement et dont les contenants seraient quant à eux
              éco-responsables : réutilisables, biodégradable, compostable, voir inexistants.
              <br/><br/>
              Cette trousse de toilette nomade serait compatible avec notre mode de voyage actuel :
              compacte, légère et moderne.
            </p>
            <div id="cta">
              <Button text="Je remplis ma trousse" />
            </div>
          </div>
          <div id="illustration">
            <img src={ storyCase } alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
