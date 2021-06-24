import travelCase from '../../assets/images/case.png';
import facebook from '../../assets/images/svg/facebook.svg';
import instagram from '../../assets/images/svg/instagram.svg';

import '../../assets/scss/global/_newsletter.scss';

const Newsletter = () => {
  return (
    <div id="newsletter">
      <div id="registration">
        <p>
          Envie de suivre les nouveautés, des tips, des articles intéressants ?
          Venez surfer sur <b> nos réseaux </b> pour mieux nous connaître !
        </p>
        <div id="socials">
          <img src={ instagram } alt="Icône Instagram"/>
          <img src={ facebook } alt="Icône Facebook"/>
        </div>
        <span id="advice">
          Si vous n’en avez pas, abonnez vous à notre Newsletter, et pensez à supprimer vos emails,
          c’est bon pour la planète !
        </span>
        <form id="newsletter-form" action="/" onSubmit={ e => e.preventDefault() }>
          <label htmlFor="email">
            <span> Email </span>
            <input id="email" type="email" placeholder="Mon adresse email" />
          </label>

          <input type="submit" value="Je m'inscris" />
        </form>
        <p>
          Envie de suivre les nouveautés ? Avoir des tips et des articles intéressants ?
          Toutes les deux semaines, vous recevrez un email contenant tout ce dont vous avez besoin
          pour rester au courant de nos nouveautés.
        </p>
      </div>
      <div id="visual">
        <img src={ travelCase } alt="Image trousse de voyage" />
        <div id="text">
          <span id="gift"> Une trousse est <span id="blue"> offerte </span> </span>
          <span id="price"> à partir de 20€ d'achat </span>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
