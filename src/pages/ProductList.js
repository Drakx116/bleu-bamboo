import {useEffect, useState} from "react";

import wheel from '../assets/images/products.png';

import '../assets/scss/pages/product-list.scss';
import Newsletter from "../components/Global/_newsletter";

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

  const ProductLink = ({ index }) => {
    const i = Math.abs(index / 60);
    const product = labels[i];
    const slug = '/products/' + product.slug;

    return <a href={ slug }> { product.name } </a>;
  }

  return (
    <div className="container">ddd
      <div id="product-data">
        <ProductLink index={ current } />
      </div>
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
