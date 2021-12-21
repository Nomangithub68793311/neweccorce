import hFooterBanner from '../images/h_footer_banner.png'

const HomeFooterBanner = () => {
  return (
    <div className="container py-14">
      <h1 className="text-center text-4xl font-bold mb-6">
        What you can share
      </h1>
      <div className="max-w-3xl mx-auto">
        <img src={hFooterBanner} alt="hFooterBanner" />
      </div>
    </div>
  )
}

export default HomeFooterBanner
