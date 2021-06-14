import { useEffect, useState } from "react";
import commerce from "../lib/commerce";

const Products = () => {
  const [ products, setProducts ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    commerce.products.list()
      .then(products => {
        setLoaded(true);
        return setProducts(products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  return (
    <div>
      <h1> Bleu Bamboo </h1>
      { loaded ? 'OK': 'Loading ...' }
    </div>
  );
}

export default Products;
