import cart from '../../assets/images/svg/button-cart.svg';
import check from '../../assets/images/svg/check.svg';

const Single = ({ product }) => {
  const img = product.media.source;
  const name = product.name;
  const price = product.price.formatted;

  return (
    <div className="product">
        <img src={ img } alt="Product"/>
        <span className="product-name"> { name } </span>
        <span className="product-price"> { price }€ </span>
        <button className="product-add-to-cart">
          <span> Ajouter au panier </span>
          <img id="product-button-cart" src={ cart } alt=""/>
          <img id="product-button-check" src={ check } alt=""/>
        </button>
    </div>
  );
};

export default Single;
