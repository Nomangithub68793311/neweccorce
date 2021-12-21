import Faq from '../components/Faq'
import HomeVideoSection from '../components/HomeVideoSection'
import LatestNews from '../components/LatestNews'
import Testimonial from '../components/Testimonial'
import Banner from './../components/Banner'
import HomeFooterBanner from '../components/HomeFooterBanner'

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeVideoSection />
      <Testimonial />
      <HomeFooterBanner />
      <Faq />
      <LatestNews />
    </div>
  )
}

export default Home
