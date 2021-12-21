function Banner() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container grid grid-cols-2 justify-center content-center h-full">
        <div>
          <h1 className="text-4xl font-bold py-6 tracking-wide capitalize">
            showcase your mobile App
          </h1>
          <p className="text-lg pb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <div>
            <button className="bg-red-200 px-7 py-2.5 rounded-full mr-4">
              Download
            </button>
            <button className="border border-slate-900 px-7 py-2.5 rounded-full mr-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
