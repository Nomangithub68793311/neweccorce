import { Link } from 'react-router-dom'
import { FiFacebook } from 'react-icons/fi'
import { BsYoutube, BsInstagram, BsTwitter } from 'react-icons/bs'
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="py-10 bg-black text-gray-50">
      <div className="container">
        <div className="border-b border-gray-800 grid grid-cols-5 gap-3 pb-8">
          <div>BRAND</div>
          <div>
            <h2 className="font-semibold text-lg mb-2">Shop</h2>
            <ul>
              <li>
                <Link to="/shop">Popls</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/shop">Shop All</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-2">Company</h2>
            <ul>
              <li>
                <Link to="/">Popl Teams</Link>
              </li>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Refund Policy</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-2">Connect with us</h2>
            <div className="flex items-center pt-2">
              <a href="http://facebook.com" target="_blank" rel="noreferrer">
                <FiFacebook className="text-xl mr-3" />
              </a>
              <a href="http://facebook.com" target="_blank" rel="noreferrer">
                <BsYoutube className="text-xl mr-3" />
              </a>
              <a href="http://facebook.com" target="_blank" rel="noreferrer">
                <BsInstagram className="text-xl mr-3" />
              </a>
              <a href="http://facebook.com" target="_blank" rel="noreferrer">
                <BsTwitter className="text-xl mr-3" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-2">Download the App</h2>

            <button className=" border-2 border-white px-2 py-1 rounded-md mb-2">
              <div className="flex items-center">
                <AiFillApple className="text-4xl pr-2" />
                <div className="flex flex-col items-start">
                  <p className="text-sm">Download On</p>
                  <p className="text-semibold text-xl">App Store</p>
                </div>
              </div>
            </button>

            <button className=" border-2 border-white px-2 py-1 rounded-md">
              <div className="flex items-center">
                <AiFillAndroid className="text-4xl pr-2" />
                <div className="flex flex-col items-start">
                  <p className="text-sm">Get It On</p>
                  <p className="text-semibold text-xl">Google Play</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <p className="text-center mt-5">&copy; copyright 2021 brand.</p>
      </div>
    </footer>
  )
}

export default Footer
