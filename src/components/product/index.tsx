import "./style.css"


interface ProductProps {
  image: string;
  productName: string;
  productDescription: string;
}

const Product = ({image, productName, productDescription}: ProductProps) => {
  
  return (
    <div className="service">
      <img className="service__image" src={image} alt="" />
      <p className="service__title">{productName}</p>
      <p className="service__info">
        {productDescription}
      </p>
    </div>
  )
}

export default Product;