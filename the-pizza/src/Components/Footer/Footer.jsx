import './Footer.css'
import { FaFacebook } from 'react-icons/fa';


function Footer () {
  return (
    <div className='footer px-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-lg-6'>
            <h3 className='h3'>The Pizza</h3>
            <h4 className='h4'>Napolitan Style Pizza</h4>
           
          </div>
          <div className='col-12 col-sm-6 col-lg-6'>
            <p>
              <span className='material-symbols-outlined'>location_on</span>
              Adresse: Bahnhofstraße 24, Parkplatz Ecke Farben Morscher{' '}
            </p>
            <p>
              <span className='material-symbols-outlined'>phone_iphone</span>{' '}
              Vorbestellungen: +43 660 1711525
            </p>
            <p><FaFacebook/>Termine werden immer aktuell gepostet </p>
          </div>
        </div>
      </div>
      <p>&#169; Copyright 2023 The Pizza. All Rights Reserved</p>
    </div>
  )
}

export default Footer
