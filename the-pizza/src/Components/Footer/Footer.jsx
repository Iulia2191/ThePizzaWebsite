import './Footer.css'
import { FaFacebook } from 'react-icons/fa'

function Footer () {
  return (
    <div className='footer py-3'>
      <div className='container-fluid footer-container'>
          <div className='col1'>
            <h3 className='title'>The Pizza</h3>
            <h4 className='nap'>Napolitan Style Pizza</h4>
          </div>
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
                <span className='px-2 facebook'>
                  <FaFacebook />
                </span>
              </a>
              Termine werden immer aktuell gepostet
            </p>
        
        </div>
      </div>
      <p className='text-center py-2'>
        &#169; Copyright 2023 The Pizza. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
