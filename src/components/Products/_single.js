import cart from '../../assets/images/svg/button-cart.svg';
import check from '../../assets/images/svg/check.svg';
import Button from "../Global/Button";

const IconButton = () => {
  return (
    <button className="product-add-to-cart">
      <span> Ajouter au panier </span>
      <img id="product-button-cart" src={ cart } alt=""/>
      <img id="product-button-check" src={ check } alt=""/>
    </button>
  );
}

const Single = ({ product, icons = true }) => {
  const img = product.media.source;
  const name = product.name;
  const price = product.price.formatted;
  const link = '/products/' + product.permalink;

  return (
    <div className="product">
        <img src={ img } alt="Product"/>
        <span className="product-name"><a href={ link }> { name } </a></span>
        <span className="product-price"> { price }€ </span>
        { icons ? <IconButton /> : <Button text="Ajouter au panier" /> }
    </div>
  );
}

export default Single;
