import { useEffect, useState } from 'react';
import commerce from '../lib/commerce';

import Single from '../components/Products/_single';
import ProductDecorationImage from '../components/Products/_decoration_image';

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
    return (
      <div id="products-container">
        { products.map((productTuple, i) => {
          return (
            <section key={ i }>
              <ProductDecorationImage image="" alt="Image" />
              <div className="section-products">
                { productTuple.map((product, j) => {
                   return <div className="product" key={ j }>
                     <Single product={ product } />
                   </div>
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
