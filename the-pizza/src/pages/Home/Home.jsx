import Hero from '../../Components/Hero/Hero.jsx'
import Location from '../../Components/Location/Location.jsx'

import Party from '../../Components/Party/Party.jsx'
import Special from '../../Components/Special/Special.jsx'
import Story from '../../Components/Story/Story.jsx'
import Testimonials from '../../Components/Testimonials/Testimonials.jsx'
import './Home.scss'

function Home () {
  return (
    <div className='home'>
      <Hero />
      <Story />
      <Party />
      <Special />
      <Testimonials />
      <Location />
    </div>
  )
}

export default Home
