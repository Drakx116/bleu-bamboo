import travelCase from '../../assets/images/case.png';

import '../../assets/scss/global/_newsletter.scss';

const Newsletter = () => {
  return (
    <div id="newsletter">
      <div id="registration">
        <span id="heading"> Inscription à la Newsletter </span>
        <p>
          Envie de suivre les nouveautés ?
          Avoir des tips et des articles intéressants ?
          Toutes les deux semaines, vous recevrez un email
          contenant tout ce dont vous avez besoin
          pour rester au courant de nos nouveautés.
        </p>
        <form id="newsletter-form" action="/" onSubmit={ e => e.preventDefault() }>
          <label htmlFor="email">
            <span> Email </span>
            <input id="email" type="email" placeholder="Mon adresse email" />
          </label>

          <input type="submit" value="Je m'inscris" />
        </form>
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
