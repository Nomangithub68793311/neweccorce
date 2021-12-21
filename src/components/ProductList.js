import productData from './../data/productData'
import Product from './Product'

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 gap-6 auto-rows-auto mb-20">
      {productData.map(item => (
        <Product key={item.id} data={item} />
      ))}
    </div>
  )
}

export default ProductList
