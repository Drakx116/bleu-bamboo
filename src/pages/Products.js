import { useEffect, useState } from 'react';
import commerce from '../lib/commerce';

import Single from '../components/Products/_single';
import ProductDecorationImage from '../components/Products/_decoration_image';

import soap from '../assets/images/Visuel-ambiance-savon.jpg';
import toothbrush from '../assets/images/Visuel-ambiance-dents.jpg';
import brush from '../assets/images/Visuel-ambiance-brosse.jpg';

import '../assets/scss/_products.scss';

const Products = () => {
  const [ products, setProducts ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    commerce.products.list()
      .then(products => {
        setLoaded(true);
        return setProducts(groupTwoByTwo(products.data))
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const groupTwoByTwo = products => {
    const sortedArray = [];
    let odd = false;
    let x = 0;

    products.forEach(product => {
      if (!(x in sortedArray)) {
        sortedArray[x] = [];
      }

      sortedArray[x].push(product);

      if (odd) { x++ }
      odd = (odd !== true);
    });

    return sortedArray;
  }

  const Loading = () => {
    return (
      <p> Loading ... </p>
    );
  }

  const ProductList = () => {
    const images = [ brush, soap, toothbrush ];

    return (
      <div id="products-container">
        { products.map((productTuple, i) => {
          const className = 'section-products' + ((i === 1) ? ' second' : '');

          return (
            <section key={ i }>
              <ProductDecorationImage index={ i } image={ images[i] } alt="Image" />
              <div className={ className }>
                { productTuple.map((product, j) => {
                   return <Single key={ j } product={ product } />
                }) }
              </div>
            </section>
          );
        }) }
      </div>
    );
  }

  return loaded ? <ProductList /> : <Loading />;
}

export default Products;
