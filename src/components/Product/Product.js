import './Product.scss';

function Product(props) {
  let {product} = props;
  return (
    <div className="Product">
        <div className="Product__img">
          <img className="" src={product.imgSrc} alt=""/>
        </div>
        <div className="Product__title">{product.title}</div>
        <div className="Product__description">{product.description}</div>
        <div className="Product__price">{product.price}</div>
        <div className="Product__button">Детальніше</div>
    </div>
  );
}

export default Product;