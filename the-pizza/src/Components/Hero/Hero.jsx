
import './Hero.css'
import { Link } from 'react-router-dom'

function Hero () {
  return (
    <div className='cta text-center'>
      <div className='cta-text'>
        <h1>THE PIZZA</h1>
        <h2>Napolitan Style Pizza</h2>
        <h4>Original Napolitanishe Pizza in Ybbs an Der Donau</h4>
        <Link to='/menu'>
        <button type="button" className="btn btn-warning my-3">Entdeken Unsere Menü</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
