
import './Hero.scss'
import { Link } from 'react-router-dom'

function Hero () {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div className='cta text-center'>
      <div className='cta-text'>
        <h1>THE PIZZA</h1>
        <h2>Napolitan Style Pizza</h2>
        <h4>Original Napolitanishe Pizza in Ybbs an Der Donau</h4>
        <Link to='/menu'>
        <button  onClick={scrollToTop} type="button" className="btn btn-warning my-3">Unsere Speisekarte</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
