import { Link } from 'react-router-dom'
import { AiOutlineShopping } from 'react-icons/ai'
import useScrollPosition from '../custom-hooks/useScrollPosition'

const Header = () => {
  const scrollPosition = useScrollPosition()

  return (
    <header
      className={`${
        scrollPosition > 5
          ? 'py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
          : 'py-5'
      }  top-0 right-0 left-0 fixed transition-all ease-in-out duration-300 z-50`}
    >
      <div className="container flex">
        <div className="logo">Logo</div>
        <ul className="ml-auto flex w-5/12 justify-around items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-white rounded-full px-6 py-2.5 bg-black"
            >
              Buy Now
            </Link>
          </li>

          <li>
            <Link to="/cart">
              <AiOutlineShopping />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
