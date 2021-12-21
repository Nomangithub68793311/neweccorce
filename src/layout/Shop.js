import ProductList from '../components/ProductList'

const Shop = () => {
  return (
    <div className="pt-20 container">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold pb-6 border-b border-gray-200">
          All Digital Business Card Products
        </h1>
      </div>
      <ProductList />
    </div>
  )
}

export default Shop
