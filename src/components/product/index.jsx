import "./style.css"

const Product = props => {
  
  const {
    image = "fsf",
    productName="Product Name",
    productDescription="Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi quaerat doloremque dolor fugit."
  } = props

  return (
    <div className="service">
      <img className="service__image" src="" alt="" />
      <p className="service__title">{productName}</p>
      <p className="service__info">
        {productDescription}
      </p>
    </div>
  )
}

export default Product;