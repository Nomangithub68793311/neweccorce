import thumbnil from '../images/thumbnil.jpg'
import { AiOutlinePlayCircle } from 'react-icons/ai'

const AboutContent = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">About AppsLand</h1>
        <p className="max-w-2xl m-auto text-gray-400 mb-8">
          Nam et sagittis diam. Sed tempor augue sit amet egestas scelerisque.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 pb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Take a Look Around our App
          </h3>
          <p className="mb-3 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <p className="text-gray-500 mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto.
          </p>
          <button className="bg-red-400 px-6 py-2 rounded-full">
            Download
          </button>
        </div>
        <div>
          <div>
            <div className="w-4/5 m-auto relative">
              <img src={thumbnil} alt="thumbnil" />
              <div className="absolute top-0 left-0 w-full h-full bg-indigo-400 opacity-50"></div>
              <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <AiOutlinePlayCircle className="text-8xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
