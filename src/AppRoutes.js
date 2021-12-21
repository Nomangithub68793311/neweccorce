import { Routes, Route } from 'react-router-dom'
import Home from './layout/Home'
import ContactUs from './layout/ContactUs'
import Features from './layout/Features'
import About from './layout/About'
import Shop from './layout/Shop'
import Cart from './layout/Cart'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/features" element={<Features />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
