const ProductDecorationImage = ({ image, alt }) => {
  return (
    <div className="section-image">
        <img src={ image } alt={ alt } />
    </div>
  );
}

export default ProductDecorationImage;
