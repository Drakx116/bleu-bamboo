import { useState } from "react";

import Newsletter from "../components/Global/_newsletter";
import Button from "../components/Global/Button";

import wheel from '../assets/images/products.png';
import separator from '../assets/images/separator.png';

import '../assets/scss/pages/product-list.scss';

const labels = [
  { name: "Brosse en Bambou", slug: 'bamboo-brush' },
  { name: "Peigne en Bambou", slug: 'bamboo-comb' },
  { name: "Savon de douche", slug: 'shower-soap' },
  { name: "Shampoing solide", slug: 'solid-shampoo' },
  { name: "Dentifrice", slug: 'toothpaste' },
  { name: "Brosse à dents", slug: "toothbrush" },
];

const ProductList = () => {
  const [ current, setCurrent ] = useState(0);

  const rotate = angle => {
    const productWheel = document.getElementById('wheel');
    const now = (current + angle) % 360;

    setCurrent(now);

    productWheel.style.transform = 'rotate('+now+'deg)';
  }

  const ProductData = ({ index }) => {
    const i = Math.abs(index / 60);
    const product = labels[i];
    const slug = '/products/' + product.slug;

    return (
      <div id="product-data">
        <span> { product.name } </span>
        <img src={ separator } alt="Séparation" />
        <a href={ slug }><Button text="Voir le produit" type="info" marginTop="2em" /></a>
      </div>
    ) ;
  }

  return (
    <div className="container">
      <ProductData index={ current } />

      <div id="product-wheel">
        <img id="wheel" src={ wheel } alt=""/>
        <button onClick={ () => rotate(60) } id="previous"> ← </button>
        <button onClick={ () => rotate(-60) } id="next"> → </button>
      </div>
      <Newsletter />
    </div>
  );
}

export default ProductList;
