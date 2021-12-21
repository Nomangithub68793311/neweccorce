import AboutClientComment from '../components/AboutClientComment'
import AboutContent from '../components/AboutContent'
import AboutScreenshot from '../components/AboutScreenshot'
import AboutTeam from '../components/AboutTeam'

const About = () => {
  return (
    <div className="pt-20">
      <AboutContent />
      <AboutScreenshot />
      <AboutTeam />
      <AboutClientComment />
    </div>
  )
}

export default About
