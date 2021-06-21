import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

import commerce from "../lib/commerce";
import '../assets/scss/pages/single_product.scss';

const SingleProduct = () => {
  const { slug } = useParams();
  const [ loaded, setLoaded ] = useState(false);
  const [ product, setProduct ] = useState({});

  useEffect(() => {
    commerce.products.retrieve(slug, { type: 'permalink' })
      .then(response => {
        setProduct(response);
        setLoaded(true);
      })
      .catch(error => console.log(error));
  }, []);

  const Product = () => {
    const image = product.media.source;

    return (
      <div className="container">
        <div id="single-product">
          <div id="product-preview">
            <img src={ image } alt={ product.name } />
          </div>

          <div id="product-content">
            <h1> { product.name } </h1>
          </div>

          <div className="footer"> </div>
        </div>
      </div>
    );
  };

  const Loading = () => {
    return (
      <div className="container">
        Loading ...
      </div>
    );
  }

  return loaded ? <Product /> : <Loading />;
}

export default SingleProduct;
