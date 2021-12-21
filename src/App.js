import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import './styles/output.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
