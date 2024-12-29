import '../styles/style.css'
import disha_logo from '../assets/images/disha_Logo.svg'
import seventyfiveyears from '../assets/images/disha_75years.png'

function AboutPage() {
  
  return (
    <>
      <nav>
        <div>
          <img src={disha_logo} alt="Disha logo" />
        </div>
        <p>negro</p>
        <div>
          <img src={seventyfiveyears} alt="Disha 75 years" />
        </div>
      </nav>
    </>
  )
}

export default AboutPage
