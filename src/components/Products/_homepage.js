import separator from "../../assets/images/separator.png";
import Loading from "../Global/Loading";
import Single from "./_single";

const List = ({ products }) => {
  return (
    <div id="product-list">
      { products.map((product, i) => <Single key={ i } product={ product } icons={ false }  />)}
    </div>
  );
};

const HomePageProducts = ({ loaded, products }) => {
  return (
    <section id="products-section">
      <div id="heading">
        <span id="title"> Avec vous, partout </span>
        <img src={ separator } alt="Image de séparation" />
        <span id="lyrics"> À chaque voyage loin d'ici ... </span>
      </div>
      { loaded ? <List products={ products } /> : <Loading /> }
    </section>
  );
};

export default HomePageProducts;
