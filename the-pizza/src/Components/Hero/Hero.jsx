import './Hero.scss'
import { Link } from 'react-router-dom'
import { TweenMax, Power3 } from 'gsap'
import { useEffect, useRef } from 'react'

function Hero () {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  let logoItem = useRef(null)
  let textItem = useRef(null)
  let textItem2 = useRef(null)

  useEffect(() => {
    TweenMax.to(logoItem, 0.8, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut,
      delay: 0.4,
      
    })
  }, [])
  useEffect(() => {
    TweenMax.to(textItem, 0.8, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut,
   
      delay: 0.6
    })
  }, [])
  useEffect(() => {
    TweenMax.to(textItem2, 0.8, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut,
      delay: 0.8,
  
    })
  }, [])

  return (
    <div className='cta text-center'>
      <div className='cta-text'>
        <h1
          ref={el => {
            logoItem = el
          }}
          className='logo'
        >
          THE PIZZA
        </h1>
        <h2
          ref={el => {
            textItem = el
          }}
          className='hero-text'
        >
          Napolitan Style Pizza
        </h2>
        <h4
          ref={el => {
            textItem2 = el
          }}
          className='hero-text'
        >
          Original Napolitanishe Pizza in Ybbs an Der Donau
        </h4>
        <Link to='/menu'>
          <button
            onClick={scrollToTop}
            type='button'
            className='btn btn-warning my-3 text-light'
          >
            Unsere Speisekarte
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
