const Product = props => {
  
  const {
    image = "fsf",
    productName="Lorem, ipsum.",
    productDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi quaerat doloremque dolor fugit."
  } = props

  return (
    <div className="product">
      <img classNamesrc="" alt="" />
      <h3>{productName}</h3>
      <p>
        {productDescription}
      </p>
    </div>
  )
}

export default Product;