const Product = ({ data }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={data.image} alt={data.id} className="w-4/5 m-auto" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{data.name}</h3>
        <button className="text-white px-5 py-2 bg-black rounded-full">
          Add to Cart | {data.price}
        </button>
      </div>
    </div>
  )
}

export default Product
