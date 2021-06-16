const ProductDecorationImage = ({ index, image, alt }) => {
  const className = 'section-image' + ((index === 1) ? ' second' : '');

  return (
    <div className={ className }>
        <img src={ image } alt={ alt } />
    </div>
  );
}

export default ProductDecorationImage;
