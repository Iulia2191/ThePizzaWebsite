import { Link } from 'react-router-dom'
import './Special.scss'

function Special () {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div className='special text-center pt-5'>
      <h2 className='pb-3'>Heutige Spezialität</h2>
      <div className='special-container '>
        <div className='special-img'>
          <img src='../img/prosciutto.jpg' alt='' />
        </div>
        <div className='special-text'>
          <h4>Prosciutto Crudo Pizza</h4>
          <p>
            Unsere köstliche Prosciutto Crudo Pizza ist eine wahre Gaumenfreude.
            Sie wird auf einem hauchdünnen, knusprigen Teig zubereitet mit
            fluffigem Rand und mit einer fruchtigen Tomatensauce bestrichen.
          </p>
          <Link to='/prosciutto'>
            <button onClick={scrollToTop} type='button' className='btn btn-warning my-3 text-light'>
              Finde mehr heraus
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Special
