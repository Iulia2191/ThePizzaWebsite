import './Location.scss'
import { FaFacebook } from 'react-icons/fa'

function Location () {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
  return (
    <div className='location pt-5'>
      <div className='location-title pb-3'>
        <h2>Komm und schnapp dir ein Stück!</h2>
      </div>
      <div className='map'>
        <div className='map-text'>
          <div className='col2'>
            <p>
              <span className='material-symbols-outlined px-2'>
                location_on
              </span>
              Adresse: Bahnhofstraße 24, Parkplatz Ecke Farben Morscher
            </p>
            <p>
              <span className='material-symbols-outlined px-2'>
                phone_iphone
              </span>
              Vorbestellungen: +43 660 1711525
            </p>
            <p className='px-2'>
              <a href='https://www.facebook.com/profile.php?id=61552396569253'>
                <span className='facebook mr-3'>
                  <FaFacebook />
                </span>
              </a>
              Termine werden immer aktuell gepostet
            </p>
          </div>
        </div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.982940665304!2d15.083345943439312!3d48.16841004651183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47724308f922c39b%3A0x237ecaded1fd12ea!2sBahnhofstra%C3%9Fe%2024%2C%203370%20Ybbs%20an%20der%20Donau!5e0!3m2!1sen!2sat!4v1698860360070!5m2!1sen!2sat'
          width='600'
          height='450'
          allowfullscreen=''
          loading='lazy'
        ></iframe>
      </div>
      <span className='material-symbols-outlined pt-5 arrow' onClick={scrollToTop}>
        keyboard_double_arrow_up
      </span>
    </div>
  )
}

export default Location
