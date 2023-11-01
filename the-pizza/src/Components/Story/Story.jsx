import { Link } from 'react-router-dom'
import './Story.scss'

function Story () {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div className='story pt-5 px-5'>
      <h2 className='text-center text-light'>UNSERE GESCHICHTE</h2>
      <div className='story-container container-fluid '>
        <div className='row'>
          <div className='story-img img1 col-12 col-xl-4 col-lg-4'>
            <img src='../img/story.jpg' alt='Pizza Salami' />
          </div>
          <div className='col-12 col-xl-4 col-lg-4 story-text px-5 d-flex flex-column justify-content-center align-items-center'>
            <h4>TRADITIONELL & MODERN</h4>
            <p>
              Wir sind begeistert, euch in unserer gemütlichen Ecke Neapels
              begrüßen zu dürfen, wo die Pizza-Kultur zum Leben erweckt wird.{' '}
            </p>
            <Link to='/about'>
              <button onClick={scrollToTop} type='button' className='btn btn-warning my-3 text-light'>
                Mehr lesen
              </button>
            </Link>
          </div>
          <div className='story-img img2 col-12 col-xl-4 col-lg-4'>
            <img src='../img/oven.jpg' alt='Pizza Oven' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
