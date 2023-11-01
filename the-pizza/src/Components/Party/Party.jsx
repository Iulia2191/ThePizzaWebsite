import './Party.scss'
import { Link } from 'react-router-dom'

function Party () {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <div className='party pt-5'>
         <h2 className='party-events'>Veranstaltungen</h2>
      <div className='party-container py-3'>
        <h2>LUST AUF EINE PIZZAPARTY?</h2>
        <p>
          Möchten Sie eine unvergessliche Pizza-Party für sich und Ihre Gäste
          veranstalten? Wir sind genau die richtige Wahl!
        </p>
        <p>Buchen Sie uns für Ihre private Veranstaltung!</p>
        <Link to='/contact'>
        <button  onClick={scrollToTop} type="button" className="btn btn-warning mb-5 text-light">Kontakt</button>
        </Link>
      </div>
    </div>
  )
}

export default Party
