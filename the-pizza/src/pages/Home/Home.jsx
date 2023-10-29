
import Hero from '../../Components/Hero/Hero.jsx'
import Special from '../../Components/Special/Special.jsx'
import Story from '../../Components/Story/Story.jsx'
import Testimonials from '../../Components/Testimonials/Testimonials.jsx'
import './Home.css'

function Home () {
  return (
    <div className='home'>
     <Hero/>
     <Story/>
     <Special/>
     <Testimonials/>
    </div>
  )
}

export default Home
