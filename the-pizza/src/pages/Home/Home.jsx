
import Hero from '../../Components/Hero/Hero.jsx'
import Special from '../../Components/Special/Special.jsx'
import Story from '../../Components/Story/Story.jsx'
import './Home.css'

function Home () {
  return (
    <div className='home'>
     <Hero/>
     <Story/>
     <Special/>
    </div>
  )
}

export default Home
