const Single = ({ product }) => {
  const img = product.media.source;
  const name = product.name;
  const price = product.price.formatted;

  return (
    <div className="product">
        <img src={ img } alt="Product"/>
        <span> { name } </span>
        <span> { price }€ </span>
        <button> Ajouter au panier </button>
    </div>
  );
};

export default Single;
